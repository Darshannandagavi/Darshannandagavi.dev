import {
  GoogleGenAI,
  Modality,
} from '@google/genai'

const DEFAULT_MODEL =
  import.meta.env.VITE_GEMINI_LIVE_MODEL ||
  'gemini-3.1-flash-live-preview'

const INPUT_SAMPLE_RATE = 16000
const OUTPUT_SAMPLE_RATE = 24000

function arrayBufferToBase64(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer)
  const chunkSize = 0x8000
  let binary = ''

  for (
    let offset = 0;
    offset < bytes.length;
    offset += chunkSize
  ) {
    binary += String.fromCharCode(
      ...bytes.subarray(offset, offset + chunkSize),
    )
  }

  return btoa(binary)
}

function base64ToArrayBuffer(base64) {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)

  for (
    let index = 0;
    index < binary.length;
    index += 1
  ) {
    bytes[index] = binary.charCodeAt(index)
  }

  return bytes.buffer
}

function pcm16ToFloat32(arrayBuffer) {
  const pcm = new Int16Array(arrayBuffer)
  const floatData = new Float32Array(pcm.length)

  for (
    let index = 0;
    index < pcm.length;
    index += 1
  ) {
    floatData[index] = pcm[index] / 32768
  }

  return floatData
}

export class PortfolioGeminiLive {
  constructor({
    systemInstruction,
    onStatus,
    onTranscript,
    onError,
  }) {
    this.systemInstruction = systemInstruction
    this.onStatus = onStatus
    this.onTranscript = onTranscript
    this.onError = onError

    this.session = null
    this.mediaStream = null
    this.inputAudioContext = null
    this.outputAudioContext = null
    this.workletNode = null
    this.microphoneSource = null
    this.silentGain = null

    this.outputSources = new Set()
    this.nextPlaybackTime = 0
    this.connected = false
    this.stopping = false
  }

  async connect() {
    const apiKey =
      import.meta.env.VITE_GEMINI_API_KEY?.trim()

    if (!apiKey) {
      throw new Error(
        'VITE_GEMINI_API_KEY is missing. Add it to the .env file and restart Vite.',
      )
    }

    if (
      !navigator.mediaDevices?.getUserMedia
    ) {
      throw new Error(
        'Microphone access is not supported in this browser.',
      )
    }

    this.stopping = false
    this.onStatus?.('connecting')

    const ai = new GoogleGenAI({ apiKey })

    this.session = await ai.live.connect({
      model: DEFAULT_MODEL,

      callbacks: {
        onopen: () => {
          this.connected = true
          this.onStatus?.('listening')
        },

        onmessage: (message) => {
          this.handleMessage(message)
        },

        onerror: (event) => {
          const message =
            event?.message ||
            'Gemini Live encountered a connection error.'

          this.onError?.(message)
          this.onStatus?.('error')
        },

        onclose: () => {
          this.connected = false

          if (!this.stopping) {
            this.onStatus?.('idle')
          }
        },
      },

      config: {
        responseModalities: [Modality.AUDIO],

        systemInstruction: {
          parts: [
            {
              text: this.systemInstruction,
            },
          ],
        },

        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: 'Charon',
            },
          },
        },

        inputAudioTranscription: {},
        outputAudioTranscription: {},

        automaticActivityDetection: {
          disabled: false,
          startOfSpeechSensitivity:
            'START_SENSITIVITY_HIGH',
          endOfSpeechSensitivity:
            'END_SENSITIVITY_HIGH',
          prefixPaddingMs: 120,
          silenceDurationMs: 650,
        },
      },
    })

    await this.startMicrophone()

    this.session.sendRealtimeInput({
      text:
        'The visitor has opened the portfolio voice assistant. Briefly greet them, introduce yourself as Friday, and ask what they would like to know about Darshan. Keep it under two sentences.',
    })
  }

  async startMicrophone() {
    this.mediaStream =
      await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })

    const AudioContextClass =
      window.AudioContext ||
      window.webkitAudioContext

    this.inputAudioContext =
      new AudioContextClass()

    await this.inputAudioContext.audioWorklet.addModule(
      '/friday-audio-worklet.js',
    )

    this.microphoneSource =
      this.inputAudioContext.createMediaStreamSource(
        this.mediaStream,
      )

    this.workletNode =
      new AudioWorkletNode(
        this.inputAudioContext,
        'friday-portfolio-audio-processor',
      )

    this.silentGain =
      this.inputAudioContext.createGain()

    this.silentGain.gain.value = 0

    this.workletNode.port.onmessage = (event) => {
      if (
        !this.connected ||
        !this.session ||
        this.stopping
      ) {
        return
      }

      const base64Audio =
        arrayBufferToBase64(event.data)

      this.session.sendRealtimeInput({
        audio: {
          data: base64Audio,
          mimeType: `audio/pcm;rate=${INPUT_SAMPLE_RATE}`,
        },
      })
    }

    this.microphoneSource.connect(
      this.workletNode,
    )

    this.workletNode.connect(this.silentGain)
    this.silentGain.connect(
      this.inputAudioContext.destination,
    )

    if (
      this.inputAudioContext.state === 'suspended'
    ) {
      await this.inputAudioContext.resume()
    }
  }

  handleMessage(message) {
    const serverContent = message?.serverContent

    if (serverContent?.interrupted) {
      this.stopAudioPlayback()
      this.onStatus?.('listening')
    }

    const inputTranscript =
      serverContent?.inputTranscription?.text

    if (inputTranscript) {
      this.onTranscript?.({
        role: 'visitor',
        text: inputTranscript,
      })

      this.onStatus?.('thinking')
    }

    const outputTranscript =
      serverContent?.outputTranscription?.text

    if (outputTranscript) {
      this.onTranscript?.({
        role: 'friday',
        text: outputTranscript,
      })
    }

    const parts =
      serverContent?.modelTurn?.parts || []

    for (const part of parts) {
      const audioData =
        part?.inlineData?.data ||
        part?.inline_data?.data

      const mimeType =
        part?.inlineData?.mimeType ||
        part?.inline_data?.mime_type ||
        ''

      if (
        audioData &&
        mimeType.includes('audio')
      ) {
        this.scheduleAudio(audioData)
      }
    }

    if (serverContent?.turnComplete) {
      window.setTimeout(() => {
        if (
          this.outputSources.size === 0 &&
          this.connected
        ) {
          this.onStatus?.('listening')
        }
      }, 150)
    }
  }

  async scheduleAudio(base64Audio) {
    const AudioContextClass =
      window.AudioContext ||
      window.webkitAudioContext

    if (!this.outputAudioContext) {
      this.outputAudioContext =
        new AudioContextClass({
          sampleRate: OUTPUT_SAMPLE_RATE,
        })
    }

    if (
      this.outputAudioContext.state === 'suspended'
    ) {
      await this.outputAudioContext.resume()
    }

    const pcmBuffer =
      base64ToArrayBuffer(base64Audio)

    const floatSamples =
      pcm16ToFloat32(pcmBuffer)

    const audioBuffer =
      this.outputAudioContext.createBuffer(
        1,
        floatSamples.length,
        OUTPUT_SAMPLE_RATE,
      )

    audioBuffer.copyToChannel(floatSamples, 0)

    const source =
      this.outputAudioContext.createBufferSource()

    source.buffer = audioBuffer
    source.connect(
      this.outputAudioContext.destination,
    )

    const currentTime =
      this.outputAudioContext.currentTime

    const startTime = Math.max(
      currentTime + 0.025,
      this.nextPlaybackTime,
    )

    source.start(startTime)

    this.nextPlaybackTime =
      startTime + audioBuffer.duration

    this.outputSources.add(source)
    this.onStatus?.('speaking')

    source.onended = () => {
      this.outputSources.delete(source)

      if (
        this.outputSources.size === 0 &&
        this.connected
      ) {
        this.nextPlaybackTime =
          this.outputAudioContext.currentTime

        this.onStatus?.('listening')
      }
    }
  }

  stopAudioPlayback() {
    this.outputSources.forEach((source) => {
      try {
        source.stop()
      } catch {
        // Audio source may already have stopped.
      }
    })

    this.outputSources.clear()

    if (this.outputAudioContext) {
      this.nextPlaybackTime =
        this.outputAudioContext.currentTime
    }
  }

  async disconnect() {
    this.stopping = true
    this.connected = false

    this.stopAudioPlayback()

    if (this.workletNode) {
      this.workletNode.port.onmessage = null
      this.workletNode.disconnect()
      this.workletNode = null
    }

    this.microphoneSource?.disconnect()
    this.microphoneSource = null

    this.silentGain?.disconnect()
    this.silentGain = null

    this.mediaStream
      ?.getTracks()
      .forEach((track) => track.stop())

    this.mediaStream = null

    if (this.inputAudioContext) {
      await this.inputAudioContext
        .close()
        .catch(() => {})

      this.inputAudioContext = null
    }

    if (this.outputAudioContext) {
      await this.outputAudioContext
        .close()
        .catch(() => {})

      this.outputAudioContext = null
    }

    if (this.session) {
      try {
        this.session.close()
      } catch {
        // Session may already be closed.
      }

      this.session = null
    }

    this.onStatus?.('idle')
  }
}
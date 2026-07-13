class FridayPortfolioAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super()

    this.targetSampleRate = 16000
    this.inputBuffer = []
    this.chunkSize = 2048
  }

  convertToPcm16(samples) {
    const pcm = new Int16Array(samples.length)

    for (let index = 0; index < samples.length; index += 1) {
      const sample = Math.max(
        -1,
        Math.min(1, samples[index]),
      )

      pcm[index] =
        sample < 0
          ? sample * 0x8000
          : sample * 0x7fff
    }

    return pcm
  }

  resample(samples) {
    if (sampleRate === this.targetSampleRate) {
      return samples
    }

    const ratio = sampleRate / this.targetSampleRate
    const outputLength = Math.floor(
      samples.length / ratio,
    )

    const output = new Float32Array(outputLength)

    for (
      let outputIndex = 0;
      outputIndex < outputLength;
      outputIndex += 1
    ) {
      const inputPosition = outputIndex * ratio
      const lowerIndex = Math.floor(inputPosition)

      const upperIndex = Math.min(
        lowerIndex + 1,
        samples.length - 1,
      )

      const fraction = inputPosition - lowerIndex

      output[outputIndex] =
        samples[lowerIndex] * (1 - fraction) +
        samples[upperIndex] * fraction
    }

    return output
  }

  process(inputs) {
    const inputChannel = inputs?.[0]?.[0]

    if (!inputChannel) {
      return true
    }

    for (
      let index = 0;
      index < inputChannel.length;
      index += 1
    ) {
      this.inputBuffer.push(inputChannel[index])
    }

    const requiredInputSamples = Math.ceil(
      this.chunkSize *
        (sampleRate / this.targetSampleRate),
    )

    while (
      this.inputBuffer.length >= requiredInputSamples
    ) {
      const sourceSamples = new Float32Array(
        this.inputBuffer.splice(
          0,
          requiredInputSamples,
        ),
      )

      const resampled = this.resample(sourceSamples)
      const pcm = this.convertToPcm16(resampled)

      this.port.postMessage(pcm.buffer, [pcm.buffer])
    }

    return true
  }
}

registerProcessor(
  'friday-portfolio-audio-processor',
  FridayPortfolioAudioProcessor,
)
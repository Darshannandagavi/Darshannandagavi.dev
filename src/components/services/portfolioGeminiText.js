import { GoogleGenAI } from '@google/genai'

const DEFAULT_TEXT_MODEL =
  import.meta.env.VITE_GEMINI_TEXT_MODEL ||
  'gemini-2.5-flash'

function normalizeResponseText(value) {
  return String(value || '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/ +([.,!?;:])/g, '$1')
    .replace(
      /([.,!?;:])(?=[A-Za-z0-9])/g,
      '$1 ',
    )
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function createConversationContents(messages) {
  return messages
    .filter((message) => message?.text?.trim())
    .slice(-12)
    .map((message) => ({
      role:
        message.role === 'friday'
          ? 'model'
          : 'user',
      parts: [
        {
          text: message.text.trim(),
        },
      ],
    }))
}

export async function sendPortfolioTextMessage({
  message,
  history = [],
  systemInstruction,
}) {
  const apiKey =
    import.meta.env.VITE_GEMINI_API_KEY?.trim()

  if (!apiKey) {
    throw new Error(
      'VITE_GEMINI_API_KEY is missing. Add it to the .env file and restart Vite.',
    )
  }

  const cleanMessage = String(message || '').trim()

  if (!cleanMessage) {
    throw new Error('Please enter a message.')
  }

  const ai = new GoogleGenAI({ apiKey })

  const contents = createConversationContents([
    ...history,
    {
      role: 'visitor',
      text: cleanMessage,
    },
  ])

  const response = await ai.models.generateContent({
    model: DEFAULT_TEXT_MODEL,
    contents,
    config: {
      systemInstruction,
      temperature: 0.45,
      maxOutputTokens: 500,
    },
  })

  const responseText = normalizeResponseText(
    response?.text,
  )

  if (!responseText) {
    throw new Error(
      'Friday did not return a response. Please try again.',
    )
  }

  return responseText
}
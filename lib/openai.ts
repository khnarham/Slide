import OpenAi from 'openai'

export const openai = new OpenAi({
  apiKey: process.env.OPEN_AI_KEY,
  model: 'gpt-4', // or another valid model like gpt-3.5
})
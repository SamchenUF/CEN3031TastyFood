import { ChatCompletionRequestMessage } from 'openai'
//Send message to chatgpt api and get response back
export const sendMessage = async (messages) => {
  try {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
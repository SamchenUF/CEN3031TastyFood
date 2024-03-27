import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: "", dangerouslyAllowBrowser: true//Put api key here 
});

/*export default async function gptCall(message) {
  const body = await req.json();
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: message,
  });
  const actualResponse = response.choices[0].text;
  res.status(200).json({ response: actualResponse });
  
}*/
export default async function gptCall(messages) {
  const temp = "WORKING";
  return temp;
}
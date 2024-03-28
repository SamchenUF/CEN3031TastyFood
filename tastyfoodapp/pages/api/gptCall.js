import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_CHATGPT_API_KEY, dangerouslyAllowBrowser: true//Put api key here 
});

export default async function gptCall(message) {
  console.log(message);
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content":message}],
  });
  const actualResponse = response.choices[0].message.content;
  return actualResponse;
  
}
/*export default async function gptCall(messages) {
  const temp = "WORKING";
  return temp;
}*/
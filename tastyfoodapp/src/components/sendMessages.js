const { Configuration, OpenAIApi } = require("openai");

export default async function handler(req, res) {

  const configuration = new Configuration({
    apiKey: "",//Put api key here
  });

  const openai = new OpenAIApi(configuration);
  const body = await req.json();
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: body.messages,
  });
  const actualResponse = completion.choices[0].message;

  return NextResponse.json({ output: actualResponse }, { status: 200 });
}
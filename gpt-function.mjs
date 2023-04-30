import config from "dotenv";
import { Configuration, OpenAIApi } from "openai";

config.config({
  path: "./.env",
});

const configuration = new Configuration({
  apiKey: process.env.API_TOKEN,
});

const openai = new OpenAIApi(configuration);

export async function responseGpt(programmingLanguage, code) {
  return await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `converta esse código de ${programmingLanguage} para java: ${code} devidamente` }],
    temperature: 0.5,
    max_tokens: 200,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["###"],
  });
}

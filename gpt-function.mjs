import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export async function responseGpt(programmingLanguage, code) {
  return await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `converta esse código de ${programmingLanguage} para java: ${code} devidamente`,
    temperature: 0,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["###"],
  });
}

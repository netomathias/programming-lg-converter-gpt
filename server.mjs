import express, { json } from "express";
import { responseGpt } from "./gpt-function.mjs";

const app = express();

app.listen(3000, () => console.log("server is up"));
app.use(json());

app.post("/", async (req, res) => {
  const result = await responseGpt(req.body.programmingLanguage, req.body.code);
  res.send(result.data.choices[0].message.content);
});

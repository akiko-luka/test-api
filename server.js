import express from "express";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  res.send("welcome")
})

app.get("/random-number", (req,res) => {
  const number = Math.floor(Math.random() * 100)
  res.json({value: number})
})

app.get("/greeting", (req,res) => {
  const greetings = ["hey", "hi", "hola", "ciao"]
  const greetingIndex = Math.floor(Math.random() * greetings.length)
  res.json({value: greetings[greetingIndex]})
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})
import express from "express";

console.log();
const app = express();
const PORT = process.env.PORT
const environment = process.env.NODE_ENV;

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/random-number", (req, res) => {
  const number = Math.floor(Math.random() * 100);
  res.json({ value: number });
});

app.get("/greeting", (req, res) => {
  const greetings = ["hey", "hi", "hola", "ciao"];
  const greetingIndex = Math.floor(Math.random() * greetings.length);
  res.json({ value: greetings[greetingIndex] });
});

app.listen(PORT, () => {
  if(environment === "development") {
    console.log(`server running on http://localhost:${PORT}`);
  } else {
    console.log(`server running on production`);
  }
});

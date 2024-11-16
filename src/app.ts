import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = Number(process.env.port);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
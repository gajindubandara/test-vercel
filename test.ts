import express, { Request, Response } from "express";
import { getTest } from "./controllers/testController.js";

const app = express();

app.get("/", getTest);

export default function handler(req: Request, res: Response) {
    app(req, res);
}

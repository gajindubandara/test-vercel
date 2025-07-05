import express from "express";
import serverless from "serverless-http";
import { getTest } from "./controllers/testController.js";

const app = express();

app.get("/", getTest);

export const handler = serverless(app);
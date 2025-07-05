// import express from "express";
// import serverless from "serverless-http";
// import { getTest } from "./controllers/testController.js";
//
// const app = express();
//
// // This will match any request path
// app.use(getTest);
//
// export default serverless(app);
import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from minimal test API" });
});

export default serverless(app);

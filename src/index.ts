import express, { Request, Response } from 'express'
import {getTest} from "./controllers/testController";

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
	return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
	return res.send('pong 🏓')
})

app.get("/test", getTest);

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`)
})

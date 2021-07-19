import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import axios from 'axios'

const app: Application = express()
const port = 4000

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use(helmet())

// Routes
app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.send('Hello World')
})

app.listen(port, (): void => {
  console.log(`Connected successfully on port ${port}`)
})

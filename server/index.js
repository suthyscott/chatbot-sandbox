import express from 'express' 
import ViteExpress from 'vite-express'
import session from 'express-session'
import dotenv from 'dotenv'
import {Log} from './models/log.js'
dotenv.config()
const {PORT, SECRET} = process.env
import ctrl from './controller.js'
const {addLog} = ctrl

const app = express()


app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))

app.post('/api/log', addLog)


ViteExpress.listen(app, PORT, () => console.log(`Take us to warp ${4545}`))
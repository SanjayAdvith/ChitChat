import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)



app.use(cors()) //cors is used for inter communication between URL
io.on("connection", () => {
    console.log('New Socket is Connected');
})


app.get('/', (req, res) => {
    res.send('Hello world')
})





const port = 5000 || process.env.PORT
httpServer.listen(port, () => {
    console.log('server listning port 5000');
})
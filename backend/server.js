import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

const users = [{}]

app.use(cors()) //cors is used for inter communication between URL

io.on("connection", (socket) => {
    console.log('New Socket is Connected');


    socket.on('join', ({ user }) => {
        users[socket.id] = user
        console.log(`${user} has joined`);
        socket.broadcast.emit('userjoin', { user: 'Admin', message: `${users[socket.id]} has joined` })
    })

    socket.emit('welcome', { user: 'Admin', message: 'Welcome to the chat' })

    socket.on('disconnect', () => {
        socket.broadcast.emit('leave', { user: users[socket.id], message: 'left' })
        console.log('User left');
    })

})



app.get('/', (req, res) => {
    res.send('Hello world')
})





const port = 5000 || process.env.PORT
httpServer.listen(port, () => {
    console.log('server listning port 5000');
})
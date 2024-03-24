import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const router = express()
const httpServer = createServer(router)
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
})

io.on("connection", (socket) => {
    console.log('connection received from ' + socket.id)
    socket.emit("welcome-msg");
    socket.on("send-message", (arg) => {
        socket.broadcast.emit("send-message", arg)
    })
    socket.on('disconnect', () => {
        console.log('disconnect from ' + socket.id)
    })
})

httpServer.listen(8808)

console.log("online")

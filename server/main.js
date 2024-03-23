import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const router = express()
const httpServer = createServer(router)
const io = new Server(httpServer, {})

io.on("connection", (socket) => {
    console.log('connection received from ' + socket.id)
    socket.emit("welcome-msg");
    socket.on("send-message", (arg) => {
        socket.broadcast.emit("send-message", arg)
    })
})

router.use(express.static('public'))
httpServer.listen(8808)

console.log("online")

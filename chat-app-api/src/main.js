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
router.post('/chat-coins', (req, res) => {
    const coins = Math.floor(Math.random() * 10)

    res.status(200).json({
        chatCoins: coins,
    })
})

router.get('/testing', (req, res) => {
    res.status(200).send('hello');
})
httpServer.listen(8808)

console.log("online")

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client'

const socket = io('http://localhost:8808');

export const ChatService = () => {
    const [isConnected, setIsConnected] = useState(socket.connected)

    useEffect(() => {

        const onConnect = () => {
            setIsConnected(true)
        }

        const onDisconnect = () => {
            setIsConnected(false)
        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
        }
    }, []);

    return {
        isConnected
    }
}
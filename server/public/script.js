const socket = io();

socket.on("welcome-msg", () => {
    const messages = document.getElementsByClassName('messages')[0]

    const messageHTML = document.createElement('p')
    messageHTML.className = 'server-message'
    messageHTML.innerHTML = `Welcome to the Chat!`

    messages.appendChild(messageHTML)
})

socket.on("send-message", (arg) => {
    const messages = document.getElementsByClassName('messages')[0]

    const messageHTML = document.createElement('p')
    messageHTML.className = 'other-message'
    messageHTML.innerHTML = `Them: ${arg}`

    messages.appendChild(messageHTML)
})


const sendMessage = (e) => {
    const inputMessage = document.getElementsByClassName('message-input__input')[0]
    const messages = document.getElementsByClassName('messages')[0]
    const myMessage = inputMessage.value

    const messageHTML = document.createElement('p')
    messageHTML.className = 'your-message'
    messageHTML.innerHTML = `You: ${myMessage}`
    
    messages.appendChild(messageHTML)
    inputMessage.value = ""

    socket.emit("send-message", myMessage)
}
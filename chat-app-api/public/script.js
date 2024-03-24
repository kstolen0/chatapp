const socket = io();
let chatCoins = 5;
const coinSpan = document.querySelector('.coin-amount');

const deductChatCoins = () => {
    chatCoins--;
    coinSpan.innerHTML = chatCoins
}


coinSpan.innerHTML = chatCoins

socket.on("welcome-msg", () => {
    const messages = document.querySelector('.messages')
    const messageHTML = document.createElement('p')
    messageHTML.className = 'server-message'
    messageHTML.innerHTML = `Welcome to the Chat!`

    messages.appendChild(messageHTML)
})

socket.on("send-message", (arg) => {
    const messages = document.querySelector('.messages')
    const messageHTML = document.createElement('p')
    messageHTML.className = 'other-message'
    messageHTML.innerHTML = `Them: ${arg}`

    messages.appendChild(messageHTML)
})


const sendMessage = (e) => {
    const inputMessage = document.querySelector('.message-input__input')
    const messages = document.getElementsByClassName('messages')[0]
    const myMessage = inputMessage.value

    const messageHTML = document.createElement('p')
    messageHTML.className = 'your-message'
    messageHTML.innerHTML = `You: ${myMessage}`
    
    messages.appendChild(messageHTML)
    inputMessage.value = ""
    
    socket.emit("send-message", myMessage)
    deductChatCoins()
}

const getMoreCoins = () => {

    fetch('/chat-coins', {
        method: 'POST'
    })
        .then(async res => {
            const result = await res.json()
            chatCoins += result.chatCoins
            coinSpan.innerHTML = chatCoins
           
        })

}

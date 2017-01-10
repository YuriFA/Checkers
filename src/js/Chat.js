export default class Chat {
  constructor () {
    this.chat = document.getElementById('chat')
    this.chatMessages = []
    this.chatContent = document.getElementById('chat_content')
    this.messageField = document.getElementById('message')
    this.sendBtn = document.getElementById('send')
    this.bindEvents()
  }

  show () {
    if (this.chat) {
      this.chat.style.display = 'block'
    }
  }

  clearField () {
    this.messageField.value = ''
  }

  bindEvents () {
    this.onSend = this.onSend.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.sendBtn.addEventListener('click', this.onSend)
    this.messageField.addEventListener('keyup', this.onKeyUp)
  }

  changeSendEvent (clickHandler) {
    this.sendBtn.removeEventListener('click', this.onSend)
    this.sendBtn.addEventListener('click', clickHandler)
  }

  onSend (e) {
    var text = this.messageField.value
    if (text.length) {
      text = `You: ${text}`
      this.clearField()
      this.addMessage(text)
    }
  }

  onKeyUp (e) {
    if (e.keyCode === 13) {
      this.sendBtn.click()
    }
  }

  addMessage (message) {
    this.chatMessages.push(message)
    var html = ''
    for (var i = 0; i < this.chatMessages.length; i++) {
      html += `${this.chatMessages[i]}<br />`
    }
    if (this.chatContent) {
      this.chatContent.innerHTML = html
    }
  }
}

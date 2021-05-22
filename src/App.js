import React from 'react'
import ChatBot from 'react-simple-chatbot'

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
]

function App() {
  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  )
}

export default App

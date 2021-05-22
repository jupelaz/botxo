import React from 'react'
import ChatBot from 'react-simple-chatbot'

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '4',
  },
  {
    id: '4',
    message: 'Do you want to play a game?',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'Yes', trigger: '6' },
      { value: 2, label: 'No', trigger: '10' },
    ],
  },
  {
    id: '6',
    message: 'What number I am thinking?',
    trigger: '7',
  },
  {
    id: '7',
    options: [
      { value: 1, label: 'Number 1', trigger: '9' },
      { value: 2, label: 'Number 2', trigger: '8' },
      { value: 3, label: 'Number 3', trigger: '8' },
    ],
  },
  {
    id: '8',
    message: 'Wrong answer, try again.',
    trigger: '7',
  },
  {
    id: '9',
    message: 'Awesome! You are a telepath!',
    end: true,
  },
  {
    id: '10',
    message: 'OK. Bye!',
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

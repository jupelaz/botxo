# Preparing an interview with [BotXO](https://www.botxo.ai/job/front-end-developers/)

I'm getting ready for an interview with BotXO team for the current [role](https://www.botxo.ai/job/front-end-developers/). They provide a AI Chatbot builder to their clients, and their application, as the offer tells, uses React v.16, Redux, Webpack, Enzyme, Azure Dev Ops, Storybook, jest, enzyme, sentry, playwright framework, cypress, SSR, GraphQL(Relay), RESTful APIs, NPM, Babel, AWS, Docker, Elastic Search, Elastic beanstalk.

So I will try to use the most of them in this app.

As their app is a Chatbot, it would be fine to implement a react-chatbot. Looking in google, the easiest ocurrence is [react-simple-chatbox](https://github.com/lucasbassetti/react-simple-chatbot). So I will try to implement that, and from there, use the other tools.

Wish me luck.

## First issues

The current version of React is 17.0.2, and the version needed for react-simple-chatbot is 16.3.0. So I removed all the uneeded (by now) npm packages, and only keep the following

```JSON
  "dependencies": {
    "react": "^16.3.0",
    "react-dom": "^16.3.0",
    "react-scripts": "^4.0.3",
    "react-simple-chatbot": "^0.6.1"
  }
```

and replace the default react app with the example:

```javascript
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
```

Giving this result:
![Imgur](https://i.imgur.com/8tXYMm2.png)

I will upload this first version to github, and set it as a starting point.

## SSR

ServerSide Rendering

As the web doent especify which kind of SSR the use (common uses are ), we will create our own, for that, I will follow Flavio Copes [guide](https://flaviocopes.com/react-server-side-rendering/).

## webpack, babel, npm

They are integrated in create-react-app, so it feels like loading them twice for this app could be harmful. I could be wrong, as I'm not an expert.

## Redux and StoryBook

I will integrate redux without using it, as I dont need it now. And, because I havent used Storybook yet, I will integrate it first.

After installing it, seems like a cool way to document new components. As in this project, by now, I only use a external component, don´t have any "homemade" components to add, so I will keep the default ones. As earlier said, I will add a empty Redux. I will add redux-devtools-extension and redux-thunk, one for added info in Chrome, and the other is a redux-middleware to allow redux to make asyn actions. So I made a Redux store. Also, added a wider example for the chatbot.

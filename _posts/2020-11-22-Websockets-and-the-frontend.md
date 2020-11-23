---
title: Websockets and the Frontend
date: 2020-11-22 00:00:00 +0800
author: sam
---

WebSockets are great. They provide a bi-directional, real-time data flow between the server and the client. This can often be an elegant solution when one needs a constant stream of data to/from the server. There's a whole host of common use cases, one of which will be explored here.


<!--more-->


# CKC Management

Here at CKC we have an unofficial, somewhat-hobby project that we work on sporadically. The app is a project management tool that is still in quite a premature phase, but it was a great excuse for us to delve into the world of WebSockets. One of the main features as of now is a Kanban board. WebSockets pair quite seamlessly with Kanban boards. They allow multiple team members to edit the board at the same time while keeping all users up to date in real time. 

---

There are several techniques to wield the power of WebSockets. The method we chose for this project was fairly simple: we used a standard REST API to make changes on the backend, then we send a message through to the WebSocket to indicate that specific data has changed. Furthermore, to make changes, we can call a PATCH method to the API, and once that resolves, we send a message up to the WebSocket. This message is then sent to the other clients that are listening. The message dictates what data needs updated. So once a client receives a message from it’s WebSocket connection, it triggers a GET request to fetch the newly updated data. This is a, somewhat, nontraditional way to set up a WebSocket and definitely has its cons. It would be more efficient and responsive for the client to send/receive data straight through the socket’s connection instead of pairing it with a REST architecture. While we may change this in the future, we were going for simple with this initial usage. WebSockets are fairly new to the team so having a simple implementation helps new dev's jump on the project and understand it quicker.

# Let's get to work

I recently implemented a WebSocket connection in a barebones React Native app. Our web app is built with Vue.js but I’ll be going over the React Native implementation. We are assuming that you already have a backend running at this point that I will not be covered in this article. 

This whole thing is fairly straightforward but I assume you have a React Native project up and running at this point. 

To start, we need to initialize the connection to our WebSocket:

```js
...

const ws = new WebSocket("<websocket_endpoint>")

...
```

From there, in the top level component of the app, let's add an event listener to this connection. To initialize this listener once when the app loads and never again, we can utilize React’s ```useEffect``` hook. useEffect is handy here because we need to set up this event listener when the app first loads rather than reinitializing it every render:

```js
const ws = new WebSocket("<websocket_endpoint>")


function App() {
    ...
    
    useEffect(() => {
            // This fire's when the component mounts
            ws.onmessage = handleWsMessage
    }, [])
    
    ...
}


```
So now that we have the event listener up and running, our function `handleWsMessage`, will fire every time something comes through our socket. If you recall, we will just be receiving a simple message and make some API calls based on that message.  Our function `handleWsMessage` will handle this message and decide what to do. In this case we’ll just run a simple GET request to our API whenever we get a message that indicates new data exists on the server. To keep things simple, we’ll just read down data and not write any message back up to the socket. Our web app will do the writing for now. Our GET request will fetch data and then we can store that data in our state variable `tasks`:

```js
...

const [tasks, setTasks] = useState([])

const fetchTasks = async () => {
    const tasks = await getTasks() // our GET request

    setTasks(tasks)
}

const handleWsMessage = async (message) => {
    let message_obj = JSON.parse(message.data)

    if (message_obj.type === 'task_update') {
        await fetchTasks()
    }
}

useEffect(() => {
    // This fire's when the component mounts
    ws.onmessage = handleWsMessage
}, [])

...
```

So we’ve done it. We are listening to our WebSocket, and then fetching changes accordingly. All we have left is to render this nicely to the page:

# Let's see it in action:

On the left we have a Vue.js web app and on the right is our React Native app. Both are communicating with the same backend and WebSocket.

<div>
    <img src="/assets/images/articles/websocket-example.gif">
</div>

And there you have it: an entry level approach to working with WebSockets. These can be quite powerful and I encourage you to experiment with them. Think about how a WebSocket connection could be used in your next project to take things to the next level! 

## Full Example

I've added a bit more code to perfect things a bit. 

```jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { View } from 'react-native';
import { Header } from 'react-native-elements'

// components
import Task from "./Task";

//utils
import { getTasks } from "./utils";

//websocket connection
const ws = new WebSocket("ws://localhost/dashboard")

function App() {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const tasks = await getTasks()
        setTasks(tasks)
    }

    const handleWsMessage = async (message) => {
        let message_obj = JSON.parse(message.data)
        if (message_obj.type === 'task_update') {
            await fetchTasks()
        }
    }

    useEffect( () => {
        // This fires when the component mounts
        ws.onmessage = handleWsMessage

        async function getTasks() {
            // This local scoped function allows us to use async inside our useEffect hook
            await fetchTasks()
        }
        getTasks()

        // this cleans up the useEffect hook
        return getTasks
    }, [])

    return (
        <View>
            <TaskContainer>
                {
                    tasks.map((task, i)=>{
                        return (
                            <Task key={i} task={task}/>
                        )
                    })
                }
            </TaskContainer>
        </View>
    );
}

export default App


// Simple styled-component usage
const TaskContainer = styled.View` 
  justify-content: center;
  align-content: center;
`


```


# Server-Sent Events &#040;SSE&#041; Example
`Server-Sent Events` means that the **client** can listen to events from a **server** and the **server** sends events to the **client**, which can decide to accept them.

Events is a *one-way connection*, which means that you can only send messages from the **server** to the **client**. The **client** cannot send messages to the **server**.

## Setup the server

    yarn init -y
    yarn add express
    touch server.js

## Setup the client
    
    touch client.js
    touch index.html

## Lauch the server

    node server

## Lauch the client

    yarn global add serve
    serve
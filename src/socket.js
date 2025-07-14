/*
import { io } from "socket.io-client";
➡️ You’re importing the io function from the socket.io-client library.

This is the client-side library for Socket.IO, which lets your browser/app talk to your backend WebSocket server.

io() is the function used to create a client-side socket connection.

const socket = io("http://localhost:5000", { autoConnect: false });
Here you are creating a socket instance, which represents the connection to the server.

Let’s break it down:

🖇️ io("http://localhost:5000", …)
This tells the socket client:
👉 connect to a server running at http://localhost:5000
👉 this is your backend server (likely your Node.js/Express + socket.io server).

If you deployed your backend somewhere (e.g., AWS, Heroku), you’d replace this URL with that deployed server address.

{ autoConnect: false }
By default, when you call io(), it immediately tries to connect to the server.

When you set autoConnect: false, it creates the socket object but does NOT connect right away.

You’ll have to explicitly call:

socket.connect();

Why?
➡️ Useful if you need to wait for some condition (like verifying the user is logged in and has a token) before connecting.
➡️ You avoid connecting too early or without authentication.

*/

import { io }  from "socket.io-client";

const socket = io("http://localhost:4000", {
    autoConnect: false,
});

export default socket; 
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);
  socket.on("message", (data) => {
    console.log("Message received", data);
    io.emit("receive_message", data);
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

import "reflect-metadata";

import express from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";
import mongoose from "mongoose";

const app = express();

const server = createServer(app);

mongoose.connect("mongodb://localhost/chat");

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket", socket.id);
});

app.get("/", (req, res) => {
  return res.json({
    message: "Hello Websocket",
  });
});

export { server, io };

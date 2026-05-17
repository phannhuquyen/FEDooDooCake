import { io } from "socket.io-client";

export const socket = io(
  "https://doodoocake-api.onrender.com",
);
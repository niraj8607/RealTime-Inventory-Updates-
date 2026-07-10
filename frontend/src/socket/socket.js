import { io } from "socket.io-client";

const socket = io("https://realtime-inventory-updates.onrender.com/api");

export default socket;
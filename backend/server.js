// import express from "express";
// import cors from "cors";

// import "./config/db.js";
// import inventoryRoutes from "./routes/inventoryRoutes.js";
// import { Server } from "socket.io";
// import { initSocket } from "./sockets/socket.js";
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api", inventoryRoutes);

// const PORT = 5000;
// initSocket(io);
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
// });




import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import "./config/db.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import { initSocket } from "./sockets/socket.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", inventoryRoutes);

// Create HTTP Server
const server = http.createServer(app);

// Create Socket.io Server
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

// Initialize Socket
initSocket(io);

// Connection Event
io.on("connection", (socket) => {
    console.log("✅ Client Connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("❌ Client Disconnected");
    });
});

const PORT = 5000;

// Start Server
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (our client)
app.use(express.static('public'));

const PORT = 3000;

// Listen for socket connections
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Receive message from client
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        // Broadcast message to all connected clients
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

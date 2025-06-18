const WebSocket = require('ws');
const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Create an HTTP server
const server = require('http').createServer(app);

// WebSocket Server
const wss = new WebSocket.Server({ server });

// Broadcast message to all connected clients
wss.on('connection', (ws) => {
    console.log('A user connected.');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('A user disconnected.');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

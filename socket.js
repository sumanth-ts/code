// socket-io-backend/index.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Replace 'YOUR_AZURE_OPENAI_API_KEY' with your actual API key
const azureOpenAIKey = 'YOUR_AZURE_OPENAI_API_KEY';
const azureOpenAIEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

io.on('connection', (socket) => {
  console.log('New client connected');

  // Send a greeting message to the client
  socket.emit('message', { text: 'Hello, I am your chatbot! How can I assist you?', sender: 'bot' });

  socket.on('message', async (message) => {
    console.log(`Received message from client: ${message}`);

    // Call the Azure OpenAI API to get the response
    try {
      const response = await axios.post(
        azureOpenAIEndpoint,
        {
          prompt: message,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${azureOpenAIKey}`,
          },
        }
      );

      // Emit the response back to the client
      socket.emit('message', { text: response.data.choices[0].text.trim(), sender: 'bot' });
    } catch (error) {
      console.error('Error calling Azure OpenAI API:', error.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO server listening on port ${PORT}`);
});

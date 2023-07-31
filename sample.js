// components/ChatWithHOC.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const socket = io('http://localhost:4000'); // Replace with your Socket.IO backend URL

const ChatWithHOC = (WrappedComponent) => {
  return function WithChat(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
      socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
      });

      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from Socket.IO server');
      });
    }, []);

    const handleOpenChat = () => {
      setIsOpen(true);
      // Send a greeting message to the server
      socket.emit('message', 'Hello, I am your chatbot! How can I assist you?');
    };

    const handleSendMessage = () => {
      if (input.trim() !== '') {
        setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'user' }]);
        socket.emit('message', input);
        setInput('');
      }
    };

    return (
      <Box sx={{ position: 'fixed', bottom: 20, right: 20, width: 300 }}>
        {isOpen ? (
          <Paper elevation={3}>
            <Stack spacing={1} p={2} sx={{ height: 300, overflowY: 'auto' }}>
              {messages.map((message, index) => (
                <Box key={index} textAlign={message.sender === 'user' ? 'right' : 'left'}>
                  {message.text}
                </Box>
              ))}
            </Stack>
            <Box p={2} display="flex">
              <TextField
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
                variant="outlined"
                placeholder="Type your message..."
              />
              <Button onClick={handleSendMessage} variant="contained" color="primary">
                Send
              </Button>
            </Box>
          </Paper>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenChat}
            sx={{ position: 'fixed', bottom: 20, right: 20 }}
          >
            Open Chat
          </Button>
        )}
        <WrappedComponent {...props} />
      </Box>
    );
  };
};

export default ChatWithHOC;

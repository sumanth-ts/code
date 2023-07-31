// pages/index.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Replace with your Socket.IO backend URL

export default function Home() {
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
    <div>
      {isOpen ? (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      ) : (
        <button className="open-chat" onClick={handleOpenChat}>
          Open Chat
        </button>
      )}

      <style jsx>{`
        .chat-window {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 300px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }
        .chat-messages {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
        }
        .message {
          margin-bottom: 10px;
        }
        .user {
          text-align: right;
        }
        .chat-input {
          display: flex;
          padding: 10px;
        }
        .chat-input input {
          flex: 1;
          margin-right: 10px;
          padding: 5px;
        }
      `}</style>
    </div>
  );
}

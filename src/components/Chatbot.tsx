import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'


interface ChatbotProps { }

const Chatbot: React.FC<ChatbotProps> = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3300/users/chat', { input });
      setResponse(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        Chatbot
      </div>
      <div className="chatbot-body">
        <form className="chatbot-form" onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
          <button type="submit">Send</button>
        </form>
        <div className="chatbot-response">
          {response}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

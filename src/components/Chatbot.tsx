import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
import { Chat } from "./Chat";

interface ChatbotProps {}

const Chatbot: React.FC<ChatbotProps> = () => {
  const [chats, setChats] = useState<any[]>([]);

  const [input, setInput] = useState("");
  const [botResponse, setBotResponse] = useState<any[]>([]);

  const postMessage = (input: string) => {
    try {
      axios
        .post("http://localhost:3300/users/chat", { input })
        .then((response) => {
          console.log(response);
          const resp: String[] = [...botResponse];
          resp.push(response.data);
          setBotResponse(resp);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMsg(input);
    console.log("messages", chats);
    setInput("");
    postMessage(input);
  };

  const addMsg = (input: string) => {
    let inputs: String[] = [...chats];
    setChats(inputs);
    inputs.push(input);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">Chatbot</div>

      <div className="chatbot-response">
        {chats.map((msg) => (
          <div className="userInput">
            <Chat msg={msg} />
          </div>
        ))}
        {botResponse.map((botrsp) => (
          <div className="botRsp">
            <Chat msg={botrsp} />
          </div>
        ))}
      </div>

      <div className="chatbot-body">
        <form className="chatbot-form" onSubmit={handleSubmit}>
          <textarea
            // type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type to chat or press the button to speak..."
          />
          <button type="submit">Send</button>
          <p>
            <button className="speakBtn" type="submit">
              Speak
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;

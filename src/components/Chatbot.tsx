import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
import { Chat } from "./Chat";
import { setEngine } from "crypto";

interface ChatbotProps {}
const Chatbot: React.FC<ChatbotProps> = () => {
  const [chats, setChats] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<any[]>([]);

  const postMessage = (input: string) => {
    try {
      axios
        .post("http://localhost:3300/users/chat", {
          input,
        })
        .then((response) => {
          console.log(response);

          chats.push(response.data);
          setChats(chats);
          console.log("chat", chats);
          const resp: String[] = [...chats];

          setEntries(resp);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const addMsg = (input: string) => {
    chats.push(input);
    setChats(chats);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMsg(input);
    console.log("chats", chats);
    setInput("");
    postMessage(input);
  };

  //make them into one array
  return (
    <div className="chatbot">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-response">
        {entries.map((msg) => (
          <div className="userInput">
            <Chat msg={msg} />
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

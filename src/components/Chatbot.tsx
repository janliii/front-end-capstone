import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
import { Chat } from "./Chat";

interface ChatbotProps {}
const Chatbot: React.FC<ChatbotProps> = () => {
  const [chats, setChats] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<any[]>([]);

  const postMessage = (input: string) => {
    try {
      axios
        .post("https://hit-the-spot-backend.herokuapp.com/users/chat", {
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
  // const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     handleSubmit;
  //   }
  // };
  //make them into one array
  return (
    <div className="chatbot">
      <div className="chatbot-header"> 🤖</div>
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
            className="enter_chat"
            // type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about weather, location, and events.."
          />
          <button type="submit" className="button-30">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;

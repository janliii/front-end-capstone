import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
// import Chat from "./Chat";

interface ChatbotProps {}

const Chatbot: React.FC<ChatbotProps> = () => {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post("http://localhost:3300/users/chat", {
  //       input,
  //     });
  //     console.log(data);
  //     setResponse(data.response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const chatLog: string[] = [];

  const postMessage = (input: string) => {
    try {
      chatLog.push(input);
      axios
        .post("http://localhost:3300/users/chat", { input })
        .then((response) => {
          console.log(response);
          chatLog.push(response.data);
          setResponse(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMessage(input);
    console.log("chatlog", chatLog);
    setInput("");
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">Chatbot</div>

      {/* <div className="chatbot-response">{chatLog}</div> */}

      <div className="chatbot-response">{response}</div>

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

import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
// import Chat from "./Chat";

interface ChatbotProps {}

const Chatbot: React.FC<ChatbotProps> = () => {
  const [chats, setChats] = useState<any[]>([]);

  const [input, setInput] = useState("");
  const [botResponse, setBotResponse] = useState<any[]>([]);

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
    postMessage(input);
    setInput("");
  };

  const addMsg = (input: string) => {
    let inputs: String[] = [...chats];
    // const s: String = e.currentTarget.value;
    console.log(input);
    console.log("input", inputs);
    setChats(inputs);
    inputs.push(input);
  };
  return (
    <div className="chatbot">
      <div className="chatbot-header">Chatbot</div>

      {/* <div className="chatbot-response">{chatLog}</div> */}

      <div className="chatbot-response">
        <p>{chats}</p>
        <p>{botResponse}</p>
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

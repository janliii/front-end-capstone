import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

interface ChatbotProps {}

const Chatbot: React.FC<ChatbotProps> = () => {
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

  const postMessage = (input: string) => {
    axios
      .post("http://localhost:3300/users/chat", { input })
      .then((response) => {
        console.log(response);
        setResponse(response.data);
      });
  };
  //  .catch((error)=> {
  //       console.error(error);
  //     });
  //   };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMessage(input);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-response">{response}</div>
      <div className="chatbot-body">
        <form className="chatbot-form" onSubmit={handleSubmit}>
          <textarea
            // type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;

import React from "react";
type ChatMsg = { msg: string };

const Chat = ({ msg }: ChatMsg) => {
  return (
    <div className="chat">
      <p className="chat-message">{msg}</p>
    </div>
  );
};

export { Chat };

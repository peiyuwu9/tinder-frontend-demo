import React from "react";

import { Avatar } from "@mui/material";
import "./ChatWindow.css";

function ChatWindow({ chat: { name, img_url, conversation } }) {
  return (
    <div className="chat-window">
      {conversation.map(({ msg, is_self }) => (
        <div className={`${is_self ? "right-chat" : "left-chat"}`} key={msg}>
          {!is_self && <Avatar src={img_url} alt={name} />}
          <p>{msg}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;

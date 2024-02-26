import React from "react";
import { useLoaderData } from "react-router-dom";

import ChatBanner from "./ChatBanner";
import "./Chats.css";

function Chats() {
  const { chats } = useLoaderData();
  console.log(chats);
  return (
    <div className="chats-container">
      {chats.map(({ _id, name, img_url, last_msg, timestamp }) => (
        <ChatBanner
          key={_id}
          id={_id}
          name={name}
          img_url={img_url}
          last_msg={last_msg}
          timestamp={timestamp}
        />
      ))}
    </div>
  );
}

export default Chats;

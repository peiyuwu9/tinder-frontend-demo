import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import "./ChatBanner.css";

function formatTimestamp(timestamp) {
  const seconds = Math.floor(timestamp / 1000);
  if (seconds < 60) return seconds + " secs";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + " mins";
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + " hrs";
  const days = Math.floor(hours / 24);
  return days + " days";
}

function Chat({ id, name, img_url, last_msg, timestamp }) {
  return (
    <Link className="chat" to={`/chat/${id}`}>
      <Avatar alt={name} src={img_url} />
      <div className="chat-detail">
        <h3>{name}</h3>
        <div className="chat-msg">
          <p>{last_msg}</p>
          <p>
            {formatTimestamp(new Date().getTime() - parseInt(timestamp))} ago
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Chat;

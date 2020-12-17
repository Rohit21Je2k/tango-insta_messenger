import React from "react";
import "./Chats.css";

export default function Chats(props) {
  return (
    <div className="all-chat">
      <div className="chat-box" onClick={props.onClick}>
        <img
          className="friend-image"
          alt="friend-img"
          src="https://comicvine1.cbsistatic.com/uploads/original/12/124813/2496965-james_gordon.png"
        />
        <div className="friend-info">
          <h5 className="friend-name">Name : James Gordon</h5>
          <p className="friend-msg">Message: we need your help</p>
        </div>
      </div>
    </div>
  );
}

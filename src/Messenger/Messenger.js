import React from "react";
import "./Messenger.css";

export default function Messenger(props) {
  return (
    <div className="messenger-box">
      <header className="messenger-header">
        <button type="button" onClick={props.onClick}>{"← "}</button>
        <img
          className="friend-image"
          alt="friend-img"
          src="https://comicvine1.cbsistatic.com/uploads/original/12/124813/2496965-james_gordon.png"
        />
        <div>
          <h1>James Gordon</h1>
        </div>
      </header>

      <h1>Messages</h1>
    </div>
  );
}

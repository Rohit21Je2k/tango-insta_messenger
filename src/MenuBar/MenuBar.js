import React from "react";
import "./MenuBar.css";

export default function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="chats"><p>Chats</p></div>
      <div className="friends"><p>Friends</p></div>
      <div className="posts"><p>Posts</p></div>
    </div>
  );
}

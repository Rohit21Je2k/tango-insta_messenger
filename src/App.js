import React, {useState} from "react";
import Header from "./Header/Header";
import MenuBar from "./MenuBar/MenuBar";
import Chats from "./Chats/Chats";
import Messenger from "./Messenger/Messenger";
import './App.css';

function App() {
  const [messengerBox, showMessengerBox] = useState(false);
  function handleClick(){
    showMessengerBox((prevValue) => !prevValue);
  }
  return (
    <div className="App">
      <Header />
      <MenuBar />
      <Chats onClick={handleClick}/>
      {messengerBox && <Messenger onClick={handleClick}/>}
    </div>
  );
}

export default App;

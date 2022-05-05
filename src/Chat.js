import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined, SettingsInputAntenna } from "@mui/icons-material";
import './Chat.css';
const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input,setInput] = useState("")
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage =(e) =>{
    e.preventDefault();
    console.log("you typed >>>>",input);
    setInput("");
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Lastseen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
          <p className={`chat__message ${true &&"chat__receiver"}`}>
          <span className="chat__name">sonnySangs</span>
          Hey guys<span className="chat__timestamp">3:53</span>
          </p>
      </div>
      <div className="chat__footer">
          <InsertEmoticon/>
          <form>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message"/>
              <button onClick={sendMessage} type="submit">send a message</button>
          </form>
          <Mic/>
      </div>
    </div>
  );
};

export default Chat;

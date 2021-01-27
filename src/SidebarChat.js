import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = React.useState("");

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const nickName = prompt("Entre com o seu nome");
    if (nickName) {
    }
  };

  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className='sidebarChat_info'>
        <h2>Room name</h2>
        <p>message....</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;

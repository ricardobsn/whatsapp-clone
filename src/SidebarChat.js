import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import db from "./firebase";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) => setMessages(snap.docs.map((doc) => doc.data())));
    }
  }, [id]);

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const nickName = prompt("Entre com o seu nome");
    if (nickName) {
      db.collection("rooms").add({
        name: nickName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidebarChat_info'>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;

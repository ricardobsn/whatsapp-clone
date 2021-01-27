import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert } from "@material-ui/icons";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = React.useState("");
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);

    setInput("");
  };

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chatHeader_info'>
          <h3>NickName</h3>
          <p>werfwerfwerf</p>
        </div>
        <div className='chatHeader_right'>
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
      <div className='chat_body'>
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className='chat_name'>ricardo</span>
          fefevverververfverv
          <span className='chat_timestamp'>2:34</span>
        </p>
      </div>
      <div className='chat_footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;

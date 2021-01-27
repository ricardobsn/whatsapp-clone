import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert } from "@material-ui/icons";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import React from "react";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = React.useState("");

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

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
      <div className='chat_body'></div>
      <div className='chat_footer'></div>
    </div>
  );
}

export default Chat;

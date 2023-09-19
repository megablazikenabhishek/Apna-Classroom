import axios from "axios";
import { useState, useEffect } from "react";
import URI from "../../../../URI";
import "./chat.css";
import { InputLabel, InputAdornment, Input, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Chat(props) {
  const { subject } = props;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [refresh, setRefresh] = useState(0);

  // console.log("debug", subject);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${URI}/api/v1/common/Subject/getAllMessages/${subject._id}`
      );
      if (res.status === 200) {
        setMessages(res.data.messages);
      }
      console.log("res", res);
    };
    if (subject._id) fetchData();
  }, [subject, refresh]);

  const sendMessage = async () => {
    if (!message) return;
    const res = await axios.post(
      `${URI}/api/v1/common/Subject/pushMessage/${subject._id}`,
      { message: { name: localStorage.getItem("name"), message } } // message: message
    );
    if (res.status === 200) {
      setMessage("");
      setRefresh((val) => val + 1);
    }
    console.log(res);
  };

  return (
    <>
      <div className="chat-box">
        {messages.map((item, index) => {
          return (
            <div className="chat-msg" key={index}>
              <div className="chat-msg-name">
                <p>{item.name}</p>
              </div>
              <div className="chat-msg-text">
                <p>{item.message}</p>
              </div>
            </div>
          );
        })}
      </div>
      <FormControl
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          margin: "auto",
          marginTop: "10px",
        }}
        variant="standard"
        onSubmit={sendMessage}
      >
        <Input
          id="standard-adornment-amount"
          position="start"
          placeholder="Type your message here"
          style={{ width: "90%", marginRight: "10px" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={sendMessage}
        >
          Send
        </Button>
        <RefreshIcon
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={() => setRefresh((val) => val + 1)}
        />
      </FormControl>
    </>
  );
}

// import "./right-fold.css";
import { Paper } from "@mui/material";
import Navbar from "./Button Navigation/InnerNav";
import { useState } from "react";
import Nav from "./Sub Navbar/UpparNav";
import Chat from "./Chat Section/Chat";
import Uploads from "./Uploads Section/Uploads";

const RightFold = (props) => {
  const { subject } = props;
  console.log("subject", subject);

  const [section, setSection] = useState(0);
  console.log("section", section);
  const render_component = (value) => {
    console.log("value", value);
    switch (value) {
      case 0:
        return <Chat subject={subject} />;
        break;
      case 2:
        return <Uploads subject={subject} />;
        break;
      default:
        return <Chat subject={subject} />;
        break;
    }
  };
  return (
    <>
      <Nav subject={subject} />
      <Navbar
        style={{ width: "100%" }}
        setSection={setSection}
        section={section}
      />
      <Paper sx={{ height: "100%" }} elevation={3}>
        {render_component(section)}
      </Paper>
    </>
  );
};

export default RightFold;

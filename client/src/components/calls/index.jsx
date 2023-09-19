import "./calls.css";
import Header from "../common/header/index";
import Siderbar from "../common/sidebar/index";
import LeftFold from "../calls/left-fold/index";
import RightFold from "../calls/right-fold/index";
import axios from "axios";
import { useState, useEffect } from "react";
import URI from "../../URI";

const Calls = () => {
  const [subjects, setSubjects] = useState([]);
  const [selected, setSelected] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${URI}/api/v1/common/Subject/getAll`);
      if (res.status === 200) {
        setSubjects(res.data.Subjects);
        setSelected(res.data.Subjects[0]);
      }
      console.log(res.data);
    };
    fetchData();
  }, []);
  console.log("selected", selected);
  return (
    <div className="calls-container">
      <Header />
      <div className="calls-body">
        <div className="calls-sidebar">
          <Siderbar />
        </div>
        <div className="calls-leftFold">
          {" "}
          <LeftFold subjects={subjects} setSelected={setSelected} />{" "}
        </div>
        <div className="calls-rightFold">
          <RightFold subject={selected} />
        </div>
      </div>
    </div>
  );
};

export default Calls;

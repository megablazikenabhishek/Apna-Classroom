import axios from "axios";
import { useState, useEffect } from "react";
import URI from "../../../../URI";
import "../Chat Section/chat.css";
import { InputLabel, InputAdornment, Input, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import RefreshIcon from "@mui/icons-material/Refresh";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DownloadIcon from "@mui/icons-material/Download";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as React from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Uploads(props) {
  const { subject } = props;
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  useEffect(() => {
    const handleFileUpload = async () => {
      if (!selectedFile) return;
      console.log(selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await axios.post(
        `${URI}/api/v1/common/Subject/uploadFile/${subject._id}`,
        formData
      );
      if (res.status === 200) {
        alert("File uploaded successfully");
        setRefresh(refresh + 1);
      } else {
        alert("File upload failed");
      }
      setSelectedFile(null);
    };
    handleFileUpload();
  }, [selectedFile]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${URI}/api/v1/common//Subject/getAllFiles/${subject._id}`
      );
      if (res.status === 200) {
        console.log("res.data", res.data);
        setFiles(res.data.files);
      }
    };
    fetchData();
  }, [refresh, subject]);

  return (
    <>
      <div className="chat-box">
        <Grid item xs={2} md={2}>
          <Demo>
            <List dense={dense} style={{ width: "900px" }}>
              {files.map((file) => {
                return (
                  <ListItem key={file.path}>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={file.name}
                      secondary={secondary ? "Secondary text" : null}
                    />
                    <ListItemIcon>
                      <DownloadIcon
                        onClick={() => {
                          window.location.href = `${URI}/api/v1/common/Subject/downloadFile?path=${file.path}`;
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </ListItemIcon>
                  </ListItem>
                );
              })}
            </List>
          </Demo>
        </Grid>
      </div>
      <FormControl
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "90%",
          alignItems: "center",
          margin: "auto",
          marginTop: "10px",
        }}
        variant="standard"
      >
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          // onClick={handleFileUpload}
        >
          Upload file
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Button>
        <RefreshIcon
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={(val) => setRefresh(val + 1)}
        />
      </FormControl>
    </>
  );
}

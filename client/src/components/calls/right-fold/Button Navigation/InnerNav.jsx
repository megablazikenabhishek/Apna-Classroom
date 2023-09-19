import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import GroupsIcon from "@mui/icons-material/Groups";
import MessageIcon from "@mui/icons-material/Message";
export default function LabelBottomNavigation(props) {
  const { setSection, section } = props;

  const handleChange = (event, newValue) => {
    setSection(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      value={section}
      onChange={handleChange}
      elevation={3}
    >
      <BottomNavigationAction
        label="Messages"
        value={0}
        icon={<MessageIcon />}
      />
      <BottomNavigationAction label="Meeting" value={1} icon={<GroupsIcon />} />
      <BottomNavigationAction label="Folder" value={2} icon={<FolderIcon />} />
    </BottomNavigation>
  );
}

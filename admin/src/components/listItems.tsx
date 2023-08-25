import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import ClassIcon from '@mui/icons-material/Class';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';

interface Props {
    setPath: any;
}

export const MainListItems = (props: Props) => {
    return (
        <React.Fragment>
            <ListItemButton onClick={() => {
                props.setPath(0)
            }}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={() => {
                props.setPath(1)
            }}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Teacher" />
            </ListItemButton>
            <ListItemButton onClick={() => {
                props.setPath(2)
            }}>
                <ListItemIcon>
                    <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="View Teacher" />
            </ListItemButton>
            <ListItemButton onClick={() => {
                props.setPath(3)
            }}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Student" />
            </ListItemButton>
            <ListItemButton onClick={() => {
                props.setPath(4)
            }}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="View Student" />
            </ListItemButton>
            <ListItemButton onClick={() => {
                props.setPath(5)
            }}>
                <ListItemIcon>
                    <AutoStoriesIcon />
                </ListItemIcon>
                <ListItemText primary="Subject Page" />
            </ListItemButton>
            <ListItemButton onClick={() => {
                props.setPath(6)
            }}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItemButton>
        </React.Fragment>
    );
}

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
    </React.Fragment>
);
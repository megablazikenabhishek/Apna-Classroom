import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainListItems, secondaryListItems } from '../components/listItems';
import Reports from '../components/Reports';
import AddTeacherPage from './AddTeacherPage';
import ViewTeacherPage from './ViewTeacherPage';
import AddStudentPage from './AddStudentPage';
import ViewStudentPage from './ViewStudentPage';
import URI from '../URI';
import axios from 'axios';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Apna Classroom
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface path {
    path: number
}


// for View Teacher Page
interface ViewTeacherData {
    id: string;
    name: string;
    email: string;
    age: number;
    salary: number;
    experience: number;
}

function createViewTeacherData(
    id: string,
    name: string,
    email: string,
    age: number,
    salary: number,
    experience: number,
): ViewTeacherData {
    return {
        id,
        name,
        email,
        age,
        salary,
        experience,
    };
}

interface ViewStudentData {
    id: string;
    rollno: number;
    name: string;
    email: string;
    age: number;
    cgpa: number;
    contactNumber: string;
}

function createStudentData(
    id: string,
    rollno: number,
    name: string,
    email: string,
    age: number,
    cgpa: number,
    contactNumber: string,
): ViewStudentData {
    return {
        id,
        rollno,
        name,
        email,
        age,
        cgpa,
        contactNumber,
    };
}
export default function Dashboard(props: path) {
    const [path, setPath] = React.useState(props.path);
    const [viewTeacherData, setViewTeacherData] = React.useState<ViewTeacherData[]>([]);
    const [viewStudentData, setViewStudentData] = React.useState<ViewStudentData[]>([]);
    const [open, setOpen] = React.useState(true);
    // console.log(path);


    // for View Teacher Page
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${URI}/api/v1/admin/teacher`
            );
            // setRows(result.data);
            // console.log(result.data);
            const { data } = result.data;
            let rowData: ViewTeacherData[] = [];
            for (let i = 0; i < data.length; i++) {
                rowData.push(createViewTeacherData(data[i]._id, data[i].name, data[i].email, data[i].age, data[i].salary, data[i].yearsOfExperience))
            }
            console.log("rowData: ", rowData);
            setViewTeacherData(() => {
                return [...rowData]
            });
        }
        fetchData();
    }, []);

    // for View Student Page
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `${URI}/api/v1/admin/student`
            );
            // setRows(result.data);
            // console.log(result.data);
            const { data } = result.data;
            let rowData: ViewStudentData[] = [];
            for (let i = 0; i < data.length; i++) {
                rowData.push(createStudentData(data[i]._id, data[i].rollNumber, data[i].name, data[i].email, data[i].age, data[i].cgpa, data[i].contactNumber))
            }
            console.log("rowData: ", rowData);
            setViewStudentData(() => {
                return [...rowData]
            });
        }
        fetchData();
    }, []);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const renderPath = () => {
        switch (path) {
            case 0:
                return <Reports />;
            case 1:
                return <AddTeacherPage />;
            case 2:
                return <ViewTeacherPage rows={viewTeacherData} />;
            case 3:
                return <AddStudentPage />;
            case 4:
                return <ViewStudentPage rows={viewStudentData} />;
            default:
                return <Reports />;
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <MainListItems setPath={setPath} />
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
                {/*  */}
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    {
                        renderPath()
                    }
                    <Copyright sx={{ pt: 4 }} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
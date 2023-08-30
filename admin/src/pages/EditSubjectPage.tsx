import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import axios from "axios";
import URI from "../URI";
import MultipleSelectChip from "../components/MultiSelectTeachers";

interface Subject {
    id: string,
    name: string,
    description: string,
}

interface Teacher {
    id: string,
    name: string,
}

interface SubjectDetails {
    _id: string,
    name: string,
    description: string,
    incharge: Teacher[],
}
export default function EditSubjectPage() {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedDetails, setSelectedDetails] = useState<SubjectDetails>({ _id: "", name: "", description: "", incharge: [] });
    const [teachers, setTeachers] = useState<Teacher[]>([]);

    console.log("subjects", subjects)
    console.log("selectedSubject", selectedSubject)
    console.log("selectedDetails", selectedDetails)
    console.log("teachers", teachers)

    useEffect(() => {
        const getSubjects = async () => {
            try {
                const res = await axios.get(`${URI}/api/v1/admin/subject`)
                console.log("res", res);
                if (res.status == 200) {
                    const { data } = res;
                    let subjectsArray: Subject[] = [];
                    for (let i = 0; i < data.length; i++) {
                        subjectsArray.push({ id: data[i]._id, name: data[i].name, description: data[i].description })
                    }
                    setSubjects(subjectsArray);
                } else {
                    alert('Something went wrong')
                }
            } catch (err) {
                console.log(err);
                alert('Something went wrong')
            }
        }
        getSubjects();
    }, []) // get all subjects

    useEffect(() => {
        const getSubject = async () => {
            try {
                const res = await axios.get(`${URI}/api/v1/admin/subject/${selectedSubject}`)
                console.log("res", res);
                if (res.status == 200) {
                    const { data } = res;
                    console.log("data", data);
                    setSelectedDetails(data);
                } else {
                    alert('Something went wrong')
                }
            } catch (err) {
                console.log(err);
                alert('Something went wrong')
            }
        }

        const getTeachers = async () => {
            try {
                const res = await axios.get(`${URI}/api/v1/admin/teacher`)
                console.log("result for teacher", res);
                if (res.status == 200) {
                    const { data } = res.data;
                    let teachersArray: Teacher[] = [];
                    for (let i = 0; i < data.length; i++) {
                        teachersArray.push({ id: data[i]._id, name: data[i].name })
                    }
                    setTeachers(teachersArray);
                } else {
                    alert('Something went wrong')
                }
            } catch (err) {
                console.log(err);
                alert('Something went wrong')
            }
        }
        if (selectedSubject) {
            setSelectedDetails({ _id: "", name: "", description: "", incharge: [] })
            getSubject();
            getTeachers();
        }
    }, [selectedSubject]) // get subject

    const handleChange = (event: any) => {
        // console.log("heelo")
        setSelectedSubject(event.target.value as string);
    };
    return (
        <Paper elevation={1} sx={{ width: '100%', marginTop: '100px', minHeight: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <Stack spacing={4} sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <Typography variant='h3'> Edit Subject </Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Select Subject</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={selectedSubject}
                        onChange={handleChange}
                        label="Select Subject"
                        sx={{ width: '300px' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {subjects.map((subject) => {
                            return (
                                <MenuItem value={subject.id} key={subject.id}>{subject.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                {
                    selectedDetails.name && (
                        <>
                            <TextField
                                id="outlined-read-only-input"
                                label="Name"
                                defaultValue={selectedDetails.name}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{ width: '300px' }}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Description"
                                defaultValue={selectedDetails.description}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{ width: '300px' }}
                                multiline
                            />
                            <MultipleSelectChip incharge={selectedDetails.incharge} data={teachers} subjectid={selectedDetails._id} />
                        </>
                    )}

            </Stack>
        </Paper >
    )
}
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import URI from '../URI';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

interface Teacher {
    id: string,
    name: string,
}
interface Props {
    data: Teacher[],
    incharge: Teacher[],
    subjectid: string,
}

export default function MultipleSelectChip(props: Props) {
    const names = props.data;
    console.log(names)

    const hashMap = new Map();
    for (let i = 0; i < names.length; i++) {
        hashMap.set(names[i].id, names[i].name)
    }

    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>(props.incharge.map((teacher) => teacher.id));

    console.log("personName", personName)

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log("event", event.target);
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const editTeachers = async () => {
        try {
            const res = await axios.put(`${URI}/api/v1/admin/subject/${props.subjectid}/addTeacher`, { incharge: personName })
            console.log("res", res);
            if (res.status == 200) {
                alert('Teachers updated successfully')
            } else {
                alert('Something went wrong')
            }
        } catch (err) {
            console.log(err);
            alert('Something went wrong')
        }
    }
    return (
        <div>
            <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Incharges</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={hashMap.get(value)} label={hashMap.get(value)} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((teacher) => (
                        <MenuItem
                            key={teacher.id}
                            value={teacher.id}
                            style={getStyles(teacher.name, personName, theme)}
                        >
                            {teacher.name}
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="contained" endIcon={<SendIcon />} sx={{ my: '20px' }} onClick={editTeachers}>
                    Save
                </Button>
            </FormControl>
        </div>
    );
}

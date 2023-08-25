import { useState } from 'react';
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import URI from '../URI';
import Alert from '@mui/material/Alert';

export default function AddTeacherPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setDob] = useState('');
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);
    const [yearOfExperience, setYearOfExperience] = useState(0);

    console.log({ name, email, phone, address, birthday, age, salary, yearOfExperience })

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const postData = async () => {
            const res = await axios.post(`${URI}/api/v1/admin/teacher`, {
                name,
                email,
                contactNumber: phone,
                address,
                birthday,
                age,
                salary,
                yearOfExperience
            })
            console.log(res)
        }

        postData();
    }

    return (
        <Paper elevation={1} sx={{ width: '100%', marginTop: '100px', minHeight: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={10}
                >
                    <Stack spacing={4} sx={{ width: '50%' }}>
                        <TextField id="standard-basic" label="Enter Name" variant="standard" onChange={(e) => {
                            setName(e.currentTarget.value)
                        }} sx={{ width: '300px' }} required />
                        <TextField id="standard-basic" label="Enter Email" variant="standard" onChange={(e) => {
                            setEmail(e.currentTarget.value)
                        }} sx={{ width: '300px' }} type='email' required />
                        <TextField
                            id="filled-number"
                            label="Enter Age"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setAge(Number(e.currentTarget.value))
                            }} required
                        // variant="filled"
                        />
                        <TextField id="standard-basic" label="Enter DOB" variant="standard" onChange={(e) => {
                            setDob(e.currentTarget.value)
                        }} sx={{ width: '300px' }} required />
                    </Stack>
                    <Stack spacing={4} sx={{ width: '50%' }}>
                        <TextField id="standard-basic" label="Enter Adress" variant="standard" onChange={(e) => {
                            setAddress(e.currentTarget.value)
                        }} sx={{ width: '300px' }} multiline required />
                        <TextField id="standard-basic" label="Enter Phone no." variant="standard" onChange={(e) => {
                            setPhone(e.currentTarget.value)
                        }} sx={{ width: '300px' }} required />
                        <TextField
                            id="filled-number"
                            label="Enter Salary"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setSalary(Number(e.currentTarget.value))
                            }} required
                        />
                        <TextField
                            id="filled-number"
                            label="Enter Year of Experience"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setYearOfExperience(Number(e.currentTarget.value))
                            }} required
                        />

                    </Stack>
                </Stack>
                <Button variant="contained" sx={{ marginTop: '20px' }} endIcon={<SendIcon />} size='large' type='submit'>
                    Save
                </Button>
            </form>
        </Paper>
    )
}
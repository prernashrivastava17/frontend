import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { postData } from '../services/ServerServices';
const SentMail = () => {

    const [show, setShow] = useState(false);

    const [email, setEmail] = useState("");


    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await postData("register/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log("error")
        } else {
            setShow(true);
            setEmail("")
            console.log("Email sent")
        }
    }

    return (<div>
         <TextField fullWidth   value={email} onChange={(e) => setEmail(e.target.value)} label="Enter email" variant="outlined" />

         <Button fullWidth onClick={sendEmail} variant="contained">Submit</Button>
        
    </div>
       
    )
}

export default SentMail
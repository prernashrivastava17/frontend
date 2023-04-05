
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useStyles } from './JmlCss';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { getData, postData } from '../services/ServerServices';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import {  json, useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Title from 'react-vanilla-tilt'
import VanillaTilt from 'vanilla-tilt';
import Tilt from "react-vanilla-tilt"
export default function Jml(){



    var classes=useStyles()

    const [onboardData,setOnboardData]=useState([])
    const [employeeCode,setEmployeeCode]=useState('')


    const fetchAllOnboardDetail=async(employeeCode)=>{

        var body={'employeeCode':employeeCode}
        var result=await postData("jml/fetch_all_onboard",body)
        setOnboardData(result.data)
       console.log("xxxxxx",result.data)
      }
     
    



       const handleEmployeeCode=(event)=>{
            setEmployeeCode(event.target.value)
            fetchAllOnboardDetail(event.target.value)
            
       }

     
       const fillAllOnboardDetail=()=>{

        return onboardData.map((item)=>{
          return(  <div  style={{marginTop:10}}>
             <Grid container spacing={3}>
             <Grid item xs={4}>
            <TextField fullWidth  value={item.name}   label="Full Name of Employee" variant="outlined" />
            </Grid>
            <Grid item xs={4}>
          <TextField fullWidth  value={item.address}   label="Permanent Address" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
          <TextField fullWidth  value={item.pincode}   label="Area pincode" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
          <TextField fullWidth  value={item.contactNumber}   label="Contact Number" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
          <TextField fullWidth  value={item.alternateNumber}   label="Alternate Number" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
          <FormControl  >
      <FormLabel >Employee Status</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={item.employeeStatus}
        
      >
      
        <FormControlLabel  style={{color:"black"}}  value="Full Time"  control={<Radio />} label="Full Time" />
        <FormControlLabel style={{color:"black"}}  value="Part time" control={<Radio />} label="Part time" />
       
      </RadioGroup>
    </FormControl>
          </Grid>
          </Grid>
          </div>

          )
        })
      }
     



    return(<div className={classes.mainContainer}>
     
   
      <Tilt  style={{width:"90%",
    maxWidth:"440px",
    color:"#fff",
    textAlign:"center",
    padding:"50px 35px",
    border:"1px solid rgba(255,255,255,20)",
    background:"rgba(500,555,555,0.9)",
    borderRadius:"40px",
    boxShadow:"20 400px 900px rgba(0,0,0,0.9)",
    backdropFilter:"blur(10px)",

      }}
       options={{   scale: 10.2, speed: 5000,max: 10,transition:true, perspective: 10, glare:true,}}>
      
      <img src='/logo.png'  width='75' />
      <h2 style={{color:"black"}}>JML Form</h2>
    
         <TextField fullWidth  value={employeeCode} onChange={handleEmployeeCode}  label="Employee Code" variant="outlined" />
         
         {fillAllOnboardDetail()}
       
         </Tilt>
       
         
      
       
    
      
       
        
         
    </div>)
}
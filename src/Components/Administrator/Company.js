import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useStyles } from './CompanyCss';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import { getData, postData } from '../services/ServerServices';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Navigate, useNavigate } from 'react-router-dom';


export default function Company(){

  var navigate=useNavigate()
var classes=useStyles();

const [showPassword, setShowPassword] = useState(false);
const [companyName,setCompanyName]=useState('')
const [ownerName,setOwnerName]=useState('')
const [emailAddress,setEmailAddress]=useState('')
const [mobileNumber,setMobileNumber]=useState('')
const [address,setAddress]=useState('')
const [state,setState]=useState('')
const [city,setCity]=useState('')
const [password,setPassword]=useState('')
const [states,setStates]=useState([])
const [cities,setCities]=useState([])

const [companyLogo,setCompanyLogo]=React.useState({
  fileName: "/assets/watermark.png",
  bytes: "",
})

const [error,setError]=useState({})


const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};




const handleImage=(event)=>{
  setCompanyLogo({
    fileName: URL.createObjectURL(event.target.files[0]),
    bytes: event.target.files[0],
  });

}


const fetchAllStates=async()=>{

  var result=await getData("statecity/fetch_all_states")
  setStates(result.data)


}


const fillAllStates=()=>{

return states.map((item)=>{
  return(<MenuItem value={item.stateid}>{item.statename}</MenuItem>)
})

}


useEffect(function(){
  fetchAllStates()
},[])



const handleStateChange=(event)=>{
  setState(event.target.value)
  fetchAllCity(event.target.value)
}



const fetchAllCity=async(stateid)=>{

  var body={'stateid':stateid}
  var result=await postData("statecity/fetch_all_city",body)
  setCities(result.data)
}

const fillAllCity=()=>{

  return cities.map((item)=>{
    return(<MenuItem value={item.cityid}>{item.cityname}</MenuItem>)
  })
}


const handleCityChange=(event)=>{

  setCity(event.target.value)
}




const handleError=(inputs,value)=>{
  setError(prev=>({...prev,[inputs]:value}))
  }
  
  const validation=()=>{
    if(!companyName)
    {
      handleError("companyName","Invalid Company Name ")
    }

    if(!ownerName)
    {
      handleError("ownerName","Invalid owner Name ")
    }

    if(!mobileNumber)
    {
      handleError("mobileNumber","Invalid mobile Number ")
    }
    if(!emailAddress)
    {
      handleError("emailAddress","Invalid email Address")
    }

    if(!address)
    {
      handleError("address","Invalid address ")
    }

    if(!state || state=="Choose State")
    {
      handleError("state","Invalid state ")
    }
    if(!city || city=="Choose City")
    {
      handleError("city","Invalid city ")
    }

    if(!password)
    {
      handleError("password","Invalid password ")
    }

    
  }
  




const handleSubmit=async()=>{
validation()
  var cd=new Date()
  var dd=cd.getFullYear()+"/"+(cd.getMonth()+1)+"/"+cd.getDate()+" "+cd.getHours()+":"+cd.getMinutes()+":"+cd.getSeconds()
 
  var formData=new FormData()
  formData.append('companyname',companyName)
  formData.append('ownername',ownerName)
  formData.append('emailaddress',emailAddress)
  formData.append('mobilenumber',mobileNumber)
  formData.append('address',address)
  formData.append('state',state)
  formData.append('city',city)
  formData.append('password',password)
  formData.append('logo',companyLogo.bytes)
  formData.append('createdat',dd)
  formData.append('updatedat',dd)
  formData.append('createdby','ADMIN')
  formData.append('status','Pending')

  var result=await postData("company/add_new_company",formData)
  if(result.status)
  {
    Swal.fire({
      icon: 'success',
      title: 'Company Submitted successfully',
     
    })
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Company Not Submitted ',
     
      
    })
  }
  handleReset()
}



const handleReset=()=>{

  setState('')
  setCity('')
 setCompanyName('')
  setOwnerName('')
  setEmailAddress('')
  setMobileNumber('')
  setPassword('')
  setAddress('')
  setCompanyLogo({
    fileName: "/assets/watermark.png",
    bytes: "",
  });
}




const handleImageError=()=>{
  alert("hiiiiiii")
}



    return(

<div className={classes.mainContainer}>
  <div className={classes.box}>
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.rowStyle}>
        <div >

          <img src='/assets/Cartlogo.png' width='55'/>
       
       </div>
       <div className={classes.headingStyle} style={{marginLeft:10,padding:8}}>
          Company Registration
        
        </div>
        <div style={{display:'flex',justifyContent:'flex-end',width:'60%'}}>
              <Avatar src={'/assets/report.png'} style={{width:35}} onClick={()=>navigate('/DisplayAllCompany')} variant="square" />
            </div>
      </Grid>

         <Grid item xs={6}>
         <TextField fullWidth error={!error.companyName?false:true} helperText={error.companyName}   value={companyName} onChange={(event)=>setCompanyName(event.target.value)} label="Company Name" variant="outlined" />

         </Grid>

         <Grid item xs={6}>
         <TextField fullWidth error={!error.ownerName?false:true} helperText={error.ownerName} onFocus={()=>handleError('ownerName',null)} value={ownerName} onChange={(event)=>setOwnerName(event.target.value)}  label="Owner Name" variant="outlined" />

         </Grid>


         <Grid item xs={6}>
         <TextField fullWidth error={!error.emailAddress?false:true} helperText={error.emailAddress} onFocus={()=>handleError('emailAddress',null)}  value={emailAddress} onChange={(event)=>setEmailAddress(event.target.value)}  label="Email" variant="outlined" />

         </Grid>


         <Grid item xs={6}>
         <TextField fullWidth error={!error.mobileNumber?false:true} helperText={error.mobileNumber} onFocus={()=>handleError('mobileNumber',null)}   value={mobileNumber} onChange={(event)=>setMobileNumber(event.target.value)}  label="Mobile Number" variant="outlined" />

         </Grid>

         <Grid item xs={12}>
         <TextField fullWidth error={!error.address?false:true} helperText={error.address} onFocus={()=>handleError('address',null)}  value={address} onChange={(event)=>setAddress(event.target.value)}  label="Address" variant="outlined" />

         </Grid>


         <Grid item xs={6}>

         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="State"
          onChange={handleStateChange}
          onFocus={()=>handleError('state',null)}
          error={!error.state?false:true}
        >
          <MenuItem value={''}>Choose State</MenuItem>
         {fillAllStates()}
        </Select>
         <div style={{color:"#c0392b",padding:5,fontSize:13,marginLeft:10}}>  {error.state}</div>
      </FormControl>
         </Grid>


         <Grid item xs={6}>

         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleCityChange}
          onFocus={()=>handleError('city',null)}
          error={!error.city?false:true}
        >
          <MenuItem value={''}>Choose City</MenuItem>
          {fillAllCity()}
        </Select>
        <div style={{color:"#c0392b",padding:5,fontSize:13,marginLeft:10}}>  {error.city}</div>
      </FormControl>
         </Grid>



         <Grid item xs={6} className={classes.rowStyle}>

         <IconButton color="primary" aria-label="upload picture" component="label"  >
        <input hidden accept="image/*" type="file" onChange={handleImage}  required   />
        <PhotoCamera />
      
      </IconButton>

      <Avatar 
              
              alt="Remy Sharp"
              variant="rounded"
              src={companyLogo.fileName}
              sx={{ width: 56, height: 56 }}
            />
  
               
          </Grid>



          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
               value={password}
                type={showPassword ? "text" : "password"}
                onChange={(event)=>setPassword(event.target.value)}
                error={!error.password?false:true}  onFocus={()=>handleError('password',null)} 
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
               <div style={{color:"#c0392b",padding:5,fontSize:13,marginLeft:10}}>  {error.password}</div>
            </FormControl>
          </Grid>

         <Grid item xs={6}>
         <Button fullWidth onClick={handleSubmit} variant="contained">Submit</Button>
          </Grid>

          <Grid item xs={6}>
         <Button fullWidth onClick={handleReset} variant="contained">Reset</Button>
          </Grid>

    </Grid>
  
    </div>
    </div>
    )
}
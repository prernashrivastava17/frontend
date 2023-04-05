import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useStyles } from './OnboardCss';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { getData, postData } from '../services/ServerServices';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';




export default function Onboard(){

  var navigate=useNavigate()
var classes=useStyles();
const tomorrow = dayjs('2004/01/01');

const [name,setName]=useState('')
const [employeeCode,setEmployeeCode]=useState('')
const [fullPermanentAddress,setFullPermanentAddress]=useState('')
const [pincode,setPincode]=useState('')
const [contactNumber,setContactNumber]=useState('')
const [alternateContactNumber,setAlternateContactNumber]=useState('')
const [emailAddress,setEmailAddress]=useState('')
const [idProof,setIdProof]=useState({
  fileName: "/idproof.png",
  bytes: "",
})
const [digitalSignature,setDigitalSignature]=useState({
  fileName: "/signature.png",
  bytes: "",
})
const [photo,setPhoto]=useState({
  fileName: "/photo.png",
  bytes: "",
})
const [marksheet,setMarksheet]=useState({
  fileName: "/marksheet.png",
  bytes: "",
})
const [dob,setDob]=useState('')
const [dateOfJoining,setDateOfJoining]=useState('')
const [employeeStatus,setEmployeeStatus]=useState('')
const [designation,setDesignation]=useState('')
const [workingHours,setWorkingHours]=useState('')
const [bankName,setBankName]=useState('')
const [accountNumber,setAccountNumber]=useState('')
const [iFSCCode,setIFSCCode]=useState('')
const [bankAddress,setBankAddress]=useState('')
const [bankBranch,setBankBranch]=useState('')
const [countryCode,setCountryCode]=useState('')
const [countryCode2,setCountryCode2]=useState('')




const [companyLogo,setCompanyLogo]=React.useState({
  fileName: "/assets/watermark.png",
  bytes: "",
})

const [error,setError]=useState({})




/*
const handleIdProof=(event)=>{
  setIdProof({
    fileName: URL.createObjectURL(event.target.files[0]),
    bytes: event.target.files[0],
  });

}


const handleDigitalSignature=(event)=>{
  setDigitalSignature({
    fileName: URL.createObjectURL(event.target.files[0]),
    bytes: event.target.files[0],
  });

}

const handlePhoto=(event)=>{
  setPhoto({
    fileName: URL.createObjectURL(event.target.files[0]),
    bytes: event.target.files[0],
  });

}


const handleMarksheet=(event)=>{
  setMarksheet({
    fileName: URL.createObjectURL(event.target.files[0]),
    bytes: event.target.files[0],
  });

}
*/


const handleStatus=(event)=>{
  setEmployeeStatus(event.target.value)
  
  
}



const calculateAge = (date) => {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const ageLimit = 18;

const isDateDisabled = (date) => {
  const age = calculateAge(date);
  return age < ageLimit;
};




const handleError=(inputs,value)=>{
  setError(prev=>({...prev,[inputs]:value}))
  }
  
  const validation=()=>{
    var isValid=true
    if(!name || !(/^[a-zA-Z][a-zA-Z ]{2,}$/.test(name)))
    {
      handleError("name","Invalid  Name ")
      isValid=false
    }

    if(!employeeCode)
    {
      handleError("employeeCode","Invalid Employee Code ")
      isValid=false
    }

    if(!fullPermanentAddress)
    {
      handleError("fullPermanentAddress","Invalid fullPermanentAddress ")
      isValid=false}
    if(!pincode || !(/^[0-9]{6}$/.test(pincode)))
    {
      handleError("pincode","Invalid Pincode")
      isValid=false}

    if(!contactNumber|| !(/^[0-9]{10}$/.test(contactNumber)))
    {
      handleError("contactNumber","Invalid Contact Number ")
      isValid=false}

    if(!alternateContactNumber|| !(/^[0-9]{10}$/.test(alternateContactNumber)))
    {
      handleError("alternateContactNumber","Invalid Alternate ContactNumber")
      isValid=false}
    if(!emailAddress || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)))
    {
      handleError("emailAddress","Invalid Email Address ")
      isValid=false }

    if(!employeeStatus)
    {
      handleError("employeeStatus","Invalid Employee Status ")
      isValid=false }
    if(!designation)
    {
      handleError("designation","Invalid Designation  ")
      isValid=false }
    if(!workingHours)
    {
      handleError("workingHours","Invalid Working Hours ")
      isValid=false}
    if(!bankName|| !(/^[a-zA-Z][a-zA-Z ]{2,}$/.test(bankName)))
    {
      handleError("bankName","Invalid Bank Name")
      isValid=false }
    if(!accountNumber || !(/^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/.test(accountNumber)))
    {
      handleError("accountNumber","Invalid Account Number  ")
      isValid=false }
    if(!iFSCCode)
    {
      handleError("iFSCCode","Invalid IFSCCode ")
      isValid=false }
    if(!bankAddress)
    {
      handleError("bankAddress","Invalid Bank Address ")
      isValid=false}
    if(!bankBranch)
    {
      handleError("bankBranch","Invalid Bank Branch ")
      isValid=false }
   

      return isValid
  }
  

  




const handleSubmit=async()=>{


 



  if(validation())
{





  
  var cd=new Date()
  var dd=cd.getFullYear()+"/"+(cd.getMonth()+1)+"/"+cd.getDate()+" "+cd.getHours()+":"+cd.getMinutes()+":"+cd.getSeconds()
 




  var formData=new FormData()
  formData.append('name',name)
  formData.append('employeeCode',employeeCode)
  formData.append('address',fullPermanentAddress)
  formData.append('pincode',pincode)
  formData.append('contactNumber',contactNumber)
  formData.append('alternateNumber',alternateContactNumber)
  formData.append('emailAddress',emailAddress)
  formData.append('idProof',idProof.bytes)
  formData.append('digitalSignature',digitalSignature.bytes)
  formData.append('marksheet',marksheet.bytes)
  formData.append('photo',photo.bytes)
  formData.append('dob',dob)
  formData.append('dateOfJoining',dateOfJoining)
  formData.append('employeeStatus',employeeStatus)
  formData.append('designation',designation)
  formData.append('workingHours',workingHours)
  formData.append('bankName',bankName)
  formData.append('accountNumber',accountNumber)
  formData.append('IFSCCode',iFSCCode)
  formData.append('bankAddress',bankAddress)
  formData.append('bankBranch',bankBranch)

  var result=await postData("onboard/add_new_onboard",formData)

  if(result.status)
  {
    Swal.fire({
      icon: 'success',
      title: 'Onboard Form Submitted successfully',
     
    })
    
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Onboard  Not Submitted ',
     
      
    })
  }


  const res = await postData("register/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
       name
    })
});


  
}

}





const handleCountryCode=(event)=>{
  setCountryCode(event.target.value)

}
const handleCountryCode2=(event)=>{
  setCountryCode2(event.target.value)

}





    return(

<div className={classes.mainContainer}>
<div className={classes.box} >
    <Grid container spacing={3}>
      <Grid item xs={12} fullWidth className={classes.rowStyle} style={{marginLeft:4,marginTop:3,marginRight:0}} >
        <div  >

          <img src='/logo.png' width='65'/>
       
       </div>
       <div className={classes.headingStyle} style={{marginLeft:10,padding:8, }}>
         New Employee Onboard Registration
        
        </div>
        
      </Grid>
<hr style={{marginLeft:15,marginTop:30,marginRight:0}} color="#3498db" width="100%" ></hr>
         <Grid item xs={8}>
         <TextField fullWidth error={!error.name?false:true} helperText={error.name} onFocus={()=>handleError('name',null)}   value={name} onChange={(event)=>setName(event.target.value)} label="Name of the Employee" variant="outlined" />

         </Grid>

         <Grid item xs={4}>
         <TextField fullWidth  error={!error.employeeCode?false:true} helperText={error.employeeCode} onFocus={()=>handleError('employeeCode',null)}   value={employeeCode} onChange={(event)=>setEmployeeCode(event.target.value)}  label="Employee Code" variant="outlined" />

         </Grid>


         <Grid item xs={10}>
         <TextField fullWidth    value={fullPermanentAddress} error={!error.fullPermanentAddress?false:true} helperText={error.fullPermanentAddress} onFocus={()=>handleError('fullPermanentAddress',null)}  onChange={(event)=>setFullPermanentAddress(event.target.value)}  label="Full Permanent Address" variant="outlined" />

         </Grid>


         <Grid item xs={2}>
         <TextField fullWidth  error={!error.pincode?false:true} helperText={error.pincode} onFocus={()=>handleError('pincode',null)}    value={pincode} onChange={(event)=>setPincode(event.target.value)}  label="Area Pincode" variant="outlined" />

         </Grid>

         <Grid item xs={2}>
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Code</InputLabel>
        <Select
          labelId="Code"
          id="Code"
          value={countryCode}
          label="Code"
          onChange={handleCountryCode}
        >
          <MenuItem value={10}>India +91</MenuItem>
          <MenuItem value={20}>USA +1</MenuItem>
          <MenuItem value={30}>Russia +7</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={4}>
         <TextField fullWidth error={!error.contactNumber?false:true} helperText={error.contactNumber} onFocus={()=>handleError('contactNumber',null)}   value={contactNumber} onChange={(event)=>setContactNumber(event.target.value)}  label="Personal Contact Number" variant="outlined" />

         </Grid>


         <Grid item xs={2}>
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Code</InputLabel>
        <Select
          labelId="Code"
          id="Code"
          value={countryCode2}
          label="Code"
          onChange={handleCountryCode2}
        >
         <MenuItem value={10}>India +91</MenuItem>
          <MenuItem value={20}>USA +1</MenuItem>
          <MenuItem value={30}>Russia +7</MenuItem>
        </Select>
      </FormControl>
      </Grid>

         <Grid item xs={4}>
         <TextField fullWidth   value={alternateContactNumber}  error={!error.alternateContactNumber?false:true} helperText={error.alternateContactNumber} onFocus={()=>handleError('alternateContactNumber',null)}  onChange={(event)=>setAlternateContactNumber(event.target.value)}  label="Alternate Contact Number" variant="outlined" />

         </Grid>
       

         <Grid item xs={12}>
         <TextField fullWidth  value={emailAddress} error={!error.emailAddress?false:true} helperText={error.emailAddress} onFocus={()=>handleError('alternateContactNumber',null)} onChange={(event)=>setEmailAddress(event.target.value)}  label="Personal Email Address" variant="outlined" />

         </Grid>
       

        
         <Grid item xs={4}>
          
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Birth "   selected={dob}
      onChange={(date) => setDob(date)}
        maxDate={tomorrow}
      error={!error.dob?false:true} helperText={error.dob} onFocus={()=>handleError('dob',null)}
     
/>
      </DemoContainer>
    </LocalizationProvider> 
    
    </Grid>


         
    <Grid item xs={4}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Joining"   selected={dateOfJoining}
      onChange={(date) => setDateOfJoining(date)} 
      
      error={!error.dateOfJoining?false:true} helperText={error.dateOfJoining} onFocus={()=>handleError('dateOfJoining',null)}
      


     
/>
      </DemoContainer>
    </LocalizationProvider> </Grid>
        
         <Grid item xs={4} style={{justifyContent:''}}>
         <FormControl  >
      <FormLabel >Employee Status</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={employeeStatus}
        error={!error.employeeStatus?false:true} helperText={error.employeeStatus} onFocus={()=>handleError('employeeStatus',null)}
     
      >
      
        <FormControlLabel  onChange={handleStatus}   value="Full Time"  control={<Radio />} label="Full Time" />
        <FormControlLabel onChange={handleStatus}  value="Part time" control={<Radio />} label="Part time" />
       
      </RadioGroup>
    </FormControl>
         </Grid>
         <Grid item xs={12}>
         <TextField fullWidth   value={designation} error={!error.designation?false:true} helperText={error.designation} onFocus={()=>handleError('designation',null)} onChange={(event)=>setDesignation(event.target.value)}  label="Designation" variant="outlined" />

         </Grid>
         <Grid item xs={4}>
         <TextField fullWidth   value={workingHours} error={!error.workingHours?false:true} helperText={error.workingHours} onFocus={()=>handleError('workingHours',null)} onChange={(event)=>setWorkingHours(event.target.value)}  label="Working Hours" variant="outlined" />

         </Grid>




      
         <Grid item xs={4}>
         <TextField fullWidth   value={bankName} error={!error.bankName?false:true} helperText={error.bankName} onFocus={()=>handleError('bankName',null)}  onChange={(event)=>setBankName(event.target.value)}  label="Bank Name" variant="outlined" />

         </Grid>
        
       
         <Grid item xs={4}>
         <TextField fullWidth   value={accountNumber} error={!error.accountNumber?false:true} helperText={error.accountNumber} onFocus={()=>handleError('accountNumber',null)}   onChange={(event)=>setAccountNumber(event.target.value)}  label="Bank Account Number" variant="outlined" />

         </Grid>
        
       
         <Grid item xs={4}>
         <TextField fullWidth   value={iFSCCode} error={!error.iFSCCode?false:true} helperText={error.iFSCCode} onFocus={()=>handleError('iFSCCode',null)}  onChange={(event)=>setIFSCCode(event.target.value)}  label="Bank IFSC Code" variant="outlined" />

         </Grid>
      
         <Grid item xs={4}>
         <TextField fullWidth   value={bankAddress} error={!error.bankAddress?false:true} helperText={error.bankAddress} onFocus={()=>handleError('bankAddress',null)} onChange={(event)=>setBankAddress(event.target.value)}  label="Bank Address" variant="outlined" />

         </Grid>
  
         <Grid item xs={4}>
         <TextField fullWidth   value={bankBranch} error={!error.bankBranch?false:true} helperText={error.bankBranch} onFocus={()=>handleError('bankBranch',null)} onChange={(event)=>setBankBranch(event.target.value)}  label="Bank Branch" variant="outlined" />

         </Grid>
        
        

         <Grid item xs={6} >
        
         <div>
         <Button variant="contained" component="label">
         Goverment ID Proof
        <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setIdProof({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
      </Button> 
      </div>
      <div className={classes.commentStyle} > (Aadhar card , voter id , passport etc)
</div>

      <Avatar 
              style={{display:'flex',marginTop:30}}
              alt="Remy Sharp"
              variant="rounded"
              src={idProof.fileName}
              sx={{ width: 100, height: 100 }}
            />
           
      </Grid>



      <Grid item xs={6} >
         <Button variant="contained" component="label">
         Digital Signature
        <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setDigitalSignature({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
      </Button>
       <Avatar 
               style={{display:'flex',marginTop:30}}
              alt="Remy Sharp"
              variant="rounded"
              src={digitalSignature.fileName}
              sx={{ width: 100, height: 100 }}
            />
   
      
      
      </Grid>
      <Grid item xs={6} >
         <Button variant="contained" component="label">
         Upload
        <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setMarksheet({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
      </Button>
      <div className={classes.commentStyle} > ( Highest Qualification Marksheet,Certificate)</div>
       <Avatar 
                style={{display:'flex',marginTop:30}}
              alt="Remy Sharp"
              variant="rounded"
              src={marksheet.fileName}
              sx={{ width: 100, height: 100 }}
            />  
            
            </Grid>

      <Grid item xs={6} >
          <Button variant="contained" component="label">
         Photograph
        <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setPhoto({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
      </Button>
      <div className={classes.commentStyle} > (Coloured Passport Size Photo)</div>
       <Avatar 
              style={{display:'flex',marginTop:30}}
              alt="Remy Sharp"
              variant="rounded"
              src={photo.fileName}
              sx={{ width: 100, height: 100 }}
            /> 
            </Grid>



       




         

         <Grid item xs={6}>
         <Button fullWidth onClick={handleSubmit} variant="contained">Submit</Button>
          </Grid>

          <Grid item xs={6}>
         <Button fullWidth  variant="contained">Reset</Button>
          </Grid>

    </Grid>
  
    </div>
    </div>
    )
}
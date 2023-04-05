import {useEffect,useState} from 'react'
import MaterialTable from "@material-table/core";
import { getData,postData, ServerURL } from '../services/ServerServices';
import {Button,Dialog,DialogActions,DialogContent,DialogTitle,Avatar,
  
  TextField,
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  
  Select,
  MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Switch from '@mui/material/Switch';

import { useStyles } from "./DisplayOnboardCss";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';


export default function DisplayOnboard(props)

{
  var navigate=useNavigate()
    var classes=useStyles()
  


const [onboardData,setOnboardData]=useState([])







  const fetchAllOnboardRecord=async()=>{
    var result=await getData('onboard/fetch_all_onboard_record')
    setOnboardData(result.data)
   }
 
   useEffect(function(){
   fetchAllOnboardRecord()
 
   },[])
 
 
  


    function showAllCompany() {
        return (
          <MaterialTable
            title={<span className={classes.headingStyle}>Onboard Records</span>}
            columns={[
              { title: 'Name/Employee Code', field: 'name' ,
               render:rowData=><div>{rowData.name}<br/>{rowData.employeeCode}</div>},
             
               {title: 'Address/Pincode', field: 'address',
               render:rowData=><div>{rowData.address}<br/>{rowData.pincode}</div>},
               { title: 'Contact Details',
               render:rowData=><div>{rowData.contactNumber}<br/>{rowData.alternateNumber}<br/>{rowData.emailAddress}</div>},
               { title: ' Employee Status', field: 'employeeStatus' },
               { title: ' Date Of Birth', field: 'dob' },
               { title: ' Date Of Joining', field: 'dateOfJoining' },
               { title: ' Designation', field: 'designation' },
               { title: ' Working Hours', field: 'workingHours' },
               { title: 'Bank Name', field: 'bankName' },
               { title: ' Account Number', field: 'accountNumber' },
               { title: ' IFSC Code', field: 'IFSCCode' },
               { title: 'Bank Address', field: 'bankAddress' },
               { title: ' Bank Branch', field: 'bankBranch' },
               { title: 'ID Proof',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.idProof}`} style={{width:70,height:70}} variant="rounded"/>},
               
               { title: 'digitalSignature',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.digitalSignature}`} style={{width:70,height:70}} variant="rounded"/>},
               
               { title: 'Marksheet',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.marksheet}`} style={{width:70,height:70}} variant="rounded"/>},
               { title: 'Photograph',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.photo}`} style={{width:70,height:70}} variant="rounded"/>},
               
              
            ]}
            data={onboardData}        
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit Onboard',
                /*onClick: (event, rowData) => handleOpenDialog(rowData) */
              },
              {
                icon: 'delete',
                tooltip: 'Delete Onboard',
               /* onClick: (event, rowData) => handleDelete(rowData)*/
              }
              ,
              {
                icon: 'add',
                tooltip: 'Add Company',
                isFreeAction: true,
                onClick: (event) => navigate("/company")
              }
            ]}
            options={{
              rowStyle: {
    
              }, headerStyle: {
                backgroundColor: '#0984e3',
                color: '#FFF'
              },
    
            }}
          />
        )
      }

 return(<div className={classes.mainContainer}>
  <div className={classes.box}>
    {showAllCompany()}
    <ToastContainer />
  </div>  
 </div>)

}
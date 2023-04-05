import * as React from 'react';
import AdminAppBar from './AdminAppBar';

import {Routes,Route} from "react-router-dom"
import Onboard from "./Onboard"
import Jml from "./Jml"
import DisplayOnboard from "./DisplayOnboard"
export default function DashBoard(props) {






  return(    <div style={{width:'100%',display:'flex',flexDirection:'column',backgroundImage:"url(/background.png)" }}>
   
  
         <AdminAppBar />
         <div style={{display:'flex',backgroundImage:"url(/background.png)" }}>
         
     
          
      <Routes>
    
     
      <Route element={<Onboard />} path={"/Onboard"} />
      <Route element={<Jml />} path={"/Jml"} />
    
      <Route element={<DisplayOnboard />} path={"/DisplayOnboard"} />
        </Routes>
       
          

         </div>
         

    
  </div>)
}
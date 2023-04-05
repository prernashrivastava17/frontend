import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { ServerURL } from '../services/ServerServices';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryIcon from '@mui/icons-material/Category';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';












const MainAppBar=()=>{
    
return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar size="small" position="static"  style={{background:'#273272',height:50,alignItems:"left",justifyContent:"center"}} >
    
       
   
         
      </AppBar>

      
    </Box>

  );
}

  



const SearchAppBar=()=>{
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: 20,
      
        backgroundColor:" #f1f2f6",
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));




      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:"black"
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'black',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));



    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{background:'#FFF',height:"80px",alignItems:"left",justifyContent:"center"}} >
        
           
           <div  style={{width:'100vw',height:70,display:'flex',alignItems:'center',justifyContent:'left'}} >
           <img src="/logo.png" style={{marginLeft:90,width:85,height:55}}/>
           <div style={{marginLeft:30,width:500,display:'flex',}}>
           <Link style={{textDecoration:'none',color:'inherit'}} to='/Onboard'>
  <ListItemButton>
    <ListItemIcon>
    <CategoryIcon />
    </ListItemIcon>
    <ListItemText   primary={<span style={{ color:"#273272",fontWeight:900,letterSpacing:1, fontFamily:'Poppins'}}>Onboard</span>} />
  </ListItemButton>
  </Link>
  <Link style={{textDecoration:'none',color:'inherit'}} to='/DisplayOnboard'>
  <ListItemButton>
    <ListItemIcon>
    <CategoryIcon />
    </ListItemIcon>
    <ListItemText   primary={<span style={{color:"#273272",fontWeight:900,letterSpacing:1, fontFamily:'Poppins'}}>Records</span>} />
       
  </ListItemButton>
</Link>

  <Link style={{textDecoration:'none',color:'inherit'}} to='/Jml'>
  <ListItemButton>
    <ListItemIcon>
    <CategoryIcon />
    </ListItemIcon>
    <ListItemText   primary={<span style={{color:"#273272",fontWeight:900,letterSpacing:1, fontFamily:'Poppins'}}>JML</span>} />
       
  </ListItemButton>
</Link>

  
           
           </div>
           

              <div style={{width:"38%"}}>
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>
         


           </div>
         </AppBar>
       </Box>
    
      );
    
}








export default function Header(props) {

/*********useNavigate */
var navigate=useNavigate()
/*********************** */


  return (<div>
    <hr color='#273272' style={{height:"20px"}}></hr>
    <SearchAppBar />
  </div>);
}
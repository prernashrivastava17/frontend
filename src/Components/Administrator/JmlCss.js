import { makeStyles } from "@mui/styles";

export const useStyles= makeStyles({

    mainContainer: {
        width:'100%',
        height:'100vh',
       background:"#b2bec3",
        backgroundPosition:"center",
        backgroundSize:"cover",
        display:'flex',
        justifyContent:'center',
        alignItems:"center"
      
      },

card:{

    width:"90%",
    maxWidth:"440px",
    color:"#fff",
    textAlign:"center",
    padding:"50px 35px",
    border:"1px solid rgba(255,255,255,0.9)",
    background:"rgba(255,255,255,0.9)",
    borderRadius:"16px",
    boxShadow:"0 4px 30px rgba(0,0,0,0.1)",
    backdropFilter:"blur(10px)",
}

})
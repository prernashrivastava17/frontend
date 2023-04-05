import { makeStyles } from "@mui/styles";

export const useStyles= makeStyles({

    mainContainer: {
        width:'100%',
        height:'100vh',
        backgroundImage:"url(/back.png)",
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
    border:"1px solid rgba(255,255,255,0.3)",
    background:"rgba(255,255,255,0.2)",
    borderRadius:"16px",
    boxShadow:"0 4px 30px rgba(0,0,0,0.1)"
}

})
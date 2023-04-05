import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useStyles } from './DemoCss';

export default function Demo(){

    var classes=useStyles()
    return(<div className={classes.mainContainer}>
        <div className={classes.card}>
        <TextField fullWidth    label="Employee Code" variant="outlined" />
        
        </div>


    </div>)
}
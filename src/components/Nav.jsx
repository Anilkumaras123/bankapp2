import React from "react";
import {Link}from "react-router-dom";
import { Grid,Button } from "@mui/material";

export const Nav=()=>{
    return(
        <div>
            <Grid className="b" container spacing={3}>
                <Grid item xs={1}>
                    <Link to ="/Emp"> Employee</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to ="/Emp1"> Employee1</Link>
                </Grid>
                
            </Grid>
        </div>
    ) 
}
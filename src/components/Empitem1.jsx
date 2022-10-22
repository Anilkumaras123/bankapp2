import React from "react";
import { Grid, Card, CardContent } from "@mui/material";


export const Empitem1=({item})=>{
    return(
    <Grid item xs={3}>
            <Card>
                <CardContent>
                    <h5>{item.name}</h5>
                    <h5>{item.dept}</h5>
                    <h5>{item.age}</h5>
                </CardContent>
            </Card>


        </Grid>
    )
}
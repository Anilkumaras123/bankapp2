import { Grid } from "@mui/material";
import React, { useState ,useEffect} from "react";
import{Empitem1} from "./Empitem1";
import axios from "axios";
import Select from "react-select";



export const Emplist1=()=>{

    const[data,setData]=useState([])
    const[hdata,sethData]=useState([])

    const[housedata,sethouseData]=useState("")



    const getData=async()=>{
      const result=await axios.get("http://localhost:4040/students")
      setData(result.data)
    }
    useEffect(()=>{
     getData()
 },[])
    return(

        <div>
            <Grid container spacing={3}>
            <Grid item xs={3}>
        <Select options={hdata} fullWidth onChange={(val)=>sethouseData(val.label)}/> 
            </Grid>


{
    data .length>0 && data.map(item=><Empitem1 item={item}/>)
}

            </Grid>
        </div>
    )
}
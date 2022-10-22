// import { Grid,Button } from "@mui/material";
// import React,{useState,useEffect} from "react";
// import { Empitem } from "./components/Empitem";
// import axios from "axios";
// import Select from "react-select";






// export const EmpList=()=>{

//  const[data,setData]=useState([])
//  const [hdata,sethData]=useState([])
//  const [cdata,setcData]=useState([])
//  const [ddata,setdData]=useState([])
//  const [house,sethouseData]=useState("")
//  const [city,setcityData]=useState("")
//  const [dept,setdeptData]=useState("")


//     const getData=async()=>{
//         const result=await axios.get("http://localhost:4040/students")
//         setData(result.data)
//         const opt1=await axios.get("http://localhost:4040/houses")
//         sethData(opt1.data)
//         const opt2=await axios.get("http://localhost:4040/cities")
//         setcData(opt2.data)
//         const opt3=await axios.get("http://localhost:4040/dept")
//         setdData(opt3.data)
//     }
// const getfildata=async(payload)=>{
//     const result=await axios.post("http://localhost:4040/studentsfilt",payload)
//     setData(result.data)
// }
// const handels=()=>{
//     getfildata({house,city,dept})
// }

// useEffect(()=>{
//     getfildata({dept})
// },[dept])

// useEffect(()=>{
//     getfildata({city})
// },[city])

// useEffect(()=>{
//     getfildata({house})
// },[house])


//     useEffect(()=>{
//         getData()
//     },[])
//     return(

//         <div>

//             <Grid container spacing={3}>
//            <Grid item xs={3}>
//             <Select options={hdata} fullWidth onChange={(val)=>sethouseData(val.label)}/>

//            </Grid>
//            <Grid item xs={3}>
//             <Select options={cdata} fullWidth onChange={(val)=>setcityData(val.label)}/>

//            </Grid>
//            <Grid item xs={3}>
//             <Select options={ddata} fullWidth onChange={(val)=>setdeptData(val.label)}/>

//            </Grid>

//            {
//            data .length>0 && data.map(item=><Empitem item={item}/>)
//            }
//             </Grid>
//         </div>
//     )
// }
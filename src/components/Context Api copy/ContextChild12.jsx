import React ,{useContext, useState}from "react";
import{sendData} from"./ContextApi"



export const ContextChild12=(props)=>{ 
    const recieved=useContext(sendData)


    return(

        <div>
            
<h1>   this is child 12</h1>
<h1>recieved data from grandfather:-{recieved.age}</h1>
            
        </div>
    )
}
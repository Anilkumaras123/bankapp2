import React,{createContext} from "react";
import { Contextparent2 } from "./Contextparent2";



export const sendData=createContext()
export const ContextApi=()=>{
    const name1= "pdac"
    return(

        <div>
            <sendData.Provider  value={name1}>
         < Contextparent2/>
         </sendData.Provider>
        </div>
    )
}
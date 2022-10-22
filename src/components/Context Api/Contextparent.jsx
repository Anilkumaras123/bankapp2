import React, { useState } from "react";
import { ContextChild1 } from "./ContextChild1";


export const Contextparent=()=>{ 

    const[text,setText]=useState("")
    const[textshow,setTextshow]=useState("")
    
    return(
<center>
        <div>
            <h1>this is parent component</h1>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>setTextshow(text)}>show</button>

            <ContextChild1 textshow={textshow} text={text}/>
        </div>
        </center>
    )
}
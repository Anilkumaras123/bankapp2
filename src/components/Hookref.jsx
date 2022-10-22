import React,{useRef} from "react";


export const Hookref=()=>{
    const in1=useRef()
    const [text,setText]=useRef("")


    const handleFocus=()=>{
        in1.current.focus()
    }
    
    return(

        <div>

            <h1>useRwfhook</h1>
            <input type="text" ref={in1} />
            <button onClick={handleFocus}>Focus</button>
            
        </div>
    )
}
import React from "react";


export const ContextChild2=(props)=>{ 

    return(

        <div>
            <h1>this is Child2 component</h1>

            <h2>this is recieved from my grandfather:-{props.text}</h2>
        </div>
    )
}
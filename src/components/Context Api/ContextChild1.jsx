import React from "react";
import {ContextChild2} from"./ContextChild2"


export const ContextChild1=({text,textshow})=>{ 

    return(

        <div>
            <h1>this is Child1 component</h1>
            <h1>{text}</h1>
            <h1>{textshow}</h1>
            <br /><hr />
            <ContextChild2 text={text}/>
        </div>
    )
}
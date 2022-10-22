import React, { useReducer } from "react";

export const initialState={              //crraete object with key and value//2
    countone:10,
    countTwo:20
}
export const reducer=(state,action)=>{                                             //3 
     if(action.type=="inc"){
        return{...state,countone:state.countone+ action. data}
     }
     if(action.type=="inc 2"){
        return{...state,countTwo:state.countTwo+action.data  }                //+action.data or +30,40 etc}
     }
     if (action.type=="dec"){
        return{...state,countone:state.countone-action.data}
     }
}


 export const Hookreduce=()=>{                           


    const[count,dispatch]=useReducer(reducer,initialState)//1 
    return(
                                                                          
<center>
        <div> 
            <h1>usereducer hook</h1>                 
            <h1>{count.countone}</h1> 
            <button onClick={()=>dispatch({type:"inc",data:5})}>inc </button>   
            <button onClick={()=>dispatch({type:"dec",data:5})}>dec </button>   

            <h1>{count.countTwo}</h1>
            <button onClick={()=>dispatch({type:"inc 2",data:2})}>inc 2 </button>          
        </div>
        </center>
    )
}
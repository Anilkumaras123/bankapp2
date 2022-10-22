// import React, { useState } from "react";
// import { Tabs ,Tab} from "@mui/material";
// import { Viewaccount } from "./Viewaccount";
// import { Viewdetails } from "./Viewdetails";
// import { Addamount } from "./Addamount";


// export const Bankdashboard=()=>{
//     const [val,setVal]=useState("Account")


//     return(

//         <div>
//             <h1> Bank dashboard</h1>
//             <Tabs value={val} onChange={(e,val)=>setVal(val)}>
//                 <Tab value="Account" label="View Account"></Tab>
//                 <Tab value="Details" label="View Details"></Tab>
//                 <Tab value="AddAmount" label="Add Amount"></Tab>
//             </Tabs>
//             {val=="Account" &&<Viewaccount/>}
//             {val=="Details" &&<Viewdetails/>}
//             {val=="Amount" &&<Addamount/>}
//         </div>
//     )
// }
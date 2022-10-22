import{BrowserRouter,Routes,Route} from"react-router-dom";
 
//  import {Nav} from"./components/Nav";
 
//  import{EmpList}from"./components/EmpList";
//  import "./components/common.css"
// import{Emplist1}from "./components/Emplist1";
import{Hookreduce} from"./components/Hookreduce";
import{Contextparent} from"./components/Context Api/Contextparent";
import{Contextparent2} from"./components/Context Api copy/Contextparent2"
import{ContextApi} from"./components/Context Api copy/ContextApi"
// import{ContextBank} from"./components/ContextBank/ContextBank"

 function App() {
  return (
    <div className="main">
      {/* <BrowserRouter> */}
      {/* <Nav/> */}
      {/* <Routes> */}
        
        {/* <Route path="/Emp" element={<EmpList/>}/> */}
        {/* <Route path="/Emp1" element={<Emplist1/>}/> */}
        
      {/* </Routes> */}
      {/* </BrowserRouter> */}
     
        
     <Hookreduce/>
     <Contextparent/>
     <Contextparent2/>
     {/* <ContextBank/> */}
    </div>
  );
}

export default App;

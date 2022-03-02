import './App.css';
import myImg1 from "./images/myImg1"
import React, { useState } from "react"
import api from "./components/api/post";

function App() {
  
  const initialEmployeeObj={mail:'', password:''}
  const [newEmployeeObj,setCommonHandlerForEmployee] = useState(initialEmployeeObj)

const handleClick = async (e) => {
  e.preventDefault();
  try{
      const response = await api.get('/employee');
        if(newEmployeeObj.mail === response.data[0].mail && newEmployeeObj.password===response.data[0].password){
              alert("Login Successfull !!")}
            else if(newEmployeeObj.mail=== response.data[0].mail &&  newEmployeeObj.password===""){
              alert("Missing Password! try again")
            }
             else{
              alert("Wrong credentials. try again")
            }

  }
  catch{
  alert("UnExpected Error occured")
        }
  }
 

return ( 
  <div className="App">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    <header className="App-header">
  <nav class="navbar navbar-light bg-light justify-content-end">
        <div class="container-fluid">
        <a class="navbar-brand" id="heading"> ATools<span>.</span> </a>
       <form class="d-flex">
        <ul class="nav justify-content-end">
        <li class="nav-item">
    <button id = "buttonNav1" class="btn d-none d-sm-block" type="button">Start free trial</button>
          </li>
          <li class="nav-item">
    <button id = "buttonNav2" class="btn d-none d-sm-block" type="button">Login</button>
           </li>
           </ul>
        </form>
  </div>
</nav>
      </header>

      <form onSubmit={handleClick}>
         <div className="image">
          <div class="container-fluid" id="mainSection">
             <div class="row" >
              <div class="loginBox col-sm-5" >
              <div class="col-3"/>
      <div class="col-7">
         <div class="blurb"><span>Welcome Back</span></div> 
         <div id="BlurbSmallCase">Sub title text goes here</div>
          <label for="exampleFormControlInput1" class="form-label"></label>
      <input type="email" class="form-control" id="exampleFormControlInput1" value={newEmployeeObj.mail} onChange={event=>setCommonHandlerForEmployee({...newEmployeeObj,mail:event.target.value})} placeholder="Email*"/>
          <label for="exampleFormControlInput1" class="form-label"></label>
      <input type="password" class="form-control" id="exampleFormControlInput2" value={newEmployeeObj.password} onChange={event=>setCommonHandlerForEmployee({...newEmployeeObj,password:event.target.value})} placeholder="password*"/><br/>
          <div class="d-grid gap-2">
      <button id = "buttonLogin" class="btn" type="submit">Login</button>
          <div class="row">
            <div class="form-check col-5" id="smallcase1">
            <input class="form-check-input" type="checkbox" value="true" id="flexCheckChecked" checked/>
             <label class="form-check-label" for="flexCheckChecked"> Remember Password</label>
            </div>
            <div class="col-2"></div>
            <div class="col-5 col-xs-12" id="smallcase2" ><a href="">Forgot Password?</a></div>
          </div>
        </div>
      </div>
      <div class="col-2"/>
     </div>
    <div class="col-sm-7">
    <img src={myImg1} class="d-none d-sm-inline" alt=""/>
    
        

    </div>
 </div>
 </div>
  </div>
  </form>

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"/>
  </div>
  );
}

export default App;

import react, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  
 const[name,setname]=useState();
 const[fname,setfname]=useState();

  const inputEvent =(event)=>{
        setname(event.target.value);
  }

 const onsubmit = (event) =>{
       event.preventDefault();
       setfname(name);
 }
  return (
    <>
      <form onSubmit={onsubmit}>
        <div className="container col-3 border rounded my-5">
          <center>
            <h2>Hello{fname}</h2>
          </center>
          <div className="form-group my-4">
            <label>User Name</label>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Enter your name"
              onChange={inputEvent}
              value={name}
            />
        
          </div>

          <div className="form-group my-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control my-2"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-2 mb-3 contanier col-12"
            
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
const navigate=useNavigate();
const auth=localStorage.getItem("user");
    const handle=()=>{
        localStorage.clear();
        navigate("/");      // use it for more security
        
    }

return(

    <div>
                  <p style={{color:'blue',fontSize:'25px'}}>welcome ({JSON.parse(auth).name})</p> 
                  <button  className="bt" onClick={handle} to="/">Logout</button>  

    </div>
)



}

export default Dashboard
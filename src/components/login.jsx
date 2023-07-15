import axios from "axios";
import {useNavigate} from 'react-router-dom'
import React,{useEffect, useState} from 'react';
import './page.css';

const URL= process.env.REACT_APP_BACKEND_SERVER;

const Login=()=>{
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();
//if user has already logged in then can not go back to log in page without logout

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
          navigate("/dashboard");
         }
    })



    const handlelogin=async(e)=>{
        if(email && password){ 
            e.preventDefault();
            let data={email,password};
       

            const baseURL=`${URL}/login`;
            let result= await axios.post(baseURL,data);
            if(result.data.user){
                localStorage.setItem("user",JSON.stringify(result.data.user));
                navigate("/dashboard");
            }
            else{
                alert("please enter correct details");
            }
        }
        else{
            alert("enter both field");
        }
    
    }





    return(
           <form>
                <h2 className='heading'>Login</h2>
                <div className='in'>
                    <input type="email" placeholder='Enter Mail id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value) }/>
                </div>
                <div className='btn-div' ><button className="bt" onClick={(e)=>handlelogin(e)}>Login</button>
                    <button className="bt" onClick={()=>navigate("/signup")}>Signup</button>
                    </div>
           </form>
)
}

export default Login;
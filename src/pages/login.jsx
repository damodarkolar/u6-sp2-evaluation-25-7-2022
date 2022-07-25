import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {handleLoginLoading, handleLoginSuccess, handleLoginErr} from "../redux/action"
import { useState } from "react";


const Login = () => {
    const [email,setEmail]=useState("")
    const [password, setPassword]=useState("");
const dispatch=useDispatch()
const token =useSelector(state=>state.token)
console.log(token)

const loginFetch=(data)=>{

    fetch(`https://reqres.in/auth/login`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json() )
    .then(data=>dispatch(handleLoginSuccess(data.token)))
    .catch(err=>dispatch(handleLoginErr()))
}

const handleSubmit=()=>{
const userDetails={
    email:email,
    password:password
}
loginFetch(userDetails)
setEmail("")
setPassword("")
}

    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="User name" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default Login
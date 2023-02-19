import React, {useState,  useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const SignUp=()=>{

    const [name,setName] =  useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem("user");
      if(auth){
        navigate('/')
      }
    },[])

  // sending user input to backend 
    const sendUserInputs = async (e)=>{
        e.preventDefault();
      // console.table(name,email,password);
    //   setEmail("");
    //   setPassword("");

      // using fetch with api from backend(this process needs to be async await)
      let result = await fetch('http://localhost:5000/signup',{
        method:"POST",
        body: JSON.stringify({name,email,password}),
        headers: {
            'Content-Type':'application/json'
        },
      });
      result = await result.json();
      // console.log(result);
      //saving user signup info in local storage
      localStorage.setItem("user",JSON.stringify(result.result));
      localStorage.setItem("token",JSON.stringify(result.auth));
    
        navigate('/')
      
    };
    

    return(
        <div className="formPage">
            <h1>Sign Up</h1>
            <form className="form">
                <input type="text" placeholder="Enter your name.." value={name} onChange={(e)=>{setName(e.target.value)}} name="name" />
                <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" />
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" />
                <button className="btn signUpBtn" type="submit" onClick={sendUserInputs}>Sign Up</button>
            </form>
        </div>
    )
};

export default SignUp;
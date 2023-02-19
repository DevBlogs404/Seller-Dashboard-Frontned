import React,{useState} from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  },[])

  const userLogin = async (e) => {
    e.preventDefault();
    // console.warn(email, password);
    // setEmail("");
    // setPassword("");

    let result = await fetch('http://localhost:5000/login',{
      method:'POST',
      body : JSON.stringify({email,password}),
      headers : {
        'Content-Type':'application/json'
      }
    });

    result = await result.json();
    // console.log(result);
    if(result.auth){
      localStorage.setItem("user",JSON.stringify(result.user));
      localStorage.setItem("token",JSON.stringify(result.auth));
      navigate('/')
    }else{
      alert("enter correct details")
    }
  };

  return (
    <div className="formPage">
      <h1>Log In</h1>
      <form className="form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
        />
        <button className="btn signUpBtn" onClick={userLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;

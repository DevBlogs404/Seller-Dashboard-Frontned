import React from "react";
import {Link, useNavigate} from 'react-router-dom';

const Navbar= () => {
  const auth = localStorage.getItem('user'); 
  const navigate = useNavigate();

  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
 
  return (
    <div className="header">
     <div className="logo"><Link to='/'>Logo</Link></div>
     {auth ? 
              <div className="navbar">
                 <li>
              <Link to='/'>Products</Link>
            </li>
            <li>
              <Link to='/add'>Add Product</Link>
            </li>
            {/* <li>
              <Link to='/update/:id'>Update Product</Link>
            </li> */}
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
            {/*we cannot directly use auth.name because auth(user in our case) is stored locally in form of string so we first parse the local stored user to convert it into json object from string(because data stored in local storage is in string) so that we use auth.name */}
            <Link to='/signup' onClick={logout}>Log Out ({JSON.parse(auth).name})</Link> 
            </li>
            </div>
          :
          <div className="navbar">
            <li> <Link to='/signup'>Sign Up</Link></li>
       <li><Link to='/login'>Log In</Link></li>
       </div>
     
     }
     {/* <div className="navbar">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          {auth ? <Link to='/signup' onClick={logout}>Log Out</Link> : <Link to='/signup'>Sign Up</Link>  }
        </li> 
         <li>
          <Link to='/login'>Log In</Link>
        </li>
        <li>
        {auth ? <Link to='/signup' onClick={logout}>Log Out</Link> : <>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
        </>}
        </li>
     </div> */}
    </div>
  );
};

export default Navbar;

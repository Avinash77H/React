import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const[loginData,setLoginData] = useState({loginName:"",loginPassword:""})
  const{isAuth,setIsAuth,authData,setAuthData,setCurrentUser} = useAuth();

  const navigate = useNavigate();
  
  function handleSubmit(e){
    e.preventDefault();

    // check valid user or not
   const user = authData.find((user)=>(
      user.userName === loginData.loginName && user.userPassword === loginData.loginPassword
   ));

 

   // if valid user then user redirect into profile page
   
   if(user){
     setIsAuth(true);
     setCurrentUser(user);
     navigate('/profile')
   }
   else{
   alert("Name or Password is not Valid");
    return
   }
  
  }
  return (
    <div>
      <h1 className='header'>Login page</h1>
      <div>
        <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' placeholder='Enter Your Name' className='border border-black' onChange={(e)=>setLoginData((prev)=>({...prev,loginName:e.target.value}))}/>
         </div>
         <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' placeholder='Enter Your Name' className='border border-black' onChange={(e)=>setLoginData((prev)=>({...prev,loginPassword:e.target.value}))}/>
         </div>
         <button className='bg-green-500 text-white px-2 py-1 rounded-md'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

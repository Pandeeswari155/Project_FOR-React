import React, { useState } from 'react'
// import {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import './new.css'
function Login()
{
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const NameChange=(e)=>{
        setName(e.target.value);
    }
    const PasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const Handle=() =>{
        const store=localStorage.getItem(name);
        const value=JSON.parse(store);
        if(value.password !==password && value.name!==name)
        {
            setError('Wrong username or password');
        }
        
        navigate('/image');
        // if(localStorage.getItem(name)){
        //     {
        //         setError('User alraedy exist!.Please enter different name')
        //         return;
        //     }
        //     // localStorage.setItem(name,JSON.stringify({name,password}));
        // }
        // navigate('/home')
    }
    const Reback = ()=>{
        navigate('./')
    }
    return(
        <div className='singup'>
            <div className='input'>
                {error && <p style={{color:'red'}}>{error}</p>}
                <div className="loginpage">
                <h1 >Login</h1>
                <input type='text' placeholder='username' className='name' value={name} onChange={NameChange}></input>
                <br></br>
                <input type='password' placeholder='password' className='password' value={password} onChange={PasswordChange}></input>
                <br/>
                <button onClick={Handle}>Login</button>
                <button onClick={Reback}>Singup</button>
                </div>
            </div>
        </div>
    )
}
export default Login
import React from 'react'
import './Singup.css'
import { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';
import axios from 'axios';
function Sing()
{
    const [name,setName]=useState('');
    const [password,setpassword]=useState('');
    const [conform,setConform]=useState('');
    const [email,setEmail]=useState();
    const[phone,setPhone]=useState();
    const[username,setUsername]=useState();
    const [error,setError]=useState('');
    const navigate=useNavigate();
    const ChangeName = (e)=>
    {
        setUsername(e.target.value)
    }
    const ChangePassword = (e)=>
    {
        setpassword(e.target.value)
    }
    const ChangeConform = (e)=>
    {
        setConform(e.target.value)
    }
    const [emailvaild,setEmailvalid]=useState();
    const changeEmail=(e)=>{
        
        setEmail(e.target.value)
    }
    const pattern=/^[^\s@]+@[^\s@]+\.com$/;
    const Handle = () =>{
        // if(localStorage.getItem(name)){
        //        {
        //            setError('User alraedy exist!.Please enter different name')
        //            return;
        //          }
        //         }
        //  localStorage.setItem(name,JSON.stringify({name,password}));
        if(!password || password.length<8){
            setError('Minimum 8 Character');
            return
        }
        if(!pattern.test(email))
        {
            setError('Give correct Email id');
        }
        if(password!==conform){
            setError('The password is not matched');
            return
        }
        
        
        if(!email || email.trim()===' '|| !phone ||phone.trim()===' '||!username || username.trim()===' '){
            setError('Please provide correct details');
        return
        }
        axios
        .get("http://localhost:4000/users")
        .then(res=>{
            const newId = res.data[res.data.length - 1].id + 1;
        return axios.post("http://localhost:4000/users",{name:username,email:email,phone,password:password,id:newId})
        
        })
        .then(()=>{
        navigate('/login')  
        })
    }
    const LoginClick = (e) =>{
        navigate('/login')
    }
    return(
        <div className='body'>
            <div  className='singup'>
            {/* <div className="pandess"> */}
                <div className='input'>
                <IoPerson className='person'/>
                    {error && <h6 style={{color:'red'}}>{error}</h6>}
                    <input type='text' className='i1' 
                    // style={{marginBottom:'100cap'}}
                    required placeholder="Username" value={username} onChange={ChangeName} type="text">
                    </input><br></br>
                    <input placeholder="email" value={email} onChange={changeEmail} type="email" className='i1'></input><br/>
                    <input type='password' placeholder="Password"  required value={password} onChange={ChangePassword}
                    className='i1'></input><br></br>
                    <input type='password' placeholder='conformpassword' value={conform} onChange={ChangeConform}
                    className='i1'></input><br/>
                    <input type="text" placeholder='Phone number'value={phone} className='i1'onCanPlay={(e)=>setPhone(e.target.value)}></input>
                <div>
                    <button style={{gap:'50px'}}onClick={Handle}>Singup</button>
                    <button onClick={LoginClick} className='loginpage'>Login</button>
                </div> 
                </div>
            {/* </div> */}
            
         </div>  
          
         <div onClick={(e)=> {e.stopPropagation();alert('Hello')}}>
            <button onClick={()=> alert('It me')}>Click</button>
         </div>
        </div>
    )
}
export default Sing
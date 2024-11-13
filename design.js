import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function Design (){
    const navigate=useNavigate();
    const [valid,setValid]=useState(true);
    useEffect(()=>
    {
        const timer=setTimeout(() => {
            setValid(false)
            navigate('/home')
        }, 5000);
        return ()=>clearTimeout(timer);
        
    },[navigate]);
    
    return(
        <div className='disg'>
            {valid && 
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-TlFG8yqh3wD4P56Buo78Hhz9pGLLbp9Og&s' alt='' className='pic5'/>
            }
        </div>
    )
}
export default Design
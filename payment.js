import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './payment.css';
function Payment(){
    const navigate=useNavigate();
    const [error,setError]=useState(false);
    const[success,setSuccess]=useState("");
    const [payment,setPayment]=useState("");
    // const go=()=>{
    //     const pay=parseInt(payment,10);
    //     if(pay===50000)
    //     {
    //         setPayment("");
    //     navigate("/dislay-details")
    //     }
    //     else{
    //         setError("please pay the 50000 amount")
    //     }
    // }
    const go = () => {
        const pay = parseInt(payment, 10); // Parse the input to an integer

        if (pay === 50000) {
             // Clear any previous error
            navigate("/display-details"); // Corrected navigation path
        } else {
            setError("Please pay the exact amount of $50000."); // Set error message
        }
    };
    const set=(e)=>{
        setPayment(e.target.value)
    }
    const [mouse,setMouse]=useState(false);
    return(
        <>
            <img src="https://saspublishers.com/static/media/gpay.jpg" alt='payment' className='scan'></img>
        <div className="Payment">
            <h1>The total price is</h1>
            <h1 style={{color:"GrayText"}}>$50000</h1>
            {error && <p style={{color:"red" 
            }}>{error}</p>}
            <input type="text" placeholder='Enter the number' value={payment} onChange={set}
            className='input_value'></input><br/>
            <button onClick={go}
            style={{marginLeft:"400px",height:"100px",width:"100px",
                backgroundColor: mouse ? "green" :"blue"
            }}
            onMouseEnter={()=>setMouse(true)}
            onMouseLeave={()=>setMouse(false)}
            className='pay'>Pay Now</button>
            
        </div>
        </>
    )

}
export default Payment;
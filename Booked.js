import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './booked.css';
function Booked(){
    const location=useLocation();
    const navigete=useNavigate();
    const [loading, setLoading] = useState(true);
    // const Booking__Details=location.state||{};
    const [Booking__Details,setBooking__Details] = useState({}); // Access the 'booking' object from location.state
// st [booking,setBooking]=useState({name:"",date:"",food:"",stay:"",person:"",rooms:""});
useEffect(()=>{
    axios.get(`http://localhost:4000/Booking`)
    .then((res)=>
    {
        const len=res.data;
        setBooking__Details(len[len.length -1])
        // setLoading(false)
    })
    .catch((error)=>console.log(error))
},[])
const deletee=()=>{
    // setBooking__Details("");
    navigete('/home')
}
const goback=()=>{
    navigete('/Booking_details')
}
return(
        <div className='book'>
            <h1 style={{color:"red"}}>BOOKING DETAILS</h1>
        <div className='Booking_detail' >
            <div className="front_details">
            <img 
            src="data:image/jpeg;base64,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nsNHGl8kKpffKqrfxtUjm69CVLm3uw5UhMY3PbT1JApVSUNp5xolnVbBmAzGw7z2ChPONNYzBLLbN6NyO4lSt/EXNVpepOtaD7OALk6U2cUgUOXGVrWN9DfUW7dKr4+T0IINjcG97i/mhd7bWFKj4HGEZAWsSp6rgKAAASOjrma4sczsRY1dY+7+Qrn2LEyqDlJFzsO3c6duin3Gl1UHk9CRYlurrGgEZjAGnUrW9gqzw8QRFQbKABtsBbq0qZKK2Y031Q5RRRUFBRRRQAU1LvTtNS701uJjaecfZ86kCo6ecfZ86kCh7gj2iiikMKKKKACvGr2igCKxsTfu+dORyrbzh76UyUjm6dior8bGjOTnbq2UkbdtM8wnrv8AAatebo5ugCq5hPXf4DRzCeu/wGrXm6OboAquYT13+A0cwnrv8Bq15ujm6AKrmE9d/gNHMJ67/Aatebo5ugBjDYpEUL0jbryntqUs6kXzD20jm6ObpAerKt/OHvqNxHI2W7HS/mi/ZvapHN0c3TAquYT13+A0cwnrv8Bq15ujm6AKrmE9d/gNHMJ67/Aatebo5ugCq5hPXf4DRzCeu/wGrXm6OboAquYT13+A16mGQm2d/apA99WnN0c3QA1goljv95e9uzqv9adklF9xRzdeiOiwExakmpApKrS6TGgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z" 
            ></img>
            </div>
            <div className='content'>
            <h1>Your name: {Booking__Details.name}</h1>
            <h1>Booking Date: {Booking__Details.date}</h1>
            {Booking__Details.food ? <h1>Food :Yes</h1>:<h1>Food : No</h1>}
           <h1> You are Staying  <span class="name-style"></span>{Booking__Details.stay}</h1>
             <h1>no.of person  <span class="name-style"></span>{Booking__Details.person}</h1>
             <h1>no.of.Rooms  <span class="name-style"></span>{Booking__Details.rooms}</h1>
             </div>
            </div>
         <div className='Cansel'>
             <button onClick={deletee}>Cansel</button>
            <button onClick={goback}>Go back</button>
         </div>
        </div>
    );
}
export default Booked;


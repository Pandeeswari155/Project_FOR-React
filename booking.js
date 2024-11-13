import React, { useState } from 'react'
import Booked from './Booked';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './booking.css';
function Booking()
{
    const content="Food Price :  $321\nAC room price :  $423\nnon-AC room price :  $324 \n cost for one day:  $123"
    const [booking,setBooking]=useState({name:"",date:"",food:false,stay:"",person:"",rooms:""});
    const [con,setCon]=useState(false);
    const navigate=useNavigate();
    const Display_content=()=>{
        setCon(con ===true?false:true);
    }
    const display_page=()=>{
        // :{booking}})
        axios.post(`http://localhost:4000/Booking`,{
name:booking.name,date:booking.date,food:booking.food,stay:booking.stay,person:booking.person,rooms:booking.rooms
})
        .then((res)=>{
            console.log(booking.name)
            navigate('/-payments')
        })
        .catch(err=>{
            console.log("error",err)
        })
        // <Booked Booking_Details={booking}/>
    }
    return(
        <div style={{backgroundColor:"burlywood",paddingTop:"100px",paddingBottom:'30px'}}>
        <div className='Booking_details'>
        <label>Enter the name</label><input type="text" placeholder='name' value={booking.name} name='name'
        onChange={(e)=>{
            setBooking({
                ...booking,[e.target.name]:e.target.value})}}></input><br/>
        <label>available the date</label><input type="date" placeholder='date' value={booking.date}
        name='date'
        onChange={(e)=>{
            setBooking({
                ...booking,
                [e.target.name]:e.target.value
            })
        }}></input><br/>
            <label>Need for food</label><input type="checkbox" placeholder='food'
            value={booking.food}name='food' className='custom-checkbox'
            onChange={(e)=>{
                setBooking({
                    ...booking,
                    [e.target.name]:e.target.checked
                })
            }}></input><br/>
            <label>How many days you are staying</label><input type="number" placeholder='how many days'
            value={booking.stay} name='stay'
            onChange={(e)=>{
                setBooking({
                    ...booking,
                    [e.target.name]:e.target.value
                })
            }}></input><br/>
            <label>no.of person</label><input type="number" placeholder='no.of person'value={booking.person} name='person'
            onChange={(e)=>{
                setBooking({
                    ...booking,
                    [e.target.name]:e.target.value
                })
            }}></input><br/>
            <label>How many rooms need?</label><input type="number" placeholder='available rooms'name='rooms'
            value={booking.rooms} onChange={(e)=>{
                setBooking({
                    ...booking,
                    [e.target.name]:e.target.value
                })
            }}></input><br/>
        </div>
        
        <button onClick={display_page}style={{textAlign:"center",backgroundColor:"green",marginLeft:"830px",marginTop:"10px"}}>Booking now</button><br/>
            <a href='#' onClick={Display_content} style={{marginLeft:"800px"}}>See more details</a>
            {con && <h1 style={{whiteSpace:"pre-line",color:"blue",marginLeft:"750px",border:"solid 1px",display:"inline-block",
                padding:"30px",
            }}>{content}</h1>}
        
        </div>
    )
}
export default Booking;
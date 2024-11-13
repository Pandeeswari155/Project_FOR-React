import React from 'react'
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaFighterJet } from "react-icons/fa";
import { IoPerson } from "react-icons/io5"
import { Navigate, useNavigate } from 'react-router-dom';
// import {  useNavigate } from 'react-router-dom';
import './Singup.css';
import { ImInsertTemplate } from 'react-icons/im';
function Home()
{
    const values=['home','About','Services','Contact','Feedbact'];
    const navigate=useNavigate();
    const Country=['India','USA','UK','Albania','Angola','Maldives'];
    const specal=['Car','Food','Playing area','Swimmingpool']
    const [toggle,setToggle]=useState(false);
    const [con,setCon]=useState(false);
    const [to,setTo]=useState(false);
    const [show,setShow]=useState(false);
    const Display=()=>{
        setToggle(!con);
        setCon(false)
        setTo(false);
        setShow(!show)
    }
    const Eachelement=()=>{
        setCon(!toggle);
        setToggle(false);
        setShow(!show)
        setTo(false);
    }
    const Shoow=()=>{
        setTo(!to);
        setShow(!show)
        setCon(false);
        setToggle(false);
    }
    const Handle=()=>{
        navigate('/Account');
    }
    const clickimage1=()=>{
        navigate('/image1');
    }
    const clickimage2=()=>{
        navigate('/image2');
    }
    const clickimage3=()=>{
        navigate('/image3');
    }
    const clickimage4=()=>{
        navigate('/image4');
    }
    return(
        <div className="home">
            <div className="list">
                
            </div>
            <div className="container">
                <h4><IoMdMenu onClick={Eachelement} />
                </h4>
                <h4 onClick={Display}>Country</h4>
                <h4><FaFighterJet /></h4>
                <h4 onClick={Shoow}>Speciality</h4>

                <IoPerson className='person1' onClick={Handle}/>
            </div>
            {show && <div className="name1" style={{backgroundColor: '#202713',
    width: '100%',
    height: '7cm',
    marginLeft: '0cap'}}>
            {con && (
            <div className="eachs">
                {values.map((val,index)=>(
                <h3 key={index}>{val}</h3>))}
            </div>
            )}
            {toggle && (<div className="dis">{
                Country.map((c,index)=>(
                    <h3 key={index}>{c}</h3>
                ))}
            </div>
            )}
            {to && (
                <div className="diss">
                    {specal.map((s,index)=>(
                    <h3 key={index}>{s}</h3>))}
                </div>
                )}
            </div>}
                <h1>Booking a highly rated holiday rental</h1>
            <div className="content">
                <div className="p1">
                    <div className="imagepage" onDoubleClick={clickimage1}>
                        <img style={{height:"458px"}}src="data:image/jpeg;base64,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" alt="pic12" className="pic1"  />
                        <div className="parara">
                        <h3>Colosseo</h3>
                        <p>Rione Monti, italy, Roma</p><span>9.8</span>
                        Exceptional  106 reviews
                        <p className="rate">Starting from <h2>$50,132</h2></p>
                        </div>
                    </div>
                    <div className="imagepage" onDoubleClick={clickimage2}>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=" alt="" className="pic1" onClick={clickimage2}/>
                        <h3>Villa Domina</h3>
                        <div className="parara">
                        
                        <p>Split City, Croatia, Split</p><span>9.3</span>
                        Exceptional  106 reviews
                        <p className="rate">Superb  1,326 reviews <h2>$10,676</h2></p>
                        </div>
                    </div>
                    <div className="imagepage" onDoubleClick={clickimage3}>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=" alt="" className="pic" onClick={clickimage3}/>
                        <h3>7Seasons Apartments Budapest</h3>
                        
                        <p>Terezvaros, Hungary, Budapest</p><span>8.8</span>
                        Fabulous  11,534 reviews
                        <p className="rate">Starting from <h2>$13,432</h2></p>
                        </div>
                    </div>
                    {/*<div className='imagepage'>
                        {/* <img src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=" alt="" className='pic'/> 
                            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/559654140.webp?k=89e79aa75ec8a78c63c6f97559ec8f893de372401cdde1b4a2ef8fa1b2389631&o=" alt="" className="pic1" />
                            <h3>3 Epoques Aparments</h3>
                    </div>*/}
                
            </div>
            <h1>Explore India</h1>
                <div className="p1">
                    <div className="imag1" onDoubleClick={clickimage4}>
                        <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o=" alt="" className="pic1" onClick={clickimage4}/>
                    <h3>Munnar</h3>
                    </div>
                    <div className="imag1">
                        <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=" alt="" className="pic1" />
                    <h3>Ooty</h3>
                    </div>
                    <div className="imag1">
                        <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="pic1" />
                    <h3>Mumbai</h3>
                    </div>
                    <div className="imag1">
                        <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="pic1" />
                    <h3>Bangalore</h3>
                    </div>

                </div>
            </div>
        
    )
}
export default Home
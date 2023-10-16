import Footer from "../Footers/footer.jsx";
import HomeSec from "../Home-Sec/home-sec.jsx";
import ThirdHome from "../Home-third/home-third.jsx";
import {Link} from "react-router-dom"
import Navbar from "../Navbar/navbar.jsx";
import "./home.css";
import React, { useState } from 'react';

const Home =()=>{
    const [searchValue,setSearchValue] = useState("")

    return (
        <>
        <div className="bg">
        <Navbar />
        <div className="home-bg">
            <div className="home-card">
            <div className="home-left">
                <h1>Find <span>Partners</span> (CAs) available online</h1>
                <p><span>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
            <div className="home-search-container">
                <input type="text" className="" placeholder="Search by name" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
                <Link to={`/${searchValue}`} className="search-link" type="button" >
                    Search
                </Link> 
                </div>
            </div>
            <div className="home-right">
                <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1697271304/Left_fpdwjo.png" alt="" />
            </div>
        </div>
        </div>
        </div>
        <HomeSec />
        <ThirdHome />
        <Footer />
        </>
    )
}

export default Home;
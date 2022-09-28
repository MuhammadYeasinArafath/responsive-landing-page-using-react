import React from 'react';
import "./Home.css";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Home = () => {
    return (
        <>
         <section>
            <input type="checkbox" id="check"></input>
            <header>
                <h2><a href="#" className='logo'>Nature</a></h2>
                <div className="navigation">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Info</a>
                    <a href="#">Service</a>
                    <a href="#">Contact</a>
                </div>
                <label for="check" className="menu-btn">
                    <FiMenu className='FiMenu'></FiMenu>
                    <MdClose className='MdClose'></MdClose>
                </label>
            </header>
            <div className="content">
                <div className="info">
                    <h2>Like Nature <br /> <span>Be Creative! </span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum blanditiis ea, reprehenderit nulla quisquam nesciunt amet modi aut repellendus adipisci tempore distinctio beatae soluta praesentium placeat cumque eligendi accusantium!</p>
                    <a href="#" className='info-btn'>More Info</a>
                </div>
            </div>
            <div className="media-icons">
                <a href="#"><FaFacebook></FaFacebook></a>
                <a href="#"><FaTwitter></FaTwitter></a>
                <a href="#"><FaInstagram></FaInstagram></a>
            
            </div>
        </section>   
        </>
    );
};

export default Home;

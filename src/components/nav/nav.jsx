import React from 'react';
import './nav.css';

import { FaYoutube, FaMixcloud, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import $ from 'jquery'
import { useNavigate } from "react-router-dom";
import Clock from '../clock/clock';

function Nav() {
    $(() => {
        $(window).on('scroll', () => {
            var scrollTop = $(window).scrollTop()
            if (scrollTop > 50/* $("#nav").offset().top */) {
                // display add
                $("#nav").addClass('nav-black');
            } else {
                $("#nav").removeClass('nav-black');

            }
        })
    })
    const [activeNav, setActiveNav] = useState('#');
    return (

        <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3">

            <div className="logo">
                <Link className="logo" to="/"><img src={Logo} alt="logo" className='logo' /></Link>
            </div>
            <div className="clock">
                <Clock/>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controlsName="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <a className="navbar-brand logo" href="#"><img src={Logo} alt="logo" className='logo' /></a>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 flex-center">
                        <li className="nav-item">
                            <Link to="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Головна</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shows" onClick={() => setActiveNav('shows')} className={activeNav === 'shows' ? 'active' : ''}>Шоу</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" onClick={() => setActiveNav('djs')} className={activeNav === 'djs' ? 'active' : ''}>Ді-Джеї</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" onClick={() => setActiveNav('news')} className={activeNav === 'news' ? 'active' : ''}>Новини</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/podcasts" onClick={() => setActiveNav('podcasts')} className={activeNav === 'podcasts' ? 'active' : ''}>Подкасти</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" onClick={() => setActiveNav('application')} className={activeNav === 'application' ? 'active' : ''}>Додаток</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}>Про радіо</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}>Зв'язок</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className='btn-donation'><button type="button" className="btn btn-primary btn-donation" >
                                Donate
                            </button></Link>
                        </li>
                    </ul>
                    <ul className="nav social justify-content-center align-content-center">
                        <li className="nav-item social"><a href="https://facebook.com/M4URADIOUA/" target="_blabk"><FaFacebook /></a></li>
                        <li className="nav-item social"><a href="https://instagram.com/M4URADIOUA/" target="_blabk"><FaInstagram /></a></li>
                        <li className="nav-item social"><a href="https://www.youtube.com/channel/UCLu7ieilESQnmEkEXh3RUag" target="_blabk"><FaYoutube /></a></li>
                        <li className="nav-item social"><a href="https://www.mixcloud.com/M4URADIOUA/" target="_blabk"><FaMixcloud /></a></li>
                    </ul>
                </div>
            </div>


        </nav>

    )
}

export default Nav
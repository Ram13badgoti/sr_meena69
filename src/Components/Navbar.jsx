import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook ,FaInstagram,FaLinkedin } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react";


const Navbar =()=>{
    const [showMenu,setShowMenu] = useState(false);
    const[clink,setCLink] = useState(false);
    return (
        <>
        <div className="Navbar">
            <div className="logo">
            <h2>Siyaram Meena </h2>
            </div>
     <div className={showMenu? "menu-link mobile-menu-link":"link"}>
        
        <NavLink style={{textDecoration:"none"}}  onClick={()=>{
            setCLink(clink);
            setShowMenu(clink)
        }}  exact="true" className={(navData) => (navData.isActive ? "active_class" : 'none')} to ="/">Home </NavLink>
        <NavLink style={{textDecoration:"none"}}   onClick={()=>{
            setCLink(clink);
            setShowMenu(clink)
        }} exact="true" className={(navData) => (navData.isActive ? "active_class" : 'none')} to ="/About">About</NavLink>
        <NavLink style={{textDecoration:"none"}}  onClick={()=>{
            setCLink(clink);
            setShowMenu(clink)
        }}  className={(navData) => (navData.isActive ? "active_class" : 'none')} to ="/Project"> projects</NavLink> <NavLink style={{textDecoration:"none"}}  onClick={()=>{
            setCLink(clink);
            setShowMenu(clink)
        }}   className={(navData) => (navData.isActive ? "active_class" : 'none')} to ="/Skills"> Skills</NavLink>
       <NavLink style={{textDecoration:"none"}}  onClick={()=>{
            setCLink(clink);
            setShowMenu(clink)
        }}  className={(navData) => (navData.isActive ? "active_class" : 'none')} to ="/Contact"> Contact</NavLink>
        </div>
        <div className="social_media">
            <div className="social_media_desktop">
            <ul>
                <li >
                    <a  href="https://www.linkedin.com/in/siyaram-meena-437614212/"><FaLinkedin className="LinkedIn"/> </a>
                     </li> 
                     <li >
                    <a href="https://www.instagram.com/sr_meena69/"> <FaInstagram className="Instagram"/></a>
                     </li>
                      <li >
                    <a href="https://www.facebook.com/srmeena.kondli/"> <FaFacebook className="Facebook"/> </a>
                     </li>
            </ul>
            </div>
            <div className="hamburger-menu">
                <a href="# " onClick={()=>{
                     setShowMenu(!showMenu);
                   
                  
                    
                }

                }><GiHamburgerMenu/> </a>
            </div>
      
        </div>
      </div>
        
        </>
    )
}


export default Navbar;
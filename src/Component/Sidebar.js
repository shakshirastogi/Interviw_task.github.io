
import logo from '../images/logo.jpg';
import React from 'react'
import './Sidebar.css';
import Body from './Body';

export default function Sidebar() {
    return (
        <div className="main_div">
        <div className="sidenav">
         <img className="logo" src={logo}></img>
        <a href="#about"><i className="fa fa-user-o" /><br></br>Students</a>
        <a href="#services"> <i className="fa fa-book"/><br></br>Lesson plan</a>
        <a href="#clients"><i className="fa fa-cog"/><br></br>Settings</a>
        
        </div>
        <Body/>
    </div>

      
    )
}

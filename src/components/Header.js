import React from 'react'
import mailIcon  from './Email-icon.png';
import callIcon  from './call-icon.png';
import chatIcon  from './chat-icon.png';
import './Header.css'
function Header() {
    return (

        <div className="header">
        <div className="class1">
        <img src={callIcon} alt="logo"/>
         <p>Schedule a call or call us now</p>
        </div>
        <div className="class1">
        <img src={mailIcon} alt="logo"/>
         <p>Send us an email</p>
        </div>
         <div className="class1">
         <img src={chatIcon} alt="logo"/>
         <p>Live chat with us </p>
        </div>
         </div>
         
    )
}

export default Header

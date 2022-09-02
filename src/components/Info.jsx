import React from "react"
import logoImage from "../IMG_4644.JPG"
import mailLogo from "../images/email.png"
import linkedinLogo from "../images/linkedin.png"

export default function Info() {
    return(
        <div className="info">
            <img src={logoImage} alt="my image"/> 
            <h1>Vishal Tank</h1>
            <h2>Frontend develover</h2>
            <h3><a href="https://vishaltank.netlify.app">vishaltank.com</a></h3>
            <div className="buttons">
                <button className="mail"><img src={mailLogo} alt="" id="--info_logo"/> EMAIL</button>
                <button className="linkedin"><img src={linkedinLogo} alt="" id="--info_logo"/> LINKEDIN</button>
            </div>
        </div>
       
    )
}
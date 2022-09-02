import React from "react";
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import insta from "../images/instagram.png"
import git from "../images/github-sign.png"

export default function Footer(){
    return(
        <div className="footer">
            <a href=""><img src={twitter} alt="" /></a> 
            <a href=""><img src={facebook} alt="" /></a> 
            <a href=""><img src={insta} alt="" /></a> 
            <a href=""><img src={git} alt="" /></a> 
        </div>
    )
}
"use client";
import "../../styles/css/style.css";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
  return (
    <div className="nav-page">
      <div className="nav-container">
        <img src="/nav/esc.png" className="nav-image"></img>
        <div className="nav-title">To order please login or register</div>
        <div className="nav-buttons-container">
          <button className="nav-button" onClick={()=>{router.push('SignUp')}}>Sign up</button>
          <button className="nav-button" onClick={()=>{router.push('Login')}}>Log in</button>
        </div>
        <div className="nav-footer">
            <img src="/nav/Facebook.png" className="nav-footer-image"></img>
            <img src="/nav/Ellipse.png" className="nav-footer-image"></img>
            <img src="/nav/Group.png" className="nav-footer-google-image"></img>
        </div>
      </div>
    </div>
  );
}

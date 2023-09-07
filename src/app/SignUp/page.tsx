"use client";
import React, { useState } from "react";
import "../../styles/css/style.css";
import Calendar from "../Calendar/calendar";
export default function page() {
  const [isCalendarActive, setCalendarActive] = useState(false);
  const [year,setYear] = useState(2000)
  const [month,setMonth] = useState('August')
  const [day,setDay] = useState(21)

  const showCalendar = () => {
    setCalendarActive(true);
  };

  return (
    <div className="nav-page">
      <div className="nav-container">
        <img src="/nav/esc.png" className="nav-image"></img>
        <div className="nav-title">Sign up</div>
        <div className="login-buttons-container">
          <input className="login-button" placeholder="First name"></input>
          <input className="login-button" placeholder="Last name"></input>
          <input className="login-button" placeholder="Date of birth" />
          <img
            src="/nav/Calendar.png"
            className="calendar"
            onClick={() => {
              showCalendar();
            }}
          />
        </div>
        <button className="login-footer-btn">NEXT</button>
      </div>
      <Calendar active={isCalendarActive} setActive={setCalendarActive}>
        <div className="calendar-title">{month} {year}</div>
        <div className="calendar-line"></div>
        <div className="calendar-dates-container">
          <div className="calendar-date-row 1"></div>
          <div className="calendar-date-row 2"></div>
          <div className="calendar-date-row 3"></div>
          <div className="calendar-date-row 4"></div>
          <div className="calendar-date-row 3"></div>
          <div className="calendar-date-row 2"></div>
          <div className="calendar-date-row 1"></div>
        </div>
      </Calendar>
    </div>
  );
}

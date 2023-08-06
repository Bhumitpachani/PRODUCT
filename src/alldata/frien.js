import React from 'react'
import friens from "../image/dare2.jpg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';
import { useState } from 'react';


export default function Frien() {
    const [dianame, setDianame] = useState("");

    const handleNameChange = (event) => {
        setDianame(event.target.value);
    };

    const onHandleSubmit = () => {
        localStorage.setItem("sfr", JSON.stringify(dianame));
    };
    return (
        <div className=''>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={friens}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">Who is your true friend ?</p>
                    <p className="card__namess">"
                        Want to know who your true friend is ? Enter your name below and click the START GAME button

                        "</p>
                    <input
                        placeholder="ENTER YOUR FRIENDS NAME"
                        className="input"
                        value={dianame}
                        onChange={handleNameChange}
                    />

                    <Link to="/sfr">
                        <button onClick={onHandleSubmit} className="btn draw-border"><b>CALCULATE FRIEND</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
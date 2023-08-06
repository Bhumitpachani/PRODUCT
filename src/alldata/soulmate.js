import React from 'react'
import soulmates from "../image/sul mate.jpeg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';
import { useState } from 'react';


export default function Soulmate() {
    const [dianame, setDianame] = useState("");

    const handleNameChange = (event) => {
        setDianame(event.target.value);
    };

    const onHandleSubmit = () => {
        localStorage.setItem("solmate", JSON.stringify(dianame));
    };
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={soulmates}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">What Is The Name Of Your Soulmate?</p>
                    <p className="card__namess">"
                        Find out What Is The Name Of Your Soulmate According to your Name. and click on SUBMIT button.
                        "</p>
                    <input
                        placeholder="ENTER YOUR NAME"
                        className="input"
                        value={dianame}
                        onChange={handleNameChange}
                    />

                    <Link to="/somate">
                        <button onClick={onHandleSubmit} className="btn draw-border"><b>SUBMIT</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
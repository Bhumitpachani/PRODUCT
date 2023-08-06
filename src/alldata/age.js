import React from 'react'
import ages from "../image/mental-age-personality-test-compressed.jpg"
import { Link } from "react-router-dom";
import Navbar from '../navbar';
import { useState } from 'react';


export default function Age() {
    const [dianame, setDianame] = useState("");

    const handleNameChange = (event) => {
        setDianame(event.target.value);
    };

    const onHandleSubmit = () => {
        localStorage.setItem("age", JSON.stringify(dianame));
    };
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={ages}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">What is your Mental Age ?</p>
                    <p className="card__namess">"
                        Check out your Mental Age type your name below and click on Start button

                        "</p>
                    <input
                        placeholder="ENTER YOUR NAME"
                        className="input"
                        value={dianame}
                        onChange={handleNameChange}
                    />

                    <Link to="/sage">
                        <button onClick={onHandleSubmit} className="btn draw-border"><b>CALCULATE PERSON</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
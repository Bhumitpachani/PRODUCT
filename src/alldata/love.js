import React from 'react'
import loves from "../image/love-you.jpg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';
import { useState } from 'react';


export default function Love() {
    const [dianame, setDianame] = useState("");

    const handleNameChange = (event) => {
        setDianame(event.target.value);
    };

    const onHandleSubmit = () => {
        localStorage.setItem("you", JSON.stringify(dianame));
    };
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={loves}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">Who Loves You The Most?</p>
                    <p className="card__namess">
                        "
                        Do you want to know the Who Loves You The Most then type your name below and click on SUBMIT button....

                        "
                    </p>
                    <input
                        placeholder="ENTER YOUR NAME"
                        className="input"
                        value={dianame}
                        onChange={handleNameChange}
                    />

                    <Link to="/slove">
                        <button onClick={onHandleSubmit} className="btn draw-border"><b>CALCULATE LOVES</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
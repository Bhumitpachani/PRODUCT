import React from 'react'
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import trueloves from "../image/true love.png"
import { useState } from 'react';


export default function Truelove() {
    const [dianame, setDianame] = useState("");

    const handleNameChange = (event) => {
        setDianame(event.target.value);
    };

    const onHandleSubmit = () => {
        localStorage.setItem("stlove", JSON.stringify(dianame));
    };
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={trueloves}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__namess">Feelings Calculator Between You And Your Friends ?</p>
                    <p className="card__namess"> To find out type your name below and click SUBMIT button..</p>


                    <input
                        placeholder="ENTER YOUR NAME"
                        className="input"
                        value={dianame}
                        onChange={handleNameChange}
                    />

                    <Link to="/stlove">
                        <button onClick={onHandleSubmit} className="btn draw-border"><b>CALCULATE PERSON</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
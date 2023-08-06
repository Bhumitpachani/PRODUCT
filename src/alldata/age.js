import React from 'react'
import ages from "../image/mental-age-personality-test-compressed.jpg"
import { Link } from "react-router-dom";
import Navbar from '../navbar';

export default function age() {
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
                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/age">
                        <button className="btn draw-border"><b>CALCULATE MENTAL AGE</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
import React from 'react'
import crushs from "../image/crush.png"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';

export default function crush() {
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={crushs}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">What's Your Crush's Name?</p>
                    <p className="card__namess">"
                        According to your Name What's Your Crush's Name To Find out Type your name below and click on SUBMIT button..
                        "</p>
                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/crush">
                        <button className="btn draw-border"><b>SUBMIT</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
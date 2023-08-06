import React from 'react'
import soulmates from "../image/sul mate.jpg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';



export default function soulmate() {
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
                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/soulmate">
                        <button className="btn draw-border"><b>SUBMIT</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
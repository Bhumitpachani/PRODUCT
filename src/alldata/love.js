import React from 'react'
import loves from "../image/love-you.jpg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';

export default function love() {
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
                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/love">
                        <button className="btn draw-border"><b>CALCULATE LOVES</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
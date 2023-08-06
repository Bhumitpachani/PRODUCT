import React from 'react'
import names from "../image/name.jpg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';
export default function name() {
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={names}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">Find out the meaning of your name?</p>
                    <p className="card__namess">"
                        Do you want to know the real meaning of your name type your name below and click on SUBMIT button.
                        "</p>
                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/name">
                        <button className="btn draw-border"><b>SUBMIT</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
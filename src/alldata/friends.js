import React from 'react'
import '../index.css';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';
import friend from "../image/dare.jpeg"
export default function friends() {
    return (
        <>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={friend}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">DARE COMPLETE</p>
                    <p className="card__namess">"To Complete dare type your name and your Friend name below and click SUBMIT button...."</p>
                    <input placeholder='ENTER YOUR NAME' className="input"></input>
                    <input placeholder='ENTER YOUR FRIENDS NAME' className="input"></input>

                    <Link to="/friends">
                        <button className="btn draw-border"><b>SUMBIT</b></button>

                    </Link>
                </div>
            </div>
        </>
    )
}

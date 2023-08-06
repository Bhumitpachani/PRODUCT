import React from 'react'
import brahmas from "../image/Brahma.jpg"
import { Link } from "react-router-dom";
import Navbar from '../navbar';

export default function brahma() {
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={brahmas}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">Brahma Answers?</p>
                    <p className="card__namess">"
                        Think of your problem...
                        Ask Brahma a No.bet'n 1 - 720...
                        a Number comes to your mind...
                        That Number = Brahma Answer...
                        "</p>
                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/brahma">
                        <button className="btn draw-border"><b>SUBMIT</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

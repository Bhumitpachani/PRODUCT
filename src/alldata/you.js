import React from 'react'
import youu from "../image/type.png"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';

export default function you() {
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={youu}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">What Type Of Person Are You</p>
                    <p className="card__namess">
                        "
                        To find out type your name below and click SUBMIT button.
                        "
                    </p>
                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/you">
                        <button className="btn draw-border"><b>CALCULATE PERSON</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
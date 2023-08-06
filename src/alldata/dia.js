import React from 'react'
import dias from "../image/DIE.jpg"
import '../index.css';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../navbar';

export default function dia() {
    return (
        <>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={dias}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">When will you die?</p>
                    <p className="card__namess">"To find out type your name below and click SUBMIT button..."</p>
                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/dia">
                        <button className="btn draw-border"><b>SUBMIT</b></button>

                    </Link>

                </div>

            </div>
        </>
    )
}

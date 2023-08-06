import React, { useState } from 'react';
import dias from "../image/DIE.jpg";
import { Link } from "react-router-dom";
import Navbar from '../navbar';

export default function Dia() {
    const [dianame, setDianame] = useState("");

    const handleNameChange = (event) => {
        setDianame(event.target.value);
    };

    const onHandleSubmit = () => {
        localStorage.setItem("dianame", JSON.stringify(dianame));
    };

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
                    <input
                        placeholder="ENTER YOUR NAME"
                        className="input"
                        value={dianame}
                        onChange={handleNameChange}
                    />
                    <Link to="/daisend">
                        <button onClick={onHandleSubmit} className="btn draw-border"><b>SUBMIT</b></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

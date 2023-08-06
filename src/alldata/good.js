import React from 'react'
import { Link } from 'react-router-dom'
import goods from "../image/good.jpg"
import Navbar from '../navbar';
import { useState } from 'react';


export default function Good() {
    const [dianame, setDianame] = useState("");

    const handleNameChange = (event) => {
        setDianame(event.target.value);
    };

    const onHandleSubmit = () => {
        localStorage.setItem("good", JSON.stringify(dianame));
    };
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="card">
                    <img
                        src={goods}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">How good and bad you are ?</p>
                    <p className="card__name"> Do you want to know the Who good You The Most then type your name below and click on SUBMIT button.... </p>

                    <input
                        placeholder="ENTER YOUR NAME"
                        className="input"
                        value={dianame}
                        onChange={handleNameChange}
                    />

                    <Link to="/sgood">
                        <button onClick={onHandleSubmit} className="btn draw-border"><b>CALCULATE PERSON</b></button>

                    </Link>
                </div>
            </div>
        </div>
    )
}
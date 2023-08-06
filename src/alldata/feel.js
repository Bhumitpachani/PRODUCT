import React from 'react'
import feels from "../image/FEELINGS CALCULATR.jpeg"
import { Link } from 'react-router-dom'
import Navbar from '../navbar';
import { useState } from 'react';



export default function Feel() {
    const [dianame, setDianame] = useState("");

    const handleNameChange = (event) => {
        setDianame(event.target.value);
    };

    const onHandleSubmit = () => {
        localStorage.setItem("feel", JSON.stringify(dianame));
    };
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={feels}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names">Feelings Calculator Between You And Your Friends ?</p>
                    <p className="card__namess">"To find out type your name below and click SUBMIT button.."</p>


                    <input
                        placeholder="ENTER YOUR NAME"
                        className="input"
                        value={dianame}
                        onChange={handleNameChange}
                    />

                    <Link to="/sfeel">
                        <button onClick={onHandleSubmit} className="btn draw-border"><b>CALCULATE PERSON</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

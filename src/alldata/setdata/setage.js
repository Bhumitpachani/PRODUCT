import React from 'react'
import ages from "../../image/mental-age-personality-test-compressed.jpg"
import { Link } from "react-router-dom";
import Navbar from '../../navbar';
import { useState, useEffect } from 'react';

export default function Setage() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('age'));
        setState(frddata);
        console.log(frddata);
    }, []);


    function generateRandomNumber() {
        const min = 30;
        const max = 50;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const sendWhatsAppMessage = () => {
        const friendship = generateRandomNumber(30, 50);




        const message = `
*${state} Mental Age is :- ${friendship}🥶*  

Are you my best friend ?
check your mental age👇👇
bit.ly/3HWTeav 
        `;
        const encodedMessage = encodeURIComponent(message);
        window.open(`whatsapp://send?text=${encodedMessage}`);
    };
    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className="cards">
                    <img
                        src={ages}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names"><i><b>HELLO {state}</b></i></p>
                    <p className="card__namess">"
                        Check out your Mental Age type your name below and click on Start button

                        "</p>

                    <Link>
                        <button className="btn draw-border" onClick={sendWhatsAppMessage}><b>Send on WhatsApp</b></button>


                    </Link>

                </div>
            </div>
        </div>
    )
}

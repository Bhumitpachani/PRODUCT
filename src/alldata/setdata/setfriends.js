import React from 'react'
import friens from "../../image/dare2.jpg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../../navbar';
import { useState, useEffect } from 'react';

export default function Setfriends() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('sfr'));
        setState(frddata);
        console.log(frddata);
    }, []);

    const getRandomLetter = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet.charAt(randomIndex);
    };

    const sendWhatsAppMessage = () => {
        const randomLetter = getRandomLetter();

        const message = `
*${state}* According to your Name Your Best Friend Name Starts From  ❤️ *${randomLetter}* ❤️

Check Your Soulmate Name👇👇
bit.ly/3uU1O2A
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
                        src={friens}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names"><i><b>HELLO {state}</b></i></p>
                    <p className="card__namess">"
                        Want to know who your true friend is ? Enter your name below and click the START GAME button

                        "</p>


                    <Link>
                        <button onClick={sendWhatsAppMessage} className="btn draw-border"><b>Send on WhatsApp</b></button>


                    </Link>

                </div>
            </div>
        </div>
    )
}

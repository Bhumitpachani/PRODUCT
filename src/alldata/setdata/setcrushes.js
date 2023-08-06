import React from 'react'
import crushs from "../../image/crush.png"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../../navbar';
import { useState, useEffect } from 'react';

export default function Setcrushes() {

    const [state, setState] = useState([]);

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('crush'));
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
*${state}* According to your Name Your Crush Name Starts From  ❤️ *${randomLetter}* ❤️

Check Your Soulmate Name👇👇
bit.ly/3uU1O2A
    `;
        const encodedMessage = encodeURIComponent(message);
        window.open(`whatsapp://send?text=${encodedMessage}`);
    };

    return (
        <div>
            <div>
                <Navbar />
                <div className='datas'>
                    <div className="cards">
                        <img
                            src={crushs}
                            alt="Person"
                            className="card__images"
                        />
                        <p className="card__names"><i><b>HELLO {state}</b></i></p>
                        <p className="card__namess">"
                            To know the What's Your Crush's Name click on the Share on Whatsapp Status button below and put it as your WhatsApp Status. The result will appear on your WhatsApp Status....                            "</p>



                        <Link >
                            <button onClick={sendWhatsAppMessage} className="btn draw-border"><b>Send on WhatsApp</b></button>

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

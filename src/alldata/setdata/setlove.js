import React from 'react'
import loves from "../../image/love-you.jpeg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../../navbar';
import { useState, useEffect } from 'react';

export default function Setlove() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('you'));
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
*${state}* The ones who love you the most :- *'Your MOM AND DAD'* 💕 

 Find out Who loves you the most
👇🏼👇🏼
wisheszone.web.app

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
                        src={loves}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names"><i><b>HELLO {state}</b></i></p>
                    <p className="card__namess">
                        "
                        To know the Who Loves You The Most, click on the "Share on Whatsapp Status" button below and set it as your WhatsApp Status. The result will appear on your WhatsApp Status.....

                        "
                    </p>


                    <Link>
                        <button onClick={sendWhatsAppMessage} className="btn draw-border"><b>Send on WhatsApp</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

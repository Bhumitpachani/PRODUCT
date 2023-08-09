import React from 'react'
import feels from "../../image/FEELINGS CALCULATR.png"
import { Link } from 'react-router-dom'
import Navbar from '../../navbar';
import { useState, useEffect } from 'react';

export default function Setfeel() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('feel'));
        setState(frddata);
        console.log(frddata);
    }, []);


    function generateRandomNumber() {
        const min = 85;
        const max = 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const sendWhatsAppMessage = () => {
        const friendship = generateRandomNumber(85, 100);
        const love = generateRandomNumber(85, 100);
        const caring = generateRandomNumber(50, 100);
        const crazy = generateRandomNumber(85, 100);
        const cute = generateRandomNumber(50, 100);
        const cutee = generateRandomNumber(50, 100);



        const message = `
*_${state} Emotions_*

*Happiness:-${friendship}%*😂
*Sadness:-${love}%*😔
*Fear:-${caring}%*😖
*Disgust:-${crazy}%*🤮
*Anger:-${cute}%*😡
*Surprise:-${cutee}%*😱

Check Yours👇👇
wisheszonee.web.app
 
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
                        src={feels}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names"><i><b>HELLO {state}</b></i></p>
                    <p className="card__namess">"To know the What Kind Of Feelings You have? click on the "Share on Whatsapp Status" button below and put it as your WhatsApp Status. The result will appear on your WhatsApp Status....."</p>


                    <Link>
                        <button className="btn draw-border" onClick={sendWhatsAppMessage}><b>Send on WhatsApp</b></button>


                    </Link>

                </div>
            </div>
        </div>
    )
}

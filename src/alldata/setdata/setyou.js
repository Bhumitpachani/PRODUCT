import React from 'react'
import youu from "../../image/type.jpeg"
import { Outlet, Link } from "react-router-dom";
import Navbar from '../../navbar';
import { useState, useEffect } from 'react';

export default function Setyou() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('you'));
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
        const caring = generateRandomNumber(85, 100);
        const crazy = generateRandomNumber(85, 100);
        const cute = generateRandomNumber(85, 100);
        const cutee = generateRandomNumber(85, 100);



        const message = `
*_${state} Personality_* 
 
*loyal:-${friendship}*%😘
*Rich:-${love}%*😎
*Care:-${caring}%*🤗
*Cute:-${crazy}%*😊
*Anger:-${cute}%*😡
*Love:-${cutee}%*❤️

Check Yours👇👇
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
                        src={youu}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names"><i><b>HELLO {state}</b></i></p>
                    <p className="card__namess">
                        "
                        To know the What Kind Of Person Are You, click on the "Share on Whatsapp status" button below and set it as your WhatsApp Status. The result will appear on your WhatsApp Status......


                        Home About Us Privacy Policy Contact Us

                        "
                    </p>


                    <Link>
                        <button className="btn draw-border" onClick={sendWhatsAppMessage}><b>Send on WhatsApp</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import friend from "../../image/dare.jpeg";
import { Link } from 'react-router-dom';
import Navbar from '../../navbar';



export default function Setfriend() {


    const [state, setState] = useState([]);

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('frienddata'));
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


        const message = `
        *DARE COMPLETED*

        *_${state.name}_* and *_${state.fname}_*  

        *Friendship:-${friendship} %*🫂
        *Love:-${love} %*❤
        *Caring:-${caring} %*🤗
        *Crazy:-${crazy} %*🤪
        *Cute:-${cute} %*🥰
        
        Check Yours👇👇
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
                        src={friend}
                        alt="Persons"
                        className="card__images"
                    />
                    <p className="card__names">HELLO <b>{state.name}</b>  AND <b>{state.fname}</b></p>
                    <p className="card__namess">
                        "
                        To COMPLETE DARE, click on the "Share on Whatsapp status" button below and set it as your WhatsApp Status. The result will appear on your WhatsApp Status.....
                        "
                    </p>

                    <button className="btn draw-border" onClick={sendWhatsAppMessage}><b>Send on WhatsApp</b></button>
                </div>
            </div>
        </div>
    );
}

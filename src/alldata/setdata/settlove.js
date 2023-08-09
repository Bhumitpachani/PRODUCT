import React from 'react'
import Navbar from '../../navbar';
import { Link } from 'react-router-dom';
import trueloves from "../../image/true love.jpeg"
import { useEffect, useState } from 'react';


export default function Settlove() {

    const [dia, setDia] = useState("");

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('stlove'));
        setDia(frddata);
        console.log(frddata);
    }, []);

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const sendWhatsAppMessage = () => {
        const friendship = generateRandomNumber(1, 30);
        const love = generateRandomNumber(1, 12);
        const caring = generateRandomNumber(25, 30);

        const message = `
*${dia} You'll meet* 
*Your soulmate on:- ${friendship}/ ${love}/ ${caring}❤️*

This way Find out the
When Will You Meet 

Your True LOVE👇👇
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
                        src={trueloves}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__namess"><i><b>HELLO {dia}</b></i></p>
                    <p className="card__namess"> Click on the Share on Whatsapp Status button below to know and enter it as your WhatsApp status Your result will appear in your WHATSAPP STATUS..</p>




                    <Link>
                        <button className="btn draw-border" onClick={sendWhatsAppMessage}><b>Send on WhatsApp</b></button>


                    </Link>

                </div>
            </div>
        </div>
    )
}

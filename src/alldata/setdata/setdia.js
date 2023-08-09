import React, { useEffect, useState } from 'react';
import dias from "../../image/DIE.jpeg";
import '../../index.css';
import { Link } from "react-router-dom";
import Navbar from '../../navbar';

export default function Setdia() {
    const [dia, setDia] = useState("");

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('dianame'));
        setDia(frddata);
        console.log(frddata);
    }, []);

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const sendWhatsAppMessage = () => {
        const friendship = generateRandomNumber(1, 30);
        const love = generateRandomNumber(1, 12);
        const caring = generateRandomNumber(50, 70);

        const message = `
*${dia} Death Date:- ${friendship}/ ${love}/ ${caring}☠*

Find out When will you die👇👇
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
                        src={dias}
                        alt="Person"
                        className="card__images"
                    />
                    <p className="card__names"><i><b>HELLO {dia}</b></i></p>
                    <p className="card__namess">" To know the When will you die?, click on the "Share on Whatsapp status" button below and set it as your WhatsApp Status. The result will appear on your WhatsApp Status........"</p>
                    <Link>
                        <button className="btn draw-border" onClick={sendWhatsAppMessage}><b>Send on WhatsApp</b></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

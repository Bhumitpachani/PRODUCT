import React from 'react'
import { Link } from 'react-router-dom'
import goods from "../../image/good.jpg"
import Navbar from '../../navbar';
import { useState, useEffect } from 'react';


export default function Setgood() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const frddata = JSON.parse(localStorage.getItem('good'));
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
        const cuteee = generateRandomNumber(85, 100);




        const message = `
*_${state} व्यक्तित्व_*

*निष्ठा:-${friendship}%* 😘 
*धनी:-${love}%* 😎 
*बुद्धि:-${caring}%* 😊 
*देखभाल:-${crazy}%* 🤗 
*क्रोध:-${cute}%* 😡 
*मासूमियत:-${cutee}%* 😊
*प्यार:-${cuteee}%* ❤️

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
                <div className="card">
                    <img
                        src={goods}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name"><i><b>HELLO {state}</b></i></p>
                    <p className="card__name"> आप किस तरह के व्यक्ति हैं जानने के लिए नीचे दिए गए व्हाट्सएप स्टेटस पर शेयर करें बटन पर क्लिक करें और इसे अपने व्हाट्सएप स्टेटस के रूप में दर्ज करें आपका परिणाम आपके व्हाट्सएप स्टेटस में दिखाई देगा।.. </p>


                    <Link>
                        <button className="btn draw-border" onClick={sendWhatsAppMessage}><b>Send on WhatsApp</b></button>


                    </Link>
                </div>
            </div>
        </div>
    )
}

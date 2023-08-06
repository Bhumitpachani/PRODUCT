import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lives from '../image/live.jpg';
import Navbar from '../navbar';

export default function Live() {




    const handleShareOnWhatsApp = () => {


        const message = `
*IAM YOUR _____??*  
*Send Me Any 1 Heart Emoji Below*

❤ 💙 🧡 💛 💜 ❤‍🩹💗 ❤‍🔥 🖤 💝 🤍 💖

        `;
        const encodedMessage = encodeURIComponent(message);
        window.open(`whatsapp://send?text=${encodedMessage}`);
    };

    return (
        <div>
            <Navbar />
            <div className='datas'>
                <div className='cards'>
                    <img src={lives} alt='Person' className='card__images' />
                    <p className='card__names'>Click On The "Share on Whatsapp status" Button Below And Set It As Your WhatsApp Status.</p>
                    <button className='btn draw-border' onClick={handleShareOnWhatsApp}>
                        <b>SHARE ON WHATSAPP STATUS</b>
                    </button>

                    <p className='card__namess'>Then if someone sends you an emoji click the share result button below and send them the result</p>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../navbar';
import friend from '../image/dare.jpeg';

export default function Friends() {
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleFNameChange = (event) => {
        setFname(event.target.value);
    };

    const handleSubmit = () => {
        // Here, you can perform any action you want with the entered name and friend name.
        // For now, let's just log them to the console.
        console.log('Name:', name);
        console.log('Friend Name:', fname);

        const data = {
            name: name,
            fname: fname
        }

        localStorage.setItem("frienddata", JSON.stringify(data))


    };

    return (
        <>
            <Navbar />
            <div className="datas">
                <div className="cards">
                    <img src={friend} alt="Person" className="card__images" />
                    <p className="card__names">DARE COMPLETE</p>
                    <p className="card__namess">
                        "To Complete dare type your name and your Friend name below and click SUBMIT button...."
                    </p>
                    <input
                        placeholder="ENTER YOUR NAME"
                        className="input"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input
                        placeholder="ENTER YOUR FRIENDS NAME"
                        className="input"
                        value={fname}
                        onChange={handleFNameChange}
                    />

                    <Link to="/frnd">
                        <button onClick={handleSubmit} className="btn draw-border">
                            <b>SUBMIT</b>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

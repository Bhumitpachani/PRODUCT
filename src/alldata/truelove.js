import React from 'react'
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import trueloves from "../image/true love.png"


export default function truelove() {
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
                    <p className="card__namess">Feelings Calculator Between You And Your Friends ?</p>
                    <p className="card__namess"> To find out type your name below and click SUBMIT button..</p>


                    <input placeholder='ENTER YOUR NAME' className="input"></input>
                    <Link to="/truelove">
                        <button className="btn draw-border"><b>CALCULATE FRIENDS</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}
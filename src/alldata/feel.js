import React from 'react'
import feels from "../image/FEELINGS CALCULATR.jpeg"
import { Link } from 'react-router-dom'
import Navbar from '../navbar';



export default function feel() {
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
                    <p className="card__names">Feelings Calculator Between You And Your Friends ?</p>
                    <p className="card__namess">"To find out type your name below and click SUBMIT button.."</p>


                    <input placeholder='ENTER YOUR NAME' className="input"></input>
                    <Link to="/feel">
                        <button className="btn draw-border"><b>CALCULATE FRIENDS</b></button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

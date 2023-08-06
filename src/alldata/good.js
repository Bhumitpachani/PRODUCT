import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import goods from "../image/good.jpg"

export default function good() {
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
                    <p className="card__name">How good and bad you are ?</p>
                    <p className="card__name"> Do you want to know the Who good You The Most then type your name below and click on SUBMIT button.... </p>

                    <input placeholder='ENTER YOUR NAME' className="input"></input>

                    <Link to="/good">
                        <button className="btn draw-border"><b>CALCULATE GOOD BAD</b></button>

                    </Link>
                </div>
            </div>
        </div>
    )
}
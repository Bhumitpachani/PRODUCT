import React from 'react'
import "./index.css"
import friends from "./image/dare.jpeg"
import dia from "./image/DIE.jpg"
import live from "./image/live.jpg"
import soulmate from "./image/sul mate.jpg"
import crush from "./image/crush.png"
import name from "./image/name.jpg"
import you from "./image/type.png"
import frien from "./image/dare2.jpg"
import love from "./image/love-you.jpg"
import age from "./image/mental-age-personality-test-compressed.jpg"
import brahma from "./image/Brahma.jpg"
import feel from "./image/FEELINGS CALCULATR.jpeg"
import truelove from "./image/true love.png"
import here from "./image/hero.jpg"
import good from "./image/good.jpg"
import secret from "./image/secret.jpg"
import lity from "./image/ec9de9743a21adc30a3716cb91347c85.jpg"
import cartoon from "./image/cartoon.jpg"
import { Outlet, Link } from "react-router-dom";

export default function page1() {
    return (
        <div>
            <div className="datas">
                <div className="card">
                    <img
                        src={friends}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">DARE COMPLETE</p>
                    <Link to="/friends">
                        <button className="btn draw-border"><b>CALCULATE DARE</b></button>

                    </Link>
                </div>
                <div className="card">
                    <img
                        src={dia}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">When will you die?</p>
                    <Link to="/dia">
                        <button className="btn draw-border"><b>CALCULATE DIE</b></button>

                    </Link>

                </div>
                <div className="card">
                    <img
                        src={live}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">Where Should I Live?</p>
                    <Link to="/live">
                        <button className="btn draw-border"><b>CALCULATE LIVE</b></button>

                    </Link>

                </div>
                <div className="card">
                    <img
                        src={soulmate}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">What Is The Name Of Your Soulmate?</p>
                    <Link to="/soulmate">
                        <button className="btn draw-border"><b>CALCULATE SOULMATE</b></button>

                    </Link>

                </div>
                <div className="card">
                    <img
                        src={crush}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">What's Your Crush's Name?</p>
                    <Link to="/crush">
                        <button className="btn draw-border"><b>CALCULATE CRUSH</b></button>

                    </Link>

                </div>

                <div className="card">
                    <img
                        src={you}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">What Type Of Person Are You</p>
                    <Link to="/you">
                        <button className="btn draw-border"><b>CALCULATE PERSON</b></button>

                    </Link>

                </div>
                <div className="card">
                    <img
                        src={frien}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">Who is your true friend ?</p>
                    <Link to="/frien">
                        <button className="btn draw-border"><b>CALCULATE FRIEND</b></button>

                    </Link>

                </div>
                <div className="card">
                    <img
                        src={love}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">Who Loves You The Most?</p>
                    <Link to="/love">
                        <button className="btn draw-border"><b>CALCULATE LOVES</b></button>

                    </Link>

                </div>
                <div className="card">
                    <img
                        src={age}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">What is your Mental Age ?</p>
                    <Link to="/age">
                        <button className="btn draw-border"><b>CALCULATE MENTAL AGE</b></button>

                    </Link>

                </div>

                <div className="card">
                    <img
                        src={feel}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">Feelings Calculator Between You And Your Friends ?</p>
                    <Link to="/feel">
                        <button className="btn draw-border"><b>CALCULATE FRIENDS</b></button>

                    </Link>

                </div>
                <div className="card">
                    <img
                        src={truelove}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">When Will You Meet Your True LOVE?</p>
                    <Link to="/truelove">
                        <button className="btn draw-border"><b>CALCULATE MEET LOVE</b></button>

                    </Link>

                </div>

                <div className="card">
                    <img
                        src={good}
                        alt="Person"
                        className="card__image"
                    />
                    <p className="card__name">How good and bad you are ?</p>
                    <Link to="/good">
                        <button className="btn draw-border"><b>CALCULATE GOOD BAD</b></button>

                    </Link>

                </div>


            </div>


        </div>
    )
}

import React from 'react'
import {
    Link
} from "react-router-dom";

function Finish({user, score}) {
    return (
        <div className="finish">
            <div className="finish__other-wrapper">
                <div className="finish__inner-text">
                    <span className="finish__winner">{user} выйграл!!!</span> 
                    <span className="finish__score">со счетом {score}</span>
                    <Link to="/" >
                        <button className="finish__button">Перейти в меню</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Finish

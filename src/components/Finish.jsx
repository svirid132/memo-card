import React from 'react'
<<<<<<< HEAD
=======
import {
    Link
} from "react-router-dom";
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee

function Finish({user, score}) {
    return (
        <div className="finish">
            <div className="finish__other-wrapper">
                <div className="finish__inner-text">
                    <span className="finish__winner">{user} выйграл!!!</span> 
                    <span className="finish__score">со счетом {score}</span>
<<<<<<< HEAD
                    <button onClick={() => setTimeout(() => window.location.reload(), 0)} className="finish__button">Перейти в меню</button>
=======
                    <Link to="/" >
                        <button className="finish__button">Перейти в меню</button>
                    </Link>
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
                </div>
            </div>
        </div>
    )
}

export default Finish

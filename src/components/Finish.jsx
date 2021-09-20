import React from 'react'

function Finish({user, score}) {
    return (
        <div className="finish">
            <div className="finish__other-wrapper">
                <div className="finish__inner-text">
                    <span className="finish__winner">{user} выйграл!!!</span> 
                    <span className="finish__score">со счетом {score}</span>
                    <button onClick={() => setTimeout(() => window.location.reload(), 0)} className="finish__button">Перейти в меню</button>
                </div>
            </div>
        </div>
    )
}

export default Finish

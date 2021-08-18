import React from 'react'
import clsx from 'clsx'

function Status({users, currentUserIndex, score, lastPicture}) {

    const userElems = users?.map((user, index) => {
        return <StatusUser key={index} name={user.name}  score={user.score}  currentUser = {currentUserIndex === index ? true : null} />
    }); 

    return (
        <div className={clsx("status")}>
            <div className="status__wrapper">
                <h2 className="status__title">Статус игры</h2>
                <ul className="status__status">
                    { userElems }
                    <li className="status__left">{score.currentPoints} / {score.allPoints}</li>
                </ul>
                <li>{lastPicture}</li>
            </div>
        </div>
    )
}

function StatusUser({name, score, currentUser}) {
    return (
        <li className="status__user">
            <span className={clsx("status__name", currentUser ? "status__name--current": null)}>{name}</span>
            <span className={clsx("status__score", currentUser ? "status__score--current" : null)}>{score}</span>
        </li>
    );
}

export default Status

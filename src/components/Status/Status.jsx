import React from 'react'
import clsx from 'clsx'
import {useSelector} from "react-redux"
import {selectUsers, selectCurrentUserId, selectScores} from "./statusSlice"
import classNames from 'classnames'

function Status() {

    const users = useSelector(selectUsers);
    const currentUserId = useSelector(selectCurrentUserId);
    const scores = useSelector(selectScores);

    const userElems = users.map((user, index) => {
        return <StatusUser key={index} 
            name={user.name}  
            score={user.score}  
            currentUser = {user.id === currentUserId} 
        />
    }); 

    return (
        <div className={clsx("status")}>
            <div className="status__wrapper">
                <h2 className="status__title">Статус игры</h2>
                <ul className="status__status">
                    { userElems }
                    <li className="status__left">{scores.current} / {scores.total}</li>
                </ul>
            </div>
        </div>
    )
}



function StatusUser({name, score, currentUser}) {
    return (
        <li className="status__user">
            <span className={classNames("status__name", {"status__name--current": currentUser})}>{name}</span>
            <span className={classNames("status__score", {"status__score--current": currentUser})}>{score}</span>
        </li>
    );
}

export default Status

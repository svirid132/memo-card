import React from 'react'
import clsx from 'clsx'
<<<<<<< HEAD
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
=======

function Status({users, currentUserIndex, score, lastPicture}) {

    const userElems = users?.map((user, index) => {
        return <StatusUser key={index} name={user.name}  score={user.score}  currentUser = {currentUserIndex === index ? true : null} />
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
    }); 

    return (
        <div className={clsx("status")}>
            <div className="status__wrapper">
                <h2 className="status__title">Статус игры</h2>
                <ul className="status__status">
                    { userElems }
<<<<<<< HEAD
                    <li className="status__left">{scores.current} / {scores.total}</li>
                </ul>
=======
                    <li className="status__left">{score.currentPoints} / {score.allPoints}</li>
                </ul>
                <li>{lastPicture}</li>
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
            </div>
        </div>
    )
}

<<<<<<< HEAD


function StatusUser({name, score, currentUser}) {
    return (
        <li className="status__user">
            <span className={classNames("status__name", {"status__name--current": currentUser})}>{name}</span>
            <span className={classNames("status__score", {"status__score--current": currentUser})}>{score}</span>
=======
function StatusUser({name, score, currentUser}) {
    return (
        <li className="status__user">
            <span className={clsx("status__name", currentUser ? "status__name--current": null)}>{name}</span>
            <span className={clsx("status__score", currentUser ? "status__score--current" : null)}>{score}</span>
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
        </li>
    );
}

export default Status

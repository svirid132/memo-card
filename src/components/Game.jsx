import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Finish from './Finish';
import  Description from './Description';
import FieldGame from "./FieldGame/FieldGame";
import { FIELD_GAME_STATE, selectDescription, selectState, switchOnSelectState } from './FieldGame/fieldGameSlice';
import Status from "./Status/Status";
import { plusScore, selectScores, selectUsers, switchUser } from './Status/statusSlice';

function Game() {

    const dispatch = useDispatch();
    const fieldGameState = useSelector(selectState);
    const scores = useSelector(selectScores);
    const users = useSelector(selectUsers);
    const descriptionProps = useSelector(selectDescription);
    const viewDescription = (fieldGameState === FIELD_GAME_STATE.DESCRIPTION) && descriptionProps?.description;

    useEffect(() => {
        switch(fieldGameState) {
            case FIELD_GAME_STATE.MATCHING: {
                dispatch(plusScore());
                break;
            }
            case FIELD_GAME_STATE.RESET: {
                dispatch(switchUser());
                break;
            }
            default: {}
        }
    }, [fieldGameState, dispatch]);

    if (scores.current === scores.total) {
        const winnerUser = users.reduce((acca, user) => {
            if (acca.score < user.score) {
                return user;
            }
            return acca;
        }, {id: 0, name: "none", score: 0});
        return  <Finish user = {winnerUser.name} score = {winnerUser.score}/>;
    }
    return (
        <div>
            <FieldGame />
            <Status />
            {viewDescription && <Description {...descriptionProps} onClick={() => dispatch(switchOnSelectState())} />}
        </div>
    )
}

export default Game

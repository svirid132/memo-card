import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import { AUTHORIZATION, selectAuthorization } from '../components/Authorization/authorizationSlice';
import Game from '../components/Game';

function SwitcherGame() {

    const authorizationState = useSelector(selectAuthorization);

    if (authorizationState !== AUTHORIZATION.SUCCES) {
        return <Redirect to="/" />
    }

    return (
        <Game />
    );
}

export default SwitcherGame

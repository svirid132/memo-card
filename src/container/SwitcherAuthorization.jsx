import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import Authorization from '../components/Authorization/Authorization'
import { AUTHORIZATION, selectAuthorization, selectUsers } from '../components/Authorization/authorizationSlice';
import { setUsers } from '../components/Status/statusSlice';


function SwitcherAuthorization() {

    const authorizationState = useSelector(selectAuthorization);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    if (authorizationState === AUTHORIZATION.SUCCES) {
        dispatch(setUsers(users.map((user) => user.name)));
        return <Redirect to="/game" />
    }

    return (
        <Authorization />
    )
}

export default SwitcherAuthorization

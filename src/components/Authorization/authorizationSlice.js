import { createSlice } from "@reduxjs/toolkit";

export const AUTHORIZATION = {
    ERROR: "ERROR",
    WRITTING: "WRITTING",
    SUCCES: "SUCCES",
}

const initialState = {
    users: [
        {
            id: 1,
            name: "",
            isError: false, 
        }, 
        {
            id: 2,
            name: "",
            isError: false,
        }
    ],
    authorization: AUTHORIZATION.WRITTING,
};

export const authorizationSlice =  createSlice({
    name: "authorization",
    initialState,
    reducers: {
        setUser(state, action) {
            const {id, name} = action.payload;

            //Добавляем нового пользователя
            if (state.users.length < id) {
                const newUsers = state.users.slice();
                newUsers.push({
                    id, 
                    name,
                    isError: false,
                });
                state.users = newUsers;
                return;
            }

            //Изменяем cтарого пользователя
            state.users = state.users.map((user) => {
                if (id === user.id) {
                    return ({
                        id, 
                        name,
                        isError: false,
                    });
                }
                return ({
                    ...user,
                    isError: false,
                });
            });

            state.authorization = AUTHORIZATION.WRITTING;
        },
        removeUser(state, action) {
            const id = action.payload;
            state.users = state.users.filter((user) => user.id !== id);
        },
        authorization(state) {

            //check empty
            let error = false;
            const newUsers = state.users.map((user) => {
                if (user.name === "") {
                    error = true;
                    return ({
                        ...user,
                        isError: true,
                    })
                }
                return user;
            });
            if(error) {
                state.users = newUsers;
                state.authorization = AUTHORIZATION.ERROR;
                return;
            }

            //Check Duplicate
            const names = state.users.map((user) => user.name);
            const nameSet = new Set(names);
            if (nameSet.size !== state.users.length) {
                for (const userName of nameSet) {
                    let countName = {
                        userName,
                        count: 0,
                    };
                    state.users.forEach((user) => {
                        if (user.name === countName.userName) countName.count += 1;
                    });
                    if (countName.count > 1) {
                        state.users = state.users.map((user) => {
                            if (countName.userName === user.name) {
                                return ({
                                    ...user,
                                    isError: true,
                                });
                            }
                            return user;
                        });
                    }
                }
                state.authorization = AUTHORIZATION.ERROR;
                return;
            }

            state.authorization = AUTHORIZATION.SUCCES;
        }
    }
});

export const {setUser, removeUser, authorization} = authorizationSlice.actions;

export const selectUsers = (state) => state.authorization.users;
export const selectAuthorization = (state) => state.authorization.authorization;

export default authorizationSlice.reducer;
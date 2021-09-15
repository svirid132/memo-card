import authorizationReducer,{
    setUser, 
    removeUser, 
    authorization,
    AUTHORIZATION
} from "./authorizationSlice";

describe("authorization reducer", () => {
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
    describe("change user", () => {
        it("Change user", () => {
            const firstUser = {id: 1, name: "sasha", isError: false};
            const secondUser = {id: 2, name: "", isError: false};
            const actualUsers = authorizationReducer(initialState, setUser({id: 1, name: "sasha"}) ).users;
            expect(actualUsers).toEqual(
                [firstUser, secondUser]
            );
        });

        it("Change user with errors", () => {
            const firstUser = {id: 1, name: "sasha", isError: true};
            const secondUser = {id: 2, name: "sasha", isError: true};
            const threedUser = {id: 3, name: "vova", isError: false};
            
            const state = Object.assign({}, initialState);
            state.users = [firstUser, secondUser, threedUser];

            const actualUsers = authorizationReducer(state, setUser({id: 1, name: "sasha1"}) ).users;
            expect(actualUsers).toEqual(
                [{...firstUser, name: "sasha1", isError: false}, {...secondUser, isError: false}, threedUser]
            );
        });

    }); 

    describe("third user", () => {
        const firstUser = {id: 1, name: "", isError: false};
        const secondUser = {id: 2, name: "", isError: false};
        it("add", () => {
            const third = {id: 3, name: "", isError: false};
            const actualUsers = authorizationReducer(initialState, setUser({id: 3, name: ""}) ).users;
            expect(actualUsers).toEqual(
                [firstUser, secondUser, third]
            );
        });
        it("change", () => {
            const third = {id: 3, name: "thrid", isError: false};
            const actualUsers = authorizationReducer(initialState, setUser({id: 3, name: "thrid"}) ).users;
            expect(actualUsers).toEqual(
                [firstUser, secondUser, third]
            );
        })
        it("remove", () => {
            const third = {id: 3, name: "thrid", isError: false};
            const state = Object.assign({}, initialState);

            state.users.push(third);

            const actualUsers = authorizationReducer(state, removeUser(3)).users;
            expect(actualUsers).toEqual(
                [firstUser, secondUser]
            );
        });
    });

    describe("authorization", () => {

        it("succes authorization", () => {
            const firstUser = {id: 1, name: "sasha", isError: false};
            const secondUser = {id: 2, name: "vova", isError: false};
            
            const state = Object.assign({}, initialState);
            state.users = [firstUser, secondUser];

            const actualState = authorizationReducer(state, authorization());
            expect(actualState).toEqual(
                {
                    users: [firstUser, secondUser],
                    authorization: AUTHORIZATION.SUCCES,
                }
            );
        }); 

        it("error authorization on diplicate", () => {
            const firstUser = {id: 1, name: "sasha", isError: false};
            const secondUser = {id: 2, name: "sasha", isError: false};
            const threedUser = {id: 3, name: "vova", isError: false};
            
            const state = Object.assign({}, initialState);
            state.users = [firstUser, secondUser, threedUser];

            const actualState = authorizationReducer(state, authorization());
            expect(actualState).toEqual(
                {
                    users: [{...firstUser, isError: true}, {...secondUser, isError: true}, threedUser],
                    authorization: AUTHORIZATION.ERROR,
                }
            );
        }); 

        it("error authorization on empty", () => {
            const firstUser = {id: 1, name: "", isError: false};
            const secondUser = {id: 2, name: "sasha", isError: false};
            const threedUser = {id: 3, name: "vova", isError: false};
            
            const state = Object.assign({}, initialState);
            state.users = [firstUser, secondUser, threedUser];

            const actualState = authorizationReducer(state, authorization());
            expect(actualState).toEqual(
                {
                    users: [{...firstUser, isError: true}, {...secondUser}, threedUser],
                    authorization: AUTHORIZATION.ERROR,
                }
            );
        }); 
    });
});
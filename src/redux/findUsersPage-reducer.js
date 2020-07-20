const CHANGE_SUBSCRIBE = 'CHANGE-SUBSCRIBE'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: []
}

window.users = initialState.users
const findUsersReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === Number(action.id)) {
                            return {...u, followed: !u.followed}
                        }
                        return u
                    }
                )
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.array]

            }
        default:
            return state
    }
}

export default findUsersReducers

export const changeSubscribeAction = (id) => ({type: CHANGE_SUBSCRIBE, id: id})
export const setUserAction = (array) => ({type: SET_USERS, array: array})

/*
let initialState = {
    users: [
        {
            id: 0,
            name: 'Anton',
            secondName: 'Popper',
            isFriend: true,
            country: 'Belarus',
            city: 'Minsk',
            status: 'Hello'
        },
        {
            id: 1,
            name: 'Anna',
            secondName: 'Popper',
            isFriend: false,
            country: 'Belarus',
            city: 'Minsk',
            status: 'Im glad'
        },
        {
            id: 2,
            name: 'Victor',
            secondName: 'Popper',
            isFriend: false,
            country: 'Belarus',
            city: 'Minsk',
            status: 'So, see you later'
        }
    ]
}*/

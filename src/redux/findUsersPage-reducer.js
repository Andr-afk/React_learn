const CHANGE_SUBSCRIBE = 'CHANGE-SUBSCRIBE'

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
}

window.users = initialState.users
const findUsersReducers = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case CHANGE_SUBSCRIBE:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === Number(action.id)) {
                            return {...u, isFriend: !u.isFriend}
                        }
                        return u
                    }
                )
            }
        default:
            return state
//should be state_copy
    }
}

export default findUsersReducers

export const changeSubscribeAction = (id) => ({type: CHANGE_SUBSCRIBE, id: id})

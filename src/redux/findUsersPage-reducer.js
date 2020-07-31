import {usersAPI} from "../api/api";

const CHANGE_SUBSCRIBE = 'CHANGE-SUBSCRIBE'
const SET_USERS = 'SET-USERS'
const SET_PAGES = 'SET-PAGES'
const CHANGE_PAGES = 'CHANGE-PAGES'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

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
        case SET_PAGES:
            return {
                ...state,
                usersCount: action.usersCount,
                pageSize: action.pageSize
            }
        case CHANGE_PAGES:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return (
                {
                    ...state,
                    isFetching: action.isFetching
                }
            )
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.followingProgress
                    ? [...state.followingProgress, action.userID]
                    : state.followingProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export default findUsersReducers


export const changeSubscribe = (id) => ({type: CHANGE_SUBSCRIBE, id: id})
export const setUser = (array) => ({type: SET_USERS, array: array})
export const setUserPages = (usersCount, pageSize) => ({type: SET_PAGES, usersCount, pageSize})
export const changePages = (currentPage) => ({type: CHANGE_PAGES, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (userID, followingProgress) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    followingProgress,
    userID
})

// thunks

export const getUsersThunkCreator = (pageSize, pageNumber)=>{
    return (dispatch)=>{
        dispatch(toggleIsFetching(true))
        dispatch(changePages(pageNumber))

        usersAPI.getUsers(pageSize, pageNumber)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUser(data.items))
                dispatch(setUserPages(data.totalCount, pageSize))

            })
    }
}

export const followToUserThunkCreator = (userID)=>{

    return (dispatch)=>{
        dispatch(toggleFollowingProgress(userID,true))
        dispatch(toggleIsFetching(userID))

        usersAPI.FollowToUser(userID)
            .then(data => {
                if (data.resultCode === 0) dispatch(changeSubscribe(userID))
                else console.log(data.messages)

                dispatch(toggleFollowingProgress(userID,false))
                dispatch(toggleIsFetching(false))
            })
            .catch(error=>{
                dispatch(toggleFollowingProgress(userID,false))
                dispatch(toggleIsFetching(false))

                console.log(error)
            })
    }

}

export const unfollowFromUserThunkCreator = (userID)=>{
    return (dispatch)=>{
        userID = Number(userID)

        dispatch(toggleFollowingProgress(userID, true))
        dispatch(toggleIsFetching(true))


        usersAPI.UnfollowFromUser(userID)
            .then(data => {
                if (data.resultCode === 0)dispatch(changeSubscribe(userID))
                else console.log(data.messages)

                dispatch(toggleFollowingProgress(userID,false))
                dispatch(toggleIsFetching(false))
            })
            .catch(error => {
                dispatch(toggleFollowingProgress(userID,false))
                dispatch(toggleIsFetching(false))

                console.log(error)
            })
    }
}


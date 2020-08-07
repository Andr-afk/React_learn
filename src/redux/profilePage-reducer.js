import {profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'
const SET_PROFILE = 'GET-PROFILE'
const SET_STATUS = 'SET-STATUS'


let initialState = {
    posts: [],
    newPostText: "",
    profile: null,
    status: null
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 4,
                image: "https://avatars.mds.yandex.net/get-pdb/788379/a5ec9e90-5b8f-4888-8c46-ad5ead630338/s1200?webp=false",
                message: state.newPostText,
                count_like: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, post]
            }
        case UPDATE_TEXT_POST:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.response

            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export default profileReducer


export const addPost = () => ({type: ADD_POST})
export const updateTextPost = (text) => ({type: UPDATE_TEXT_POST, text})
export const setProfile = (response) => ({type: SET_PROFILE, response})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfileThunkCreator = (userID) => {
    userID = Number(userID)

    return (dispatch) => {
        profileAPI.loadProfile(userID)
            .then(data => {
                dispatch(setProfile(data))
            })
        profileAPI.loadStatus(userID)
            .then(data => {
                dispatch(setStatus(data))
            })


    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) dispatch(setStatus(status))
            })
    }
}



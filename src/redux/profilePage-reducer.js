import {profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'GET-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE_POST'


let initialState = {
    posts: [],
    profile: null,
    status: null
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 4,
                image: "https://avatars.mds.yandex.net/get-pdb/788379/a5ec9e90-5b8f-4888-8c46-ad5ead630338/s1200?webp=false",
                message: action.text,
                count_like: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, post]
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
        case DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter((item)=> item.id !== action.postID)
            }
        default:
            return state
    }
}

export default profileReducer


export const addPost = (text) => ({type: ADD_POST, text})
export const setProfile = (response) => ({type: SET_PROFILE, response})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postID)=>({type:DELETE_POST, postID})


export const getProfileThunkCreator = (userID) => {
    userID = Number(userID)

    return async (dispatch) => {
        const [profileData, statusData] = await Promise.all([profileAPI.loadProfile(userID), profileAPI.loadStatus(userID)])
        dispatch(setProfile(profileData))
        dispatch(setStatus(statusData))
    }
}

export const updateStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const statusData = await profileAPI.updateStatus(status)
        if(statusData.resultCode === 0) dispatch(setStatus(status))
    }
}



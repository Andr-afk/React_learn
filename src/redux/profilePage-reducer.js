import {profileAPI} from "../api/api";
import {toggleIsFetching} from "./findUsersPage-reducer";
import {stopSubmit} from "redux-form";


const ADD_POST_SUCCESS = 'ADD-POST'
const SET_PROFILE_SUCCESS = 'GET-PROFILE'
const SET_STATUS_SUCCESS = 'SET-STATUS'
const DELETE_POST_SUCCESS = 'DELETE_POST'
const UPLOAD_PHOTO_SUCCESS = "UPLOAD-PHOTO"
const UPLOAD_ABOUT_ME_SUCCESS = "UPLOAD-ABOUT-ME-SUCCESS"


let initialState = {
    posts: [],
    profile: null,
    status: null,
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST_SUCCESS:
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

        case SET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.response

            }
        case SET_STATUS_SUCCESS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter((item) => item.id !== action.postID)
            }
        case UPLOAD_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {...state.profile.photos, small: action.photo_file[0], large: action.photo_file[1]}
                }
            }
        case UPLOAD_ABOUT_ME_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    fullName: action.object_data.fullName,
                    aboutMe: action.object_data.aboutMe,
                    lookingForAJob: action.object_data.lookingForAJob,
                    lookingForAJobDescription: action.object_data.lookingForAJobDescription,
                    contacts: {
                        ...state.profile.contacts,
                        facebook: action.object_data.facebook,
                        website: action.object_data.website,
                        vk: action.object_data.vk,
                        twitter: action.object_data.twitter,
                        instagram: action.object_data.instagram,
                        youtube: action.object_data.youtube,
                        github: action.object_data.github,
                        mainLink: action.object_data.mainLink
                    }

                }
            }
        default:
            return state
    }
}

export default profileReducer


export const addPost = (text) => ({type: ADD_POST_SUCCESS, text})
export const setProfile = (response) => ({type: SET_PROFILE_SUCCESS, response})
export const setStatus = (status) => ({type: SET_STATUS_SUCCESS, status})
export const deletePost = (postID) => ({type: DELETE_POST_SUCCESS, postID})
export const uploadPhotoSuccess = (photo_file) => ({type: UPLOAD_PHOTO_SUCCESS, photo_file})
export const uploadAboutMeSuccess = (object_data) => ({type: UPLOAD_ABOUT_ME_SUCCESS, object_data})


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
        if (statusData.resultCode === 0) dispatch(setStatus(status))
    }
}

export const uploadPhotoThunkCreator = (photo_file) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const data = await profileAPI.uploadPhoto(photo_file)

        if (data.resultCode === 0) {
            dispatch(uploadPhotoSuccess([data.data.photos.small, data.data.photos.large]))
            dispatch(toggleIsFetching(false))
        } else {
            console.warn(data.messages)
        }
    }
}


export const uploadAboutMeThunkCreator = (object_data) => {
    return async (dispatch, getState) => {
        try {
            const userID = getState().ProfilePage.profile.userId
            object_data["userId"] = userID

            const data = await profileAPI.uploadAboutMe(object_data)
            if (data.resultCode === 0) {
                dispatch(uploadAboutMeSuccess(object_data))
                dispatch(getProfileThunkCreator(userID))
            } else {
                const object = error_for_input(data.messages)

                dispatch(stopSubmit("about_me", object))
                console.error(data.messages)
            }
        } catch (error) {
            console.log(error)
        }


    }
}


function error_for_input(messages) {
    let object = {contacts:{}}

    for (let message of messages){
        const positionContacts = message.search(/Contacts->/)

        if (positionContacts !== -1) {
            const start = message.search(/>/) + 1
            const problem_place = message.slice(start, -1).toLowerCase()

            object.contacts[problem_place] = message.slice(0, positionContacts - 1)
            // return {"contacts": {[result]: message.slice(0, positionContacts - 1)}}
        }
    }
    return object

}
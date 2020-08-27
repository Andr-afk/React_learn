import {AuthAPI, profileAPI, securityAPI} from "../api/api"
import default_avatar from "../assets/images/default_avatar.png"
import {stopSubmit} from "redux-form";


const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA"
const SET_IMAGES_USERS = "SET-IMAGES-USERS"
const SET_AUTH_STATE = "SET-AUTH-STATE"
const SET_CAPTCHA_SUCCESS = "SET-CAPTCHA-SUCCESS"
const DELETE_CAPTCHA = "DELETE-CAPTCHA"


let initial_state = {
    userID: null,
    login: null,
    email: null,
    img: null,
    isFetching: false,
    isAuth: false,
    captchaURL: null
}

const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                userID: action.authData.id,
                login: action.authData.login,
                email: action.authData.email,
            }
        case SET_IMAGES_USERS:
            return {
                ...state,
                img: action.img,
                isFetching: false
            }
        case SET_AUTH_STATE:
            return {
                ...state,
                isAuth: action.status
            }
        case SET_CAPTCHA_SUCCESS:
            return {
                ...state,
                captchaURL: action.url
            }
        case DELETE_CAPTCHA:
            return {
                ...state,
                captchaURL: null
            }
        default:
            return state
    }
}

export const setAuthUserData = (authData) => ({type: SET_AUTH_USER_DATA, authData})
export const setImagesUsers = (img) => ({type: SET_IMAGES_USERS, img})
export const setAuthState = (status) => ({type: SET_AUTH_STATE, status})
export const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_SUCCESS, url})
export const deleteCaptchaUrl = () => ({type: DELETE_CAPTCHA})


export default authReducer

export const authMeThunkCreator = () => {
    return async (dispatch) => {
        const authData = await AuthAPI.authMe()
        if (authData.resultCode === 0) {
            const profileData = await profileAPI.loadProfile(authData.data.id)
            dispatch(setAuthState(true))
            dispatch(setAuthUserData(authData.data))

            const image_source = profileData.photos.small || default_avatar
            dispatch(setImagesUsers(image_source))

            return true
        }


    }
}

export const loginMeThunkCreator = (authData) => {
    const login = authData.login
    const pass = authData.password
    const rememberMe = authData.rememberMe
    const captcha = authData.captcha

    return async (dispatch) => {
        const loginData = await AuthAPI.loginMe(login, pass, rememberMe, captcha)

        if (loginData.resultCode === 0) {
            dispatch(setAuthState(true))
            dispatch(deleteCaptchaUrl())
            dispatch(authMeThunkCreator())
            //true for redirect to profile
            return true
        } else {
            if (loginData.resultCode === 10) {
                dispatch(getCaptchaURLThunkCreator())
            } else if (loginData.resultCode !== 10) {
                dispatch(deleteCaptchaUrl())
            }
            const action = stopSubmit("login", {_error: loginData.messages[0]})
            dispatch(action)
        }

    }
}

export const logoutMeThunkCreator = () => async (dispatch) => {
    const logoutData = await AuthAPI.logoutMe()

    if (logoutData.resultCode === 0) {
        dispatch(setAuthState(false))
        dispatch(authMeThunkCreator())
    }
}

export const getCaptchaURLThunkCreator = () => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptchaURL()
        dispatch(setCaptchaUrl(data.url))
    }
}

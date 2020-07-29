const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA"
const SET_IMAGES_USERS = "SET-IMAGES-USERS"


let initial_state = {
    userID: null,
    login: null,
    email: null,
    img: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state=initial_state, action)=>{
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        return {
            ...state,
            userID: action.authData.id,
            login: action.authData.login,
            email: action.authData.email,
            isAuth: true
        }
        case SET_IMAGES_USERS:
            return{
                ...state,
                img: action.img,
                isFetching: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (authData)=>({type:SET_AUTH_USER_DATA, authData})
export const setImagesUsers = (img)=>({type:SET_IMAGES_USERS, img})

export default authReducer


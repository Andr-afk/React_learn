import {authMeThunkCreator} from "./auth-reducer";

const INITIALIZE_STATUS =  "INITIALIZE-STATUS"


const initial_state = {
    initialized: false
}

const appReducer = (state=initial_state, action)=>{
    switch (action.type){
        case INITIALIZE_STATUS:
            return{
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export default appReducer

const initializeUser = ()=>({type:INITIALIZE_STATUS})


export const initializeUserThunk = ()=>(dispatch)=>{
    dispatch(authMeThunkCreator())
        .then(()=>{
            dispatch(initializeUser())
        })
}
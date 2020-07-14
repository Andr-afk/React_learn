import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import navReducer from "./NavPage-reducer";


let reducers = combineReducers({ //здесь мы создаем state
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    NavPage: navReducer
})

let store = createStore(reducers)
window.store = store
window.reducers = reducers

export default store

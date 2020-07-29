import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import navReducer from "./NavPage-reducer";
import findUsersReducers from "./findUsersPage-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({ //здесь мы создаем state
    auth: authReducer,
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    NavPage: navReducer,
    FindUsersPage: findUsersReducers
})

let store = createStore(reducers)

window.state = store.getState()
window.store = store

export default store

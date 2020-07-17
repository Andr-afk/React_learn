import {combineReducers, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import navReducer from "./NavPage-reducer";
import findUsersReducers from "./findUsersPage-reducer";


let reducers = combineReducers({ //здесь мы создаем state
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    NavPage: navReducer,
    FindUsersPage: findUsersReducers
})

let store = createStore(reducers)
window.store = store
window.reducers = reducers

export default store

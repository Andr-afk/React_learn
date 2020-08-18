import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogsPage-reducer";
import navReducer from "./NavPage-reducer";
import findUsersReducers from "./findUsersPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer";



let reducers = combineReducers({ //здесь мы создаем state
    auth: authReducer,
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    NavPage: navReducer,
    FindUsersPage: findUsersReducers,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)))



export default store

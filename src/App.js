import React, {Suspense, useEffect} from 'react'; // если директория не указывается, значит импортируется из node_modules
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import NavContainer from './components/Nav/NavContainer';
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login"
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeUserThunk} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const FindUsersContainer = React.lazy(() => import("./components/FindUsers/FindUsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let mapDispatchToProps = {
    initializeUser: initializeUserThunk
}


const App = ({initialized, initializeUser}) => {
    useEffect(() => {
        if (!initialized) initializeUser()

    }, [initialized])

    if (!initialized) return <Preloader/>

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavContainer/>
            <Suspense fallback={<Preloader/>}>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/find_users" render={() => <FindUsersContainer/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </Suspense>
            <footer>Something text in the end</footer>
        </div>
    )
}

const AppContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App)


const EnterPoint = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )

}

export default EnterPoint
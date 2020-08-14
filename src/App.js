import React, {useEffect} from 'react'; // если директория не указывается, значит импортируется из node_modules
import './App.css';
import {Route, withRouter} from "react-router-dom";
import NavContainer from './components/Nav/NavContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login"
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeUserThunk} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let mapDispatchToProps = {
    initializeUser: initializeUserThunk
}


const App = (props) => {
    useEffect(() => {
        if (!props.initialized) props.initializeUser()

    }, [props.initialized])

    if (!props.initialized) return <Preloader/>

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavContainer/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/find_users" render={() => <FindUsersContainer/>}/>
                <Route path="/login" render={() => <LoginContainer/>}/>
            </div>

            <footer>Something text in the end</footer>
        </div>
    )
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)


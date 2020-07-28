import React from 'react'; // если директория не указывается, значит импортируется из node_modules
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


// Роуты всегда смотрят на URl, им не требутеся перезагрузка

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavContainer />
                <div className="app-wrapper-content">
                    <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/find_users" render={()=> <FindUsersContainer/>}/>
                </div>
                <footer>Something text in the end</footer>
            </div>
        </BrowserRouter>
    )
}

export default App


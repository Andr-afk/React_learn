import React from 'react'; // если директория не указывается, значит импортируется из node_modules
import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


// Роуты всегда смотрят на URl, им не требутеся перезагрузка

const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav NavPage={props.store.getState().NavPage}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App


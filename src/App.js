import React from 'react'; // если директория не указывается, значит импортируется из node_modules
import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

{/*Роуты всегда смотрят на URl, им не требутеся перезагрузка*/}

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile dataPost={props.dataPost}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dataDialogs={props.dataDialogs} dataMessages={props.dataMessages}/>}/>
                    <Route path="/news" render={()=><News/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                    <Route path="/settings" render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


export let renderTree = (state, methods)=>{
    ReactDOM.render(
        <App state={state} addPost={methods}/>,
        document.getElementById('root')
    );

    serviceWorker.unregister();
}

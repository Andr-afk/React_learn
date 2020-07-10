import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";


let renderTree = (state) => {
debugger;
    ReactDOM.render(
        <App state={state}
             // addPost={store.addPost.bind(store)}
             // UpdateTextPost={store.UpdateTextPost.bind(store)}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );

    serviceWorker.unregister();
}

renderTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    renderTree(state)
}) // subscribe dont deliver data in default, we using anonymous function


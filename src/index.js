import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";


let renderTree = () => {
debugger;
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );

    serviceWorker.unregister();
}

renderTree(store.getState())

store.subscribe(()=>{
    renderTree()
}) // subscribe dont deliver data in default, we using anonymous function


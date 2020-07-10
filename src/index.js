import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";


let renderTree = (state) => {
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

renderTree(store.get_state)

store.subscribe = renderTree


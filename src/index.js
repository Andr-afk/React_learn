import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import EnterPoint from "./App";

ReactDOM.render(
    <EnterPoint/>,
    document.getElementById('root')
);
serviceWorker.unregister();



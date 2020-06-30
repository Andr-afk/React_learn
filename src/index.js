import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {
        id: 0,
        image: "https://wallbox.ru/resize/2560x1600/wallpapers/main/201546/13dcd7162ea7a31.jpg",
        message: "I sad you go to fuck yourself",
        count_like: 30
    },
    {
        id: 1,
        image: "https://avatars.mds.yandex.net/get-pdb/1875351/75fa2b62-7fd3-4985-9283-2e719f4fbf48/s1200?webp=false",
        message: "Hello, how are you",
        count_like: 20
    },
    {
        id: 2,
        image: "https://img2.goodfon.ru/original/3200x1200/b/46/koshka-vzglyad-glaza-eda.jpg",
        message: "White and black lives matter, sometimes!",
        count_like: 10
    },
    {
        id: 3,
        image: "https://avatars.mds.yandex.net/get-pdb/788379/a5ec9e90-5b8f-4888-8c46-ad5ead630338/s1200?webp=false",
        message: "Hey! Whatsup?",
        count_like: 30
    },
]
let dialogs = [
    {id: 0, name: "Dimych"},
    {id: 1, name: "Aleksandr"},
    {id: 2, name: "Valera"},
    {id: 3, name: "Anna"},
    {id: 4, name: "Vika"},
    {id: 5, name: "Andrey"},
]
let messages = [
    {id: 0, message: "If you see it, data was moved successfully"},
    {id: 1, message: "He"},
    {id: 2, message: "Hg"},
    {id: 3, message: "Hh"},
    {id: 4, message: "Hf"},
    {id: 5, message: "Him"},
]

ReactDOM.render(
    <App dataPost={posts} dataDialogs={dialogs} dataMessages={messages}/>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

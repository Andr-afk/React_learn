import React from 'react'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {


    // in container component we work with dispatch
    let OnAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let OnChangeTextPost = (text) => {
        props.store.dispatch(updateTextPostActionCreator(text))
    }


    return <MyPosts
        addPost={OnAddPost}
        updateTextPost={OnChangeTextPost}
        ProfilePage={props.store.getState().ProfilePage}
    />

}

export default MyPostsContainer


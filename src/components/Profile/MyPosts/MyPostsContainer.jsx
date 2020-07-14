import React from 'react'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state)=>({ProfilePage: state.ProfilePage})
let mapDispatchToProps = (dispatch)=>({
    updateTextPost: (text)=>{
        dispatch(updateTextPostActionCreator(text))
    },
    addPost: ()=>{
        dispatch(addPostActionCreator())
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer

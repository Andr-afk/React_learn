import React from "react";
import {addPost} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {clearForm} from "../../common/FormController/helperForForms";


let mapStateToProps = (state) => ({
    posts: state.ProfilePage.posts
})

let mapDispatchToProps = (dispatch) => ({
    addPost: (text)=>{dispatch(addPost(text))},
    clearForm: (formName)=>{dispatch(clearForm(formName))}
})


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MyPosts))


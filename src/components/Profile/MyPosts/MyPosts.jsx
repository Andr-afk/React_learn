import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utilits/validators";
import {Textarea} from "../../common/FormController/FormController"


const MyPosts = props => {

    let post_elements = props.posts.map(post => (
        <Post message={post.message} image={post.image} count_like={post.count_like} key={post.id}/>))


    const onSubmit = (formData) => {
        props.addPost(formData.PostText)
        props.clearForm('add_post')
    }

    return (
        <div>
            <span>MyPosts</span>
            <MyPostFormRedux onSubmit={onSubmit}/>
            <div className={classes.posts}>
                {post_elements}
            </div>
        </div>
    )
}


export default React.memo(MyPosts)


const maxLength100 = maxLength(100)

const MyPostForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='PostText' component={Textarea} validate={[required, maxLength100]} placeholder='text11111'/>
            <button>Add Post</button>
        </form>
    )
}


const MyPostFormRedux = reduxForm({form: 'add_post'})(MyPostForm)





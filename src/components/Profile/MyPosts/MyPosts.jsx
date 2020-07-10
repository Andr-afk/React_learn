import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profilePage-reducer";


const MyPosts = (props) => {

    let post_elements = props.ProfilePage.posts.map(post => (
        <Post message={post.message} image={post.image} count_like={post.count_like}/>))


    let newPostElement = React.createRef()


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }


    let changeTextPost = (e) => {
        let text = e.target.value
        props.dispatch(updateTextPostActionCreator(text))
    }


    return (
        <div>
            MyPosts
            <div>
                <textarea onChange={changeTextPost}
                          value={props.ProfilePage.newPostText}
                          placeholder="hello"/>
                <button onClick={addPost}>Send</button>
            </div>
            <div className={classes.posts}>
                {/*<Post message={posts[0].message}
                      image={posts[0].image}
                      count_like={posts[0].count_like}/>*/}
                {post_elements}
            </div>
        </div>
    )
}

export default MyPosts





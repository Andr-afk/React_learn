import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'


const MyPosts = (props) => {

    let post_elements = props.ProfilePage.posts.map(post => (
        <Post message={post.message} image={post.image} count_like={post.count_like} key={post.id}/>))
    
    let addPost = () => {
        props.addPost()
    }

    let changeTextPost = (e) => {
        let text = e.target.value
        props.updateTextPost(text)
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





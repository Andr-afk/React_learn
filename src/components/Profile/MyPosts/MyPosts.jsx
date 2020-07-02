import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
    //debugger;
    let post_elements = props.posts.map(post=>(<Post message={post.message} image={post.image} count_like={post.count_like}/>))
    return (
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Send</button>
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





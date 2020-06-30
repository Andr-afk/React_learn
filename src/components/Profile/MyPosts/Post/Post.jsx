import React from 'react'
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div >
            <span className={classes.image}><img src={props.image} alt='ava'/></span>
            <span className={classes.item}>{props.message}</span>
            <span className={classes.like}>Like {props.count_like}</span>
        </div>
    )
}

export default Post

import {addPost} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state)=>({
    posts: state.ProfilePage.posts,
    newPostText: state.ProfilePage.newPostText
})

let mapDispatchToProps = ({
    addPost
})


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer


import {addPost, updateTextPost} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state)=>({ProfilePage: state.ProfilePage})

let mapDispatchToProps = ({
    addPost,
    updateTextPost
})


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer

/*let mapDispatchToProps = (dispatch)=>({
    updateTextPost: (text)=>{
        dispatch(updateTextPost(text))
    },
    addPost: ()=>{
        dispatch(addPost())
    }
})*/

import React from "react";
import Header from "./Header";
import axios from "axios"
import {connect} from "react-redux";
import {setAuthUserData, setImagesUsers} from "../../redux/auth-reducer";
import default_avatar from "../../assets/images/default_avatar.png"


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)

                    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + response.data.data.id)
                        .then(response => {
                            let image_source = response.data.photos.small || default_avatar
                            this.props.setImagesUsers(image_source)
                        })
                }

            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    img: state.auth.img
})

export default connect(mapStateToProps, {setAuthUserData, setImagesUsers})(HeaderContainer)
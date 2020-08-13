import React, {useEffect, useState} from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import default_avatar from "../../../assets/images/default_avatar.png"



// class ProfileInfo extends React.Component {
//
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//
//     activateToggleMode = () => {
//         this.setState({editMode: true})
//     }
//
//     deActivateToggleMode = () => {
//         this.setState({editMode: false})
//         if (this.props.status !== this.state.status) this.props.updateStatus(this.state.status)
//     }
//
//     OnChangeStatus = (e) => {
//         let new_status = e.target.value
//         this.setState({status: new_status})
//
//     }
//
//     render() {
//         if (!this.props.profile) return <Preloader/>
//
//         return (
//             <div>
//                 <img src={this.props.mainImage} alt="main"/>
//                 <div className={classes.appWrapper}>
//                     <div className={classes.nameUser}>{this.props.profile.fullName}</div>
//                     <div>
//                         {
//                             this.state.editMode
//                                 ? <input onChange={this.OnChangeStatus} value={this.state.status}
//                                          onBlur={this.deActivateToggleMode} autoFocus={true}/>
//                                 : <span onClick={this.activateToggleMode}>{"Status: " + this.props.status}</span>
//                         }
//
//
//                     </div>
//                     <div className={classes.avaImage}><img src={this.props.profile.photos.large || default_avatar}
//                                                            alt="avatar"/>
//                     </div>
//                     <div className={classes.aboutUser}>About me:<br/>{this.props.profile.aboutMe}</div>
//                     <div className={classes.contacts}>
//                         My contacts:
//                         <ul>
//                             <li>Facebook: {this.props.profile.contacts.facebook || "None"}</li>
//                             <li>WebSite: {this.props.profile.contacts.website || "None"}</li>
//                             <li>vk: {this.props.profile.contacts.vk || "None"}</li>
//                             <li>github: {this.props.profile.contacts.github || "None"}</li>
//                         </ul>
//                     </div>
//                     <div>{(this.props.profile.lookingForAJob) ? 'I search work' : 'I dont search work'}</div>
//                 </div>
//             </div>
//         )
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({status: this.props.status})
//         }
//     }
// }
//
// export default ProfileInfo

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    useEffect(()=>{
        if(props.status !== status) setStatus(props.status)
    })


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        if (status !== props.status) props.updateStatus(status)
    }

    const OnChangeStatus = (e) => {
        const new_status = e.target.value
        setStatus(new_status)
    }


    if (!props.profile) return <Preloader/>

    return (
        <div>
            <img src={props.mainImage} alt="main"/>
            <div className={classes.appWrapper}>
                <div className={classes.nameUser}>{props.profile.fullName}</div>
                <div>
                    {
                        editMode
                            ? <input onChange={OnChangeStatus} value={status}
                                     onBlur={deActivateEditMode} autoFocus={true}/>
                            : <span onClick={activateEditMode}>{"Status: " + props.status}</span>
                    }


                </div>
                <div className={classes.avaImage}><img src={props.profile.photos.large || default_avatar}
                                                       alt="avatar"/>
                </div>
                <div className={classes.aboutUser}>About me:<br/>{props.profile.aboutMe}</div>
                <div className={classes.contacts}>
                    My contacts:
                    <ul>
                        <li>Facebook: {props.profile.contacts.facebook || "None"}</li>
                        <li>WebSite: {props.profile.contacts.website || "None"}</li>
                        <li>vk: {props.profile.contacts.vk || "None"}</li>
                        <li>github: {props.profile.contacts.github || "None"}</li>
                    </ul>
                </div>
                <div>{(props.profile.lookingForAJob) ? 'I search work' : 'I dont search work'}</div>
            </div>
        </div>


    )
}

export default ProfileInfo

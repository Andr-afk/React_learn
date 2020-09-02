import React, {useEffect, useState} from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import default_avatar from "../../../assets/images/default_avatar.png"
import AboutMe from "./AboutMe/AboutMe";


const ProfileInfo = (props) => {
    let [editModeStatus, setEditModeStatus] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditModeStatus(true)
    }

    const deActivateEditMode = () => {
        setEditModeStatus(false)
        if (status !== props.status) props.updateStatus(status)
    }

    const showStatus = () => {
        if (editModeStatus && props.isOwner) {
            return <input onChange={OnChangeStatus}
                          value={status}
                          onBlur={deActivateEditMode}
                          autoFocus={true}/>
        } else {
            return <span onClick={activateEditMode}>{"Status: " + props.status}</span>
        }
    }

    const OnChangeStatus = (e) => {
        const new_status = e.target.value
        setStatus(new_status)
    }

    const OnChooseFile = (e) => {
        const photo_file = e.target.files[0]
        props.uploadPhoto(photo_file)
    }


    if (!props.profile) return <Preloader className={classes.preloader}/> // props = {className:ссылка на css файл}

    return (
        <div>
            <img src={props.mainImage} alt="main"/>
            <div className={classes.appWrapper}>
                <AboutMe profile={props.profile}
                         uploadAboutMe={props.uploadAboutMe}
                         isOwner={props.isOwner}/>

                <div>{showStatus()}</div>
                <div className={classes.avaImage}>
                    {props.isFetching ? <Preloader/> :
                        <img src={props.profile.photos.large || default_avatar} alt="avatar"/>}
                </div>
                {props.isOwner && <input type="file" onChange={OnChooseFile}/>}


            </div>
        </div>


    )
}

export default React.memo(ProfileInfo)


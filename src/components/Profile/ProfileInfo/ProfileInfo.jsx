import React from "react";
import classes from "./ProfileInfo.module.css"


const ProfileInfo = (props) => {
    return (
        <div>
            <img src={props.mainImage} alt="main"/>
            {/*<div className={classes.avaImage}><img src={props.avaImage} alt="avatar"/></div>
            <div className={classes.aboutUser}>
                description
            </div>*/}
            <div className={classes.appWrapper}>
                <div className={classes.nameUser}>NameUser</div>
                <div className={classes.avaImage}><img src={props.avaImage} alt="avatar" /></div>
                <div className={classes.aboutUser}>description</div>

            </div>
        </div>
    )
}

export default ProfileInfo

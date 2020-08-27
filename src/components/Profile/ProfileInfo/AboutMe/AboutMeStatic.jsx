import React from "react";
import classes from "../ProfileInfo.module.css";


const AboutMeStatic = ({profile})=>{
    return(
        <div>
            <div className={classes.nameUser}>{profile.fullName}</div>
            <div className={classes.aboutUser}>About me:<br/>{profile.aboutMe}</div>
            <div className={classes.contacts}>
                My contacts:
                <ul>
                    {
                        Object.keys(profile.contacts).map(key => {
                            const value = profile.contacts[key] || "None"
                            return (
                                <li key={key}>
                                    {`${key}: ${value}`}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>{(profile.lookingForAJob) ? 'I search work' : 'I dont search work'}</div>
            <div>Job description: {profile.lookingForAJobDescription
                ? profile.lookingForAJobDescription
                : "No data"}</div>
        </div>
    )
}

export default AboutMeStatic

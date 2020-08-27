import React, {useState} from "react";
import AboutMeForm from "./AboutMeForm";
import AboutMeStatic from "./AboutMeStatic";


const AboutMe = ({profile, uploadAboutMe, isOwner}) => {
    let [editModeAboutMe, setEditModeAboutMe] = useState(false)

    const onSubmit = (formData) => {
        uploadAboutMe(formData)
    }


    return (
        <div>
            {
                isOwner && <button onClick={() => setEditModeAboutMe(!editModeAboutMe)}>Change data about me</button>
            }

            {
                editModeAboutMe
                    ? <AboutMeForm onSubmit={onSubmit} profile={profile} initialValues={profile}/>
                    : <AboutMeStatic profile={profile}/>

            }
        </div>
    )
}

export default AboutMe

import React from "react";
import preloader from "../../../assets/images/preloader.gif";


const Preloader = (props)=>{
    return (
        <div className={props.className}>
            <img src={preloader} alt='wait please'/>
        </div>
    )
}

export default Preloader

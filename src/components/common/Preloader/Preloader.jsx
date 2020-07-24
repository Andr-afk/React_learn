import React from "react";
import preloader from "../../../assets/images/preloader.gif";


const Preloader = ()=>{
    return (
        <div>
            <img src={preloader} alt='wait please'/>
        </div>
    )
}

export default Preloader

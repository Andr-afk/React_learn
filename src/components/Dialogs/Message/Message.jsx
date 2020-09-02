import React from "react";


const Message = (props) => {
    return <div>{props.text}</div>
}

export default React.memo(Message)

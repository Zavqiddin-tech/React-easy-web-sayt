import React from "react";

const CardBox = (props) => {
    return (
        <div className="card-box">
            <div className="card-text">{props.text}</div>
            <div className="card-number">{props.number}</div>
        </div>
    )
}

export default CardBox
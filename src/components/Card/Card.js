import React from "react";
import './card.css';
import CardBox from "./cardBox";

const Card = () => {
    return (
        <div className="card-items">
            <div className="card-title">Email Marketing</div>
            <div className="card-boxes">
                <div className="col-2s">
                    <CardBox text="Sent" number="12.6K"/>
                </div>
                <div className="col-2s">
                    <CardBox text="Open" number="25.1%"/>
                </div>
                <div className="col-2s">
                    <CardBox text="Unubscribe" number="1.98%"/>
                </div>
                <div className="col-2s">
                    <CardBox text="Sales" number="16.04K"/>
                </div>
                <div className="col-2s">
                    <CardBox text="Click" number="3.98%"/>
                </div>
                <div className="col-2s">
                    <CardBox text="Bounce" number="2.09%"/>
                </div>
            </div>
        </div>
    )
}

export default Card
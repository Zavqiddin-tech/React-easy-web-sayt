import React from "react";
import './catalog.css';


const Catalog = () => {
    return (
        <div className="catalog">
            <div className="btn-group">
                <button className="c-btn active">All</button>
                <button className="c-btn">Draft</button>
                <button className="c-btn">Sent</button>
                <button className="c-btn">Scheduled</button>
            </div>
            <div className="search-inp">
                <input type="text"  className="search" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Catalog;
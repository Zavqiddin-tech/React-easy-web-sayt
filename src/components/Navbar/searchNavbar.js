import React from "react";


const SearchNavbar = () => {
    return (
        <div className="search-nav">
            <div className="search-inp">
                <input type="text" className="search" placeholder="Search" />
            </div>
            <div className="search-box">🔔</div>
            <div className="search-box">🛒</div>
        </div>
    )
}

export default SearchNavbar
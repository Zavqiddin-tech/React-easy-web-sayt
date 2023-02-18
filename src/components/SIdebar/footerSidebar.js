import React from "react";

const footerSidebar = () => {
    return (
        <div className="footer">
            <div className="footer-text">Profile</div>
            <div className="footer-items">
                <div className="footer-item">
                    <div className="footer-img"></div>
                </div>
                <div className="footer-item">
                    <div className="footer-title">Amanda</div>
                    <div className="footer-subtitle">Admin Accound</div>
                </div>
                <div className="footer-item">
                    <div className="footer-dot">...</div>
                </div>
            </div>
            <div className="footer-btns">
                <button className="footer-btn">Logout</button>
            </div>
        </div>
    )
}

export default footerSidebar
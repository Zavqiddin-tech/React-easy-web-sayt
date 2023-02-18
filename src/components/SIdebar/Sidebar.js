import React from "react";
import './sidebar.css'
import TopSidebar from "./topSidebar";
import MenuSidebar from "./menuSIdebar";
import FooterSidebar from "./footerSidebar";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <TopSidebar />
            <MenuSidebar />
            <FooterSidebar />
        </div>
    )
}

export default Sidebar;
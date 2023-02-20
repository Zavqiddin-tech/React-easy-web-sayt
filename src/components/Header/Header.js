import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Catalog from "../Catalog/Catalog";
import Table from "../Table/Table";

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Card />
            <Catalog />
            <Table />
        </div>
    )
}

export default Header
import React from "react";
import './index.css'
import Sidebar from "../SIdebar/Sidebar";
import Header from "../Header/Header";



const App = () => {
    return (
        <div className="wrapper">
            <div className="col-4s">
                <Sidebar />
            </div>
            <div className="col-8s">
                <Header />
            </div>
        </div>
    )
}

export default App;
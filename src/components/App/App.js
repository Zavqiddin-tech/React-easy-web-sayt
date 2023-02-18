import React from "react";
import './index.css'
import Sidebar from "../SIdebar/Sidebar";



const App = () => {
    return (
        <div className="container">
            <div className="col-4">
                <Sidebar />
            </div>
        </div>
    )
}

export default App;
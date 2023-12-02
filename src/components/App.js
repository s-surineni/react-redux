import { Route } from "react-router-dom";
import React from "react";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";


function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </div>
    )
}

export default App;
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            // READ DOCUMENTATION
            <BrowserRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        {/* <li><a href="/">Home</a></li>
                        <li><a href="/stuff">Stuff</a></li>
                        <li><a href="/contact">Contact</a></li> */}
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/stuff" element={<Stuff />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
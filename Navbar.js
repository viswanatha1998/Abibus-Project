import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

import abhibuslogo from '../imgs/abhibus_logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <header className="d-flex justify-content-around bg-light align-items-center">
                    <Link to="/"><img id="logo" src={abhibuslogo} alt="abhibus logo" /></Link>
                    <nav>
                        <ul className="nav d-flex justify-content-between">
                            <li>
                                <Link to="/">Bus</Link>
                            </li>
                            <li>
                                <Link to="/trains">Trains</Link>
                            </li>
                            <li>
                                <Link to="/flights">Flights</Link>
                            </li>
                            <li>
                                <Link to="/offers">Offers</Link>
                            </li>
                            <li>
                                <Link to="/hotels">Hotels</Link>
                            </li>
                            <li>
                                {/* <a href="https://www.abhibus.com/">My Bookings</a> */}
                                <Link to="/mybookings">My Bookings</Link>
                            </li>
                            <li>
                                <a href="https://www.abhibus.com/">
                                    <i className="far fa-user-circle"></i>
                                    Login/Register</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

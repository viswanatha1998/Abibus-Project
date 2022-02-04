import React, { Component } from 'react';
import './App.css'

export default class Hotels extends Component {
    render() {
        return (
            <div className="hotels-container container text-primary">
                <img height="400" width="400" src="https://static.abhibus.com/busgallery/popularCities/1519842600_hyd.jpg" />
                <div className="banner">
                    <h5>Book Hotels in Hyderabad</h5>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import {
    Link,
    withRouter // HOC -- Higher Order Component
} from "react-router-dom";
import BusList from '../BusList';
import './Bus.css';


class Bus extends Component {
    constructor() {
        super();
        this.state = {
            source: '',
            destination: '',
            err: false
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSearch = () => {
        const { source, destination } = this.state;
        const { history } = this.props;
        if (source && destination) {
            history.push(`/bus_search/${source}/${destination}`)
        } else {
            this.setState({
                err: true
            })
        }
    }

    render() {
        const { err, source } = this.state
        console.log('Updating phase --->', 'render')
        console.log({ source })
        return (
            <div>
                <div>
                    <div id="search-container">
                        <h1 className="text-center text-white my-3 py-4">Book Bus Tickets</h1>
                        <div className="my-3 tabs d-flex justify-content-center">
                            <span>Bus</span>
                            <span>Trains</span>
                            <span>Hotels</span>
                            <span>Rentals</span>
                        </div>
                        <div className="d-flex justify-content-center m-2">
                            <div className="leave_input">
                                <i className="fas fa-location-arrow"></i>
                                <input
                                    type="text"
                                    placeholder="Leave From"
                                    name='source'
                                    onChange={(event) => this.handleChange(event)}
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Going to"
                                name="destination"
                                onChange={(event) => this.handleChange(event)}
                            />
                            <input type="date" />
                            <button type=" button" className="rounded" onClick={() => this.handleSearch()}>
                                search
                            </button>
                        </div>
                        {err ? <p className="text-center text-white">Please Enter Source and Destination</p> : ''}
                    </div>
                    <div className="container">
                        <div className="card border m-4 p-3 bg-danger">
                            <h1>Abhibus Offers</h1>
                            <div className="abibus_img">
                                <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/01/1630475276/Homeslide.jpeg" />
                                <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/01/1630475276/Homeslide.jpeg" />
                                <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/01/1630475276/Homeslide.jpeg" />
                                <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/01/1630475276/Homeslide.jpeg" />
                                <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/01/1630475276/Homeslide.jpeg" />
                            </div>
                        </div>


                        <div>
                            <h1>How to book train tickets online?</h1>

                            <ul>
                                <li>
                                    Visit www.AbhiBus.com/trains or open AbhiBus mobile app – android or iOS
                                </li>
                                <li>
                                    Select Source and Destination cities, Date of the journey, then click “Search” button
                                </li>
                                <li>
                                    Choose your train and check seat availability for the same
                                </li>
                                <li>
                                    Select seat class & date that suits you the best
                                </li>
                            </ul>

                            <p>You will also receive an instant auto update of your payment and ticket through an e-mail &
                                message on your
                                registered mobile numbers or email ids. So no need to carry hardcopy of your tickets.</p>
                        </div>


                        <div>
                            <h1>FAQs on Online Train Ticket Booking</h1>

                            <h4>Q. How can I book train tickets online at AbhiBus?</h4>
                            <p>You can login to the AbhiBus website or mobile using your AbhiBus account credentials, and search for the
                                trains
                                after entering Source, Destination, and Date of Journey. Once the list of trains appears, click on the
                                preferred
                                train and the class to check the seat availability for the proposed date(s). After this, you can proceed
                                to
                                make
                                a booking by entering your IRCTC credentials or creating an IRCTC account if you don’t have one. You can
                                now
                                make the booking as per the instructions on the website using multiple payment options.</p>

                            <h4>Q. How can I take a printout of the ticket ?</h4>
                            <p>You will receive the ticket on your email and SMS. You can also download the ticket from your "My
                                Bookings"
                                section in the app/website.</p>
                        </div>
                        <div>
                            <h1>COVID-19 Related Travel Advisory</h1>
                            <p>AbhiBus recommends that every passenger must follow the <a className="text-primary"
                                href="https://www.abhibus.com/corona" target="_blank">Covid Safety
                                Guidelines</a> to ensure a
                                safe and
                                comfortable travel experience during bus journeys. Strict safety protocol can ensure that we end the
                                pandemic soon. Make sure you wear a double mask, use hand sanitiser and maintain strict social
                                distancing
                                while travelling. And yes, look out for Safe-T Bus Operators while booking. Safe-T Bus Partners are
                                handpicked, validated bus operators who follow the Covid safety protocols to ensure the safety of you
                                and
                                your family.</p>
                            <p>Our travel updates summarize changes reported by various sources on bus and train transportation
                                services.
                                Consider this information as a guide only and please refer to the State-wise COVID-19 Travel Guidelines
                                in
                                India links for further information on travel restrictions and news updates.</p>
                        </div>
                        <div>
                            <h1>COVID-19 Related Travel Advisory</h1>
                            <p>AbhiBus recommends that every passenger must follow the <a href="https://www.abhibus.com/corona">Covid
                                Safety
                                Guidelines</a> to ensure a
                                safe and
                                comfortable travel experience during bus journeys. Strict safety protocol can ensure that we end the
                                pandemic soon. Make sure you wear a double mask, use hand sanitiser and maintain strict social
                                distancing
                                while travelling. And yes, look out for Safe-T Bus Operators while booking. Safe-T Bus Partners are
                                handpicked, validated bus operators who follow the Covid safety protocols to ensure the safety of you
                                and
                                your family.</p>
                            <p>Our travel updates summarize changes reported by various sources on bus and train transportation
                                services.
                                Consider this information as a guide only and please refer to the State-wise COVID-19 Travel Guidelines
                                in
                                India links for further information on travel restrictions and news updates.</p>
                        </div>
                        <div>
                            <h1>COVID-19 Related Travel Advisory</h1>
                            <p>AbhiBus recommends that every passenger must follow the <a href="https://www.abhibus.com/corona"
                                target="_blank">Covid Safety
                                Guidelines</a> to ensure a
                                safe and
                                comfortable travel experience during bus journeys. Strict safety protocol can ensure that we end the
                                pandemic soon. Make sure you wear a double mask, use hand sanitiser and maintain strict social
                                distancing
                                while travelling. And yes, look out for Safe-T Bus Operators while booking. Safe-T Bus Partners are
                                handpicked, validated bus operators who follow the Covid safety protocols to ensure the safety of you
                                and
                                your family.</p>
                            <p>Our travel updates summarize changes reported by various sources on bus and train transportation
                                services.
                                Consider this information as a guide only and please refer to the State-wise COVID-19 Travel Guidelines
                                in
                                India links for further information on travel restrictions and news updates.</p>
                        </div>
                        <div>
                            <img className="bot" height="50px" src="https://static.abhibus.com/chatbot/chat-pop.png" alt="boto" />
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <h4>Popular Bus Routes</h4>
                            <ul>
                                <li>Hyderabad-Bangalore Buses</li>
                                <li>Pune-Shirdi Buses</li>
                                <li>Chennai-Coimbatore Buses</li>
                                <li>Hyderabad-Visakhapatnam Buses</li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default withRouter(Bus);

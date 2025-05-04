import React from "react";
import Header from '../Components/Header'
import FlightListBody from "../Components/FlightListBody";
import FlightsList from '../Components/FlightsList'
import '../styles/App.css'

const Flights = () => {
    return (
        <div>
            <Header />
            <FlightListBody />
            <div className="mostPopularCitites">
                <div className="citiesContainer">
                    <FlightsList />
                </div>
            </div>
        </div>
    );
};

export default Flights;
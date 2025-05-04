import React from "react";
import Button from "./button";
import FlightPage from '../styles/FlightPage.css'

const FlightListComponent = (props) => {
    return (
        <div className="flightPassCard">
            <div className="priceSect">
                <div className="price">{props.flight.price}$</div>
                <div className="bookButton"><Button/></div>
            </div>

            <div className="flightInfo">
                <div className="company">{props.flight.company}</div>
                <div className="startAndEnd">
                    <div className="countries">{props.flight.startDestination}</div>
                    <div className="flightBar"></div>
                    <div className="countries">{props.flight.endDestination}</div>
                </div>

                <div className="countryFrom">{props.flight.country}</div>
            </div>
        </div>
    )
}
export default FlightListComponent;
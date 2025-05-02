import React from "react";
import '../styles/App.css';

const Listitem = (props) => {
    return (
        <div className="countryRouteCard">
            <div className="countryCardTitle">{props.flight.country}</div>
            <div className="countryCardInfo">{props.flight.startDestination} - {props.flight.endDestination}</div>
        </div>
    );

}

export default Listitem
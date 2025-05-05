import React from "react";
import FlightService from '../ServicesAPI/FlightServiceAPI';

const Button = ({ user, flight }) => {
    const handleClick = async () => {
        try {
            const response = await FlightService.bookFlight({ user, flightId: flight.id });
            console.log("Booking successful:", response);
        } catch (error) {
            console.error("Error booking flight:", error);
        }
    };

    return (
        <div className="buttonToSend" onClick={handleClick}>Book</div>
    );
};

export default Button;
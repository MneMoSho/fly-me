import FlightPage from '../styles/FlightPage.css'
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import FlightListComponent from '../Components/FlightListComponent'

const FlightListBody = (props) => {

  const location = useLocation();
  const { flights } = location.state || {};

  console.log(flights);

  return (
    <div className="mainBackground"> <div className="mainBody">
      {flights.map(flight => (<FlightListComponent flight = {flight}/>))}
    </div>
    </div>
  )

}

export default FlightListBody
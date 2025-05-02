import React, { useState, useEffect } from "react";
import FlightService from '../ServicesAPI/FlightServiceAPI';

const CountryCard = (props) => {
     const [minPrice, setMinPrice] = useState(0);

     useEffect(() => {
        findMinPrice();
    }, [])

  const findMinPrice = async () => {
      const price = await FlightService.findMinPrice();
      setMinPrice(price);
  }
// добавить поиск по стране
    return (
        <div className="cityCard">
            <div className="someText">{props.countryName}</div>
            <img src={props.image} alt="Флаг страны" className="countryFlag" />
            <div className="minPrice">from {minPrice} $</div>
        </div>
    )
}

export default CountryCard
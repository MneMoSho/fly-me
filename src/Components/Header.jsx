import React from "react";
import FlightPage from '../styles/FlightPage.css'
import test from '../images/test.png'

const Header = () => {
    return (
        <div className="HeaderForOtherPages">
            <img src={test} alt="Флаг страны" className="flyMeIcon" />
            <div className="titleName">
                <div className="SiteName">Fly me</div>
                <div className="SiteNameLow">to the moon</div>
            </div>
        </div>
    )
}

export default Header
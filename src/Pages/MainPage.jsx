import React, { useState } from 'react'
import '@fontsource/just-me-again-down-here';
import '@fontsource/inter';
import '../styles/App.css'
import China from '../images/China.jpg'
import Russia from '../images/Russia.jpg'
import Japan from '../images/Japan.jpg'
import Georgia from '../images/Georgia.jpeg'
import FlightService from '../ServicesAPI/FlightServiceAPI';
import DataInput from '../Components/DataInput'
import CountryCard from '../Components/CountryCard'
import FlightsList from '../Components/FlightsList'
import { useNavigate } from 'react-router-dom';
import RegisterUserIcon from '../Components/RegisterUserIcon';
import RegisterUserWindow from '../modalWindows/RegisterUserWindow'
import UserMenu from '../modalWindows/UserMenu';

function MainPage() {
  const [destination, setDestination] = useState({
    timeLeaving: "",
    timeArriving: "",
    startDestination: "",
    endDestination: ""
  });

  const [flights, seFlights] = useState([]);

  const [modal, setModal] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null);

  const getFlightFromAPI = async () => {
    const response = await FlightService.findFlight(destination);
    seFlights(response);
    console.log(response);
    navigate('/flights', { state: { flights: response } })
  }

  const handleProfileClick = () => {
    if (currentUser) {
      setUserMenuVisible(true);
    } else {
      setModal(true);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null); 
    localStorage.removeItem('currentUser');
  };

  const handleCountryClick = (countryName) => {
    navigate('/flights', { state: { selectedCountry: countryName } });
  };

  return (
    <div className="App">
      <div className="header">

        <div onClick={() => handleProfileClick(true)}>
        <RegisterUserIcon username={currentUser?.username} />
        </div>
        <div className="questionMark">
          <h1>?</h1>
          <div className="smallCylinder"></div>
        </div>
        <div className="titleName">
          <div className="SiteName">Fly me</div>
          <div className="SiteNameLow">to the moon</div>
        </div>
      </div>

      <div className="choosingDir">

        <div className="Squares">
          <div className='Squares top-right'></div>
          <div className='Squares bottom-left'></div>
        </div>

        <div className="bestTickets"><span id="line1">Лучшие</span> <span id="line2">авиабилеты</span></div>
        <div className="forBestPrice">По лучшим ценам</div>

        <div className="dataInput">

          <div className="whenTo">
            <DataInput fillName="I'm leaving at"
              value={destination.timeLeaving}
              onChange={event => setDestination({ ...destination, timeLeaving: event.target.value })}
            />
          </div>

          <div className="where">
            <DataInput fillName="leaving to"
              value={destination.leavingFrom}
              onChange={event => setDestination({ ...destination, startDestination: event.target.value })}
            />
          </div>

          <div className="where">
            <DataInput fillName="leaving from"
              value={destination.leavingTo}
              onChange={event => setDestination({ ...destination, endDestination: event.target.value })}
            />
          </div>

          <div className="whenFrom">
            <DataInput fillName="I'm coming at"
              value={destination.timeArriving}
              onChange={event => setDestination({ ...destination, timeArriving: event.target.value })}
            />
          </div>

        </div>
        <div className="findButton" onClick={getFlightFromAPI}>
          <div className="find">
            find
          </div>
        </div>
      </div>

      <div className="mostPopularDir">

        <div className="mostPopularContainer">
          <CountryCard countryName="Japan" image={Japan} onClick={() => console.log('Japan')} />
          <CountryCard countryName="Russia" image={Russia} onClick={() => handleCountryClick('Russia')} />
          <CountryCard countryName="China" image={China} onClick={() => handleCountryClick('China')} />
          <CountryCard countryName="Georgia" image={Georgia} onClick={() => handleCountryClick('Georgia')} />
        </div>

      </div>

      <div className="mostPopularCitites">
        <div className="citiesContainer">
          <FlightsList />
        </div>
      </div>

      <div className="footer">
        footer text
      </div>
      <RegisterUserWindow visible={modal} setVisible={setModal} onRegisterSuccess={setCurrentUser}></RegisterUserWindow>
      {currentUser && (
        <UserMenu 
          visible={userMenuVisible} 
          setVisible={setUserMenuVisible} 
          user={currentUser}
          onLogout={handleLogout}
        />
      )}
    </div>

  );
}

export default MainPage;
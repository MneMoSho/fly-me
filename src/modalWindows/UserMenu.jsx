import React from 'react';
import cl from './ModalWindowStyles.module.css';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({ visible, setVisible, user, onLogout }) => {

    const navigate = useNavigate();
    const handleClose = () => {
        setVisible(false);
    };
    const handleLogout = () => {
        onLogout();
        setVisible(false);
      };

    return (
        <div className={`${cl.modalPage} ${visible ? cl.active : ''}`}>
            <div className={cl.myModalContent}>
                <h3>Welcome, {user?.username || 'User'}!</h3>

                <div className="Button" onClick={() => navigate("/userFlights",{ state: { user} })}>
                    check all booked flights
                </div>

                <div className="Button" onClick={handleLogout}>
                    logout
                </div>

                <div className="Button" onClick={() => { setVisible(false)}}>
                    close
                </div>
            </div>
        </div>
    );
};

export default UserMenu;
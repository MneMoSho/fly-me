import React from "react";
import '../styles/App.css';

const input = (props) => {
    return (
        <input className="inputTime"
            placeholder={props.fillName}
            value={props.value}
            onChange={props.onChange}
        />)
}

export default input
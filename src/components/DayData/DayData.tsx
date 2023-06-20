import React from 'react';
import "./DayData.scss";
import img from "../../img/img.svg";

const DayData = () => {
    return (
        <div className={"dayData"}>
            <div className="vector">
                <img src={img} alt="img"/>
            </div>
            <div className="temperature">
                <p className="title">Aubibly calm</p>
                <h2>11°</h2>
            </div>
        </div>
    );
};

export default DayData;

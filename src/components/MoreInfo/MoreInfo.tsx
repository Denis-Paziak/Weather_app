import React from 'react';
import "./MoreInfo.scss";

const MoreInfo = ({data}: any) => {

    const {max_temp, min_temp, humidity, wind, pressure}: any = data;

    return (
        <div className={"moreInfo"}>
            <div className="item">
                <p className="title">Max temperature</p>
                <p className="info">{max_temp}</p>
            </div>

            <div className="item">
                <p className="title">Min temperature</p>
                <p className="info">{min_temp}</p>
            </div>

            <div className="item">
                <p className="title">Humidity</p>
                <p className="info">{humidity} %</p>
            </div>

            <div className="item">
                <p className="title"> P_atm</p>
                <p className="info">{pressure} hPa</p>
            </div>

            <div className="item">
                <p className="title">Wind</p>
                <p className="info">{wind} m/s</p>
            </div>

            <div className="item">
                <p className="title">Visibility</p>
                <p className="info">10 km</p>
            </div>
        </div>
    );
};

export default MoreInfo;

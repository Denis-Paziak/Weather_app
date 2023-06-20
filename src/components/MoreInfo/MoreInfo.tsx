import React from 'react';
import "./MoreInfo.scss";
const MoreInfo = () => {
    return (
        <div className={"moreInfo"}>
            <div className="item">
                <p className="title">Pressure</p>
                <p className="info">800hcpa</p>
            </div>

            <div className="item">
                <p className="title">Precipitation</p>
                <p className="info">2.0 mm</p>
            </div>

            <div className="item">
                <p className="title">Humidity</p>
                <p className="info">56 %</p>
            </div>

            <div className="item">
                <p className="title">Air Quality</p>
                <p className="info">34</p>
            </div>

            <div className="item">
                <p className="title">Wind</p>
                <p className="info">4 km/h</p>
            </div>

            <div className="item">
                <p className="title">Visibility</p>
                <p className="info">11 km</p>
            </div>
        </div>
    );
};

export default MoreInfo;

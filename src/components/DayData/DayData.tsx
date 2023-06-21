import React from 'react';
import "./DayData.scss";
import cloudy  from "../../img/Cloudy.svg";
import rain from "../../img/Rain.svg";
import sky from "../../img/Clear.svg";
import thunderstorm  from "../../img/thunderstorm.svg";

interface iProps {
    data: any,
}

const DayData = ({data,}: iProps) => {

    const vectors: any = {
        "rain" : rain,
        "clouds" : cloudy,
        "sky" : sky,
        "thunderstorm " : thunderstorm ,
    };

    let veactor: string = '';

    if (data.status.indexOf("rain") >= 0) {
        veactor = vectors.rain
    }else if (data.status.indexOf("clouds") >= 0) {
        veactor = vectors.clouds
    }else if(data.status.indexOf("sky") >= 0) {
        veactor = vectors.sky
    }else if(data.status.indexOf("thunderstorm") >= 0) {
        veactor = vectors.thunderstorm
    }

    return (
        <div className={"dayData"}>
            <div className="vector">
                <img src={veactor} alt="img"/>
            </div>
            <div className="temperature">
                <p className="title">{data.status}</p>
                <h2>{data.temp}°</h2>
            </div>
        </div>
    );
};

export default DayData;

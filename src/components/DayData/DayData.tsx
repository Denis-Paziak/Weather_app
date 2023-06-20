import React, {useEffect} from 'react';
import "./DayData.scss";
import img from "../../img/img.svg";

interface iProps {
    data: any
}

const DayData = ({data}: iProps) => {
    return (
        <div className={"dayData"}>
            <div className="vector">
                <img src={img} alt="img"/>
            </div>
            <div className="temperature">
                <p className="title">{data.status}</p>
                <h2>{data.temp}°</h2>
            </div>
        </div>
    );
};

export default DayData;

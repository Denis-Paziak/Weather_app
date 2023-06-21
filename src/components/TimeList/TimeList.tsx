import React from 'react';
import "./TimeList.scss";


interface iListItem {
    id: string,
    date: string,
    time: string,
    temp: number,
    max_temp: number,
    min_temp: number,
    status: string,
    icon: string
}

interface iProps {
    data: iListItem,
    list: iListItem[],
    changeDataTime: any
}

const TimeList = ({list, data, changeDataTime}: iProps) => {
    return (
        <ul className={"timeList"}>
            {list.filter((el: iListItem) => el.date === data.date)
                .map((el: iListItem) => {

                    let styleClass = el.time === data.time ? 'active': '';

                    return <li key={el.id} className={styleClass} onClick={() => {changeDataTime(el.time)}}>
                        <p className="time">{el.time.substring(0, 5)}</p>
                        <i className="icon">
                            <img src={`https://openweathermap.org/img/wn/${el.icon}@2x.png`} alt=""/>
                        </i>
                        <p className="temp">{el.temp}°</p>
                    </li>
                })}
        </ul>
    );
};

export default TimeList;

import React, {useState} from 'react';
import ListDays from "../DayList/ListDays";
import DayData from "../DayData/DayData";
import TimeList from "../TimeList/TimeList";
import MoreInfo from "../MoreInfo/MoreInfo";

import weatherDB from "../../Data";

interface iListItem {
    id: string,
    date: string,
    time: string,
    temp: number,
    max_temp: number,
    min_temp: number,
    status: string,
}


interface iData {
    list: iListItem[],
    days: string []
}

const formatData = (data: any): iData => {

    let newData: iData = {
        list: [],
        days: []
    };

    newData.list = data.list.map((el : any): iListItem  => {
       return {
           id: 'id' + el.dt + Math.floor(Math.random() * 1000),
           date: el.dt_txt.split(" ")[0],
           time: el.dt_txt.split(" ")[1],
           temp: Math.floor(el.main.temp - 273.15),
           max_temp: Math.floor(el.main.temp_max - 273.15),
           min_temp: Math.floor(el.main.temp_min - 273.15),
           status: el.weather[0].main,
       }
    });

    let days: string [] = [newData.list[0].date];
    let key: string = newData.list[0].date;


    newData.list.forEach((el: iListItem) => {
        if (el.date !== key) {
            days.push(el.date);
            key = el.date;
        }
    })

    newData.days = days;
    console.log(newData);
    return newData;
}

const initData: iData = formatData(weatherDB);

const App = () => {
    const [data, setData] = useState(initData);
    const [selectedDay, setDay] = useState(0);

    return (
        <div>
            <ListDays days={data.days}/>
            <DayData data={data.list[selectedDay]}/>
            <TimeList selectedDay={selectedDay} data={data}/>
            <MoreInfo />
        </div>
    );
};

export default App;

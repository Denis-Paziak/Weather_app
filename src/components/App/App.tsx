import React, {useState} from 'react';
import ListDays from "../DayList/ListDays";
import DayData from "../DayData/DayData";
import TimeList from "../TimeList/TimeList";
import MoreInfo from "../MoreInfo/MoreInfo";

import weatherDB from "../../Data";

interface iData {
    id: string,
    date: string,
    time: string,
    temp: number,
    max_temp: number,
    min_temp: number,
    status: string
}
const formatData = (data: any): iData [] => {
    let newData = data.list.map((el : any): iData  => {
       return {
           id: 'id' + el.dt + Math.floor(Math.random() * 1000),
           date: el.dt_txt.split(" ")[0],
           time: el.dt_txt.split(" ")[1],
           temp: Math.floor(el.main.temp - 273.15),
           max_temp: Math.floor(el.main.temp_max - 273.15),
           min_temp: Math.floor(el.main.temp_min - 273.15),
           status: el.weather[0].main
       }
    });

    return newData;
}

const initData = formatData(weatherDB);

const App = () => {
    const [data, setData] = useState(initData);

    return (
        <div>
            <ListDays/>
            <DayData data={data[0]}/>
            <TimeList />
            <MoreInfo />
        </div>
    );
};

export default App;

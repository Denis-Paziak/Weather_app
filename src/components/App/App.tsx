import React, {useEffect, useState} from 'react';
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
    humidity: number,
    wind: number,
    pressure: number
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
           humidity: el.main.humidity,
           wind: el.wind.speed,
           pressure: el.main.pressure
       }
    });

    console.log(data.list);

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

const serverData: iData = formatData(weatherDB);

const App = () => {
    const [initData, setInitData] = useState<iData>({
        list: [],
        days: []
    });

    const [data, setData] = useState<iListItem>({
        id: "",
        date: "",
        time: "",
        temp: 0,
        max_temp: 0,
        min_temp: 0,
        status: "",
        humidity: 0,
        wind: 0,
        pressure: 0
    });

    const [selectedDay, setSelectedDay] = useState('');

    useEffect(() => {
        setInitData(serverData);
        setData(serverData.list[0]);
    }, []);

    useEffect(() => {
        setSelectedDay(initData.days[0]);
    }, [initData]);


    const changeData = (date: string) => {
        const data = initData.list.filter(el => {
            return el.date === date
        })[0];
        setSelectedDay(date);
        setData(data);
    }

    const changeDataTime = (time: string) => {
        const newData = initData.list.filter(el => {
            return el.time === time && el.date === data.date;
        })[0];

        setData(newData);
    }

    return (
        <div>
            <ListDays days={initData.days} changeData={changeData} selectedDay={selectedDay}/>
            <DayData  data={data}/>
            <TimeList data={data} list={initData.list} changeDataTime={changeDataTime}/>
            <MoreInfo data={data}/>
        </div>
    );
};

export default App;

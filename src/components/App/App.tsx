import React from 'react';
import ListDays from "../DayList/ListDays";
import DayData from "../DayData/DayData";
import TimeList from "../TimeList/TimeList";
import MoreInfo from "../MoreInfo/MoreInfo";

const App = () => {
    return (
        <div>
            <ListDays />
            <DayData />
            <TimeList />
            <MoreInfo />
        </div>
    );
};

export default App;

import React from 'react';
import ListDays from "../DayList/ListDays";
import DayData from "../DayData/DayData";
import TimeList from "../TimeList/TimeList";

const App = () => {
    return (
        <div>
            <ListDays />
            <DayData />
            <TimeList />
        </div>
    );
};

export default App;

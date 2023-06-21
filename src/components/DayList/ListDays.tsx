import React from 'react';
import "./ListDays.scss";

interface iProps {
    days: string [],
    selectedDay: string,
    changeData:  (data: string) => void
}

const ListDays = ({days, changeData, selectedDay}: iProps) => {
    console.log(selectedDay)
    return (
        <ul className={"listDays"}>
            {
                days.map((el : string) => {
                    const date = new Date(el).toString().split(" ");
                    const styleClass = el === selectedDay ? "active" : "";

                    return <li key={el} className={styleClass} onClick={() => {changeData(el)}}>
                        <p className={"nameDay"}>{date[0]}</p>
                        <p>{date[2]}</p>
                    </li>
                })
            }
        </ul>
    );
};

export default ListDays;

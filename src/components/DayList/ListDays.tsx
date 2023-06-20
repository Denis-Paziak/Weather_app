import React, {SetStateAction} from 'react';
import "./ListDays.scss";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

interface iProps {
    days: string [],
    setDay: React.Dispatch<SetStateAction<number>>,
    selectedDay: number
}


const ListDays = ({selectedDay, setDay, days}: iProps) => {
    return (
        <ul className={"listDays"}>
            {
                days.map((el : string, index: number) => {
                    const date = new Date(el).toString().split(" ");
                    let styleClass = '';

                    if (index === selectedDay) {
                        styleClass = "active";
                    }


                    return <li className={styleClass} onClick={() => setDay(index)}>
                        <p className={"nameDay"}>{date[0]}</p>
                        <p>{date[2]}</p>
                    </li>
                })
            }
        </ul>
    );
};

export default ListDays;

import React from 'react';
import "./ListDays.scss";

interface iProps {
    days: string []
}


const ListDays = ({days}: iProps) => {
    return (
        <ul className={"listDays"}>
            {
                days.map((el : string) => {
                    const date = new Date(el).toString().split(" ");
                    return <li className="active">
                        <p className={"nameDay"}>{date[0]}</p>
                        <p>{date[2]}</p>
                    </li>
                })
            }
        </ul>
    );
};

export default ListDays;

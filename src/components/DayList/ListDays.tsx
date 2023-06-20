import React from 'react';
import "./ListDays.scss";

const ListDays = () => {
    return (
        <ul className={"listDays"}>
             <li className="active">
                <p className={"nameDay"}>Today</p>
                <p>05/07</p>
            </li>
        </ul>
    );
};

export default ListDays;

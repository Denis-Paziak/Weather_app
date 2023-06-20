import React from 'react';
import "./ListDays.scss";

const ListDays = () => {
    return (
        <ul className={"listDays"}>
            <li className={"active"}>
                <p className={"nameDay"}>Today</p>
                <p>04/06</p>
            </li>
            <li>
                <p className={"nameDay"}>Thursday</p>
                <p>05/06</p>
            </li>
            <li>
                <p className={"nameDay"}>Friday</p>
                <p>06/06</p>
            </li>
        </ul>
    );
};

export default ListDays;

import React from 'react';
import "./TimeList.scss";


interface iListItem {
    id: string,
    date: string,
    time: string,
    temp: number,
    max_temp: number,
    min_temp: number,
    status: string,
}

interface iProps {
    data: iListItem,
    list: iListItem[],
    changeDataTime: any
}

const TimeList = ({list, data, changeDataTime}: iProps) => {
    return (
        <ul className={"timeList"}>
            {list.filter((el: iListItem) => el.date === data.date)
                .map((el: iListItem) => {

                    let styleClass = el.time === data.time ? 'active': '';

                    return <li key={el.id} className={styleClass} onClick={() => {changeDataTime(el.time)}}>
                        <p className="time">{el.time.substring(0, 5)}</p>
                        <i className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_109_14)">
                                    <path
                                        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                                        stroke="#0F2536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 1V3" stroke="#0F2536" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M12 21V23" stroke="#0F2536" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M4.21997 4.22L5.63997 5.64" stroke="#0F2536" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.36 18.36L19.78 19.78" stroke="#0F2536" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 12H3" stroke="#0F2536" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M21 12H23" stroke="#0F2536" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M4.21997 19.78L5.63997 18.36" stroke="#0F2536" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.36 5.64L19.78 4.22" stroke="#0F2536" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_109_14">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </i>
                        <p className="temp">{el.temp}°</p>
                    </li>
                })}
        </ul>
    );
};

export default TimeList;

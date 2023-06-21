import React, {useState} from 'react';
import "./Search.scss";
import {BiMap} from "react-icons/bi";
import axios from "axios";


interface iProps {
    coordinates: {
        name: string,
        lat: number,
        lon: number,
        state: string
    },
    setCoordinates: any,
}

const Search = ({coordinates, setCoordinates}: iProps) => {
    const [listCountry, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [openSearch, setOpenSearch] = useState(false);

    const handler = (e: any) => {
        e.preventDefault();
        const apiKey: string = "927f7246a362372633072455ef289ddf";

        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=10&appid=${apiKey}`)
            .then(function (response) {
                setList(response.data);
            })
    }


    const selectCoordinates = (el: any) => {
        setCoordinates(el);
        setOpenSearch(false);
    }


    const styleClass = !openSearch ? "hide": "";

    return (
        <div className={"search"}>
            <p onClick={() => {setOpenSearch(true)}}>{coordinates.name} <BiMap/></p>
            <form action="" className={"searchForm " +  styleClass} onSubmit={handler}>
                <h2>Search</h2>
                <div className="container">
                    <input type="text" onChange={(e) => {
                        setInputValue(e.target.value)
                    }}/>
                    <ul>
                        {listCountry.map((el: any) => {
                            const state = el.state ? el.state : el.name;

                            return <li onClick={() => {
                                selectCoordinates(el)
                            }}>{state}</li>
                        })}
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Search;

import axios from "axios";
import {combineReducers} from "redux";

const api = {
    key: "05c5587aafb5d3a8596a10076f7e25aa",
    base: "https://api.openweathermap.org/data/2.5/"
}

const getDefaultWeatherData = async () => {
    let res = await axios.get(`${api.base}weather?q=Tashkent&units=metric&APPID=${api.key}`);
    return res.data;
}

let defaultState = {
    weather: getDefaultWeatherData()
}

const weatherDataReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_WEATHER") {
        return {
            ...state,
            weather: action.payload
        }
    } else {
        return {
            ...state
        }
    }
}

export default weatherDataReducer;
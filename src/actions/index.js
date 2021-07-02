import axios from "axios";

const api = {
    key: "05c5587aafb5d3a8596a10076f7e25aa",
    base: "https://api.openweathermap.org/data/2.5/"
}

export function loadWeather(city) {
    return (dispatch) => {
        return axios.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then(response => {
                dispatch(changeWeather(response.data))
            })
    }
}

export function changeWeather(data) {
    return {
        type: "CHANGE_WEATHER",
        payload: data
    }
}
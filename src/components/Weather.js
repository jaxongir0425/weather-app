import React, {useState} from 'react';
import "./WeatherStyle.css";
import {connect} from "react-redux";
import * as actionCreators from "../actions/index";
import {loadWeather} from "../actions/index";

const api = {
    key: "05c5587aafb5d3a8596a10076f7e25aa",
    base: "https://api.openweathermap.org/data/2.5/"
}

class Weather extends React.Component{
    state = {
        weather: null,
        city: ""
    }

    dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let time = d.getHours() + ":" + d.getMinutes();
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${time} - ${day}, ${date} ${month} ${year}`;
    }

    render(){

        let weather = this.props.weather
        let city = this.state.city;
        console.log(weather)

        return(
            <>

                <main className='site-content'>
                    <section className="weather">
                        <div className="weather__container container">

                            {(typeof weather.main != "undefined") ? (
                                <div className={weather.weather[0].main === "Clouds" ? "weather__main cloud" :
                                    (weather.weather[0].main === "Rain" ? "weather__main rain" : "weather__main")}>
                                    <div className="weather__main_wrapper">
                                        <p className="weather__degree">{Math.round(weather.main.temp)}&#176;</p>
                                        <div className="weather__country">
                                            <p className="country__name">{weather.name}</p>
                                            <date className="country__date">{this.dateBuilder(new Date())}</date>
                                        </div>
                                        <div className="weather__condition">
                                            <img className="condition__img" src="https://picsum.photos/30/30" width='35'/>
                                            <p className="condition__name">{weather.weather[0].main}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="weather__main">
                                    <div className="weather__main_wrapper">
                                        <p className="weather__degree">40&#176;</p>
                                        <div className="weather__country">
                                            <p className="country__name">Tashkent</p>
                                            <date className="country__date">{this.dateBuilder(new Date())}</date>
                                        </div>
                                        <div className="weather__condition">
                                            <img className="condition__img" src="https://picsum.photos/30/30" width='35'/>
                                            <p className="condition__name">Sunny</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="weather__wrapper">
                                <div className="weather__search">
                                    <input
                                        className="search__input"
                                        type="text"
                                        placeholder="Another location"
                                        onChange={e => this.setState({city: e.target.value})}
                                        value={city}
                                    />
                                    <button className="search__btn" type="button" onClick={() => {this.props.loadWeather(city)}}>
                                        <img src="https://img.icons8.com/ios-filled/50/000000/search--v4.png" width='20'/>
                                    </button>
                                </div>
                                <ul className="country__list">
                                    <li className="country__item">
                                        <a className="country__link" href="">Madrid</a>
                                    </li>
                                    <li className="country__item">
                                        <a className="country__link" href="">Manchester</a>
                                    </li>
                                    <li className="country__item">
                                        <a className="country__link" href="">New York</a>
                                    </li>
                                    <li className="country__item">
                                        <a className="country__link" href="">California</a>
                                    </li>
                                </ul>

                                <h5 className="weather__details__title">Weather Details</h5>

                                {(typeof weather.main != "undefined") ? (
                                    <table className='weather__table'>
                                        <tr className="weather__tr">
                                            <td className="weather__td">{weather.weather[0].main}</td>
                                            <td className="weather__td">{weather.clouds.all}%</td>
                                        </tr>
                                        <tr className="weather__tr">
                                            <td className="weather__td">Humidity</td>
                                            <td className="weather__td">{weather.main.humidity}%</td>
                                        </tr>
                                        <tr className="weather__tr">
                                            <td className="weather__td">Wind</td>
                                            <td className="weather__td">{weather.wind.speed} m/s</td>
                                        </tr>
                                        <tr className="weather__tr">
                                            <td className="weather__td">Rain</td>
                                            <td className="weather__td">{weather.main.pressure}mm</td>
                                        </tr>
                                    </table>
                                ) : (
                                    <table className='weather__table'>
                                        <tr className="weather__tr">
                                            <td className="weather__td">Sunny</td>
                                            <td className="weather__td">85%</td>
                                        </tr>
                                        <tr className="weather__tr">
                                            <td className="weather__td">Humidity</td>
                                            <td className="weather__td">12%</td>
                                        </tr>
                                        <tr className="weather__tr">
                                            <td className="weather__td">Wind</td>
                                            <td className="weather__td">1km/h</td>
                                        </tr>
                                        <tr className="weather__tr">
                                            <td className="weather__td">Rain</td>
                                            <td className="weather__td">0mm</td>
                                        </tr>
                                    </table>
                                )}

                            </div>
                        </div>

                    </section>
                </main>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(Weather);
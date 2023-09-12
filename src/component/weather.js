import React, { useState, useEffect } from 'react';
import styless from "./weather.module.css"

function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);
    const tempInCelsius = 273.15;
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;


    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY;
        const fetchData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=37.4996&lon=127.0347&appid=${api_key}`
            );  //현재 날씨 데이터 호출
            const data = await response.json();
            setWeatherData(data);
        };
        fetchData();
    }, []);


    return (
        <div>
            {weatherData ? (
                <>
                    <h1 className={styless.temp}>{(weatherData.main.temp - tempInCelsius).toFixed(1)}°C</h1>
                    <p className={styless.weather}>{weatherData.weather[0].main}</p>
                    <p className={styless.date}>{formattedDate.toString()}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default WeatherApp;

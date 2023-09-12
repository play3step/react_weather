import styless from "./detail.module.css"
import Navbar from "../component/navbar";
import { useEffect, useState } from "react";

function Detail() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const [weatherData, setWeatherData] = useState(null);
    const tempInCelsius = 273.15;
    const api_key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
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
        <div className={styless.contain_box}>
            {weatherData ? (
                <>
                    <h1 className={styless.time}>현재시간  {hours} : {minutes}</h1>
                    <p className={styless.temp}>{(weatherData.main.temp - tempInCelsius).toFixed(1)}°C</p>
                    <p className={styless.weather}>{weatherData.weather[0].main}</p>
                    <div>
                        <Navbar />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
}

export default Detail;
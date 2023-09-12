import { useEffect, useState } from "react";
import styless from "./weekly.module.css"
import WeekData from "../component/weekdata";
import Navbar from "../component/navbar";

function Weekly() {
    const [weekly, setWeekly] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY;
        const fetchData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=37.4996&lon=127.0347&appid=${api_key}`
            ); //5일/3시간 예보자료
            const data = await response.json();
            setLoading(true);
            setWeekly(data.list)
        }
        fetchData();
    }, []);
    return (
        <div className={styless.contain_box}>
            <div className={styless.weekly_box}>
                <h1 className={styless.title}>주간 일기 예보</h1>
                {loading && weekly.length > 0
                    ? weekly
                        .filter((item) => item.dt_txt.includes("00:00:00"))
                        .map((item, index) => (
                            <WeekData
                                key={index}
                                date={(item.dt_txt).substr(0, 10)}
                                maxtemp={(item.main.temp_max - 273)}
                                mintemp={(item.main.temp_min - 273)}
                                weather={item.weather[0].main}
                            />
                        ))
                    : "Loading..."}
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
}
export default Weekly;
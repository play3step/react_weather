import styless from "./weekdata.module.css"

function WeekData({ date, maxtemp, mintemp, weather }) {

    return (
        <div className={styless.weekcontain}>
            <span className={styless.date}>{date}</span>
            <span className={styless.weather}>{weather}</span>
            <span className={styless.maxtemp}>{maxtemp.toFixed(1)}</span>
            <span className={styless.mintemp}>{mintemp.toFixed(1)}</span>
        </div>
    )

}

export default WeekData
import styless from "./home.module.css"
import Weather from "../component/weather";
import Navbar from "../component/navbar";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    return (
        <div className={styless.contain_box}>
            <h1 className={styless.title}>Hello</h1>
            <div onClick={()=> navigate('/detail')} className={styless.weather_now}>
                <Weather />
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    )
}
export default Main;
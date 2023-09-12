import { useNavigate } from "react-router-dom";
import styless from "./navbar.module.css"

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className={styless.navbar}>
            <span onClick={() => navigate('/')} className="material-symbols-outlined">
                home
            </span>
            <span onClick={() => navigate('/weekly')} className="material-symbols-outlined">
                data_thresholding
            </span>
            <span className="material-symbols-outlined">
                settings
            </span>
            <span className="material-symbols-outlined">
                person
            </span>
        </div>
    )
}
export default Navbar;
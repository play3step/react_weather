import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import HOME from "./routers/home"
import Weekly from "./routers/weekly";
import Detail from "./routers/detail";
import "./app.module.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/weekly" element={<Weekly />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
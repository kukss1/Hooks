import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import MyHook from "./State/MyHook";
import UseCallBack from "./State/useCallback";
import UseContext from "./State/useContext";
import UseEffect from "./State/UseEffect";
import UseMemo from "./State/useMemo";
import UseRef from "./State/useRef";
import UseState from "./State/UseState";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/useState" element={<UseState />} />
        <Route exact path="/useEffect" element={<UseEffect />} />
        <Route exact path="/useRef" element={<UseRef />} />
        <Route exact path="/useMemo" element={<UseMemo />} />
        <Route exact path="/useCallBack" element={<UseCallBack/>}/>
        <Route exact path="/useContext" element={<UseContext/>}/>
        <Route exact path="myHook" element={<MyHook/>}/>
      </Routes>
    </div>
  );
};

export default App;

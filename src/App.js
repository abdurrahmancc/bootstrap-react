import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menuber from "./Components/Menuber/Menuber";
import Test from "./Components/Test/Test";
import Allproduct from "./Components/AllProduct/Allproduct";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  const setCartCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Menuber count={count}></Menuber>
      <Allproduct setCartCount={setCartCount}></Allproduct>
    </div>
  );
}

export default App;

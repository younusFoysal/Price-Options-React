

import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import PriceOptions from "./components/PriceOptions/PriceOptions.jsx";
import LineCharts from "./components/LineChart/LineChart.jsx";
import Phones from "./components/Phones/Phones.jsx";


function App() {


  return (
    <>
        <NavBar> </NavBar>

        <PriceOptions></PriceOptions>
        <LineCharts></LineCharts>
        <Phones></Phones>

    </>
  )
}

export default App

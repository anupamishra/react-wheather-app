import CityComponent from "./modules/CityComponent";
import WheatherComponent from "./modules/WheatherComponent";
import './index.css';
import { useState } from "react";
import axios from "axios";

const API_KEY = '2f29072f28ffb16fba5611e0c2dcac18'

function App() {
  const [city, updatedCity] = useState();
  const [weather, updatedWheather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    // console.log(response);
    updatedWheather(response.data);
  }
  return (
    <div className="h-screen bg-teal-950 text-white items-center justify-center p-5">
      
      {weather ?
        <WheatherComponent weather={weather}/>
        :
        <CityComponent updatedCity={updatedCity} fetchWeather={fetchWeather} />
      }
    </div>
  );
}

export default App;

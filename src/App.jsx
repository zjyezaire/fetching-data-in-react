import { useState , useEffect} from 'react';

import * as weatherService from './services/weatherService';

import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => { 

    const fetchDefaultData = async() => {
      const data = await weatherService.show("New York")
      const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.tex
    }
    setWeather(newWeatherState);
  }
    fetchDefaultData();
  }, [] )

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };
  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
}

export default App
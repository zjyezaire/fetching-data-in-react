// src/App.jsx
import * as weatherService from './services/weatherService';

const App = () => {
  const fetchData = async () => {
    const data = await weatherService.show('New York');
    console.log('Data:', data);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  );
};

export default App;

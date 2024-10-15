// src/services/weatherService.js
const API_KEY = "df63c994ee4e47a7825175825241510";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString)
    const data = await res.json();
    console.log('Here is your data!:', data)
    return data;
  } catch (error) {
    console.error(error);
  }
};

show('New York')

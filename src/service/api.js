import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "1450a083f24452edd4d896d0b59adaca";

export const getWeather = async (city, country) => {
    const data = await axios.get(
        `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    return data;
};

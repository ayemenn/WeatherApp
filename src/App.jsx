import React, { useState } from "react";
import axios from "axios";
import WeatherSearchForm from "./assets/Components/WeatherSearchForm";
import WeatherData from "./assets/Components/WeatherData";
import ErrorMessage from "./assets/Components/ErrorMessage";
import Spinner from "./assets/Components/Spinner";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_REACT_APP_PUBLIC_WEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear the error message
    setWeather(null); // Clear the old data
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setWeather(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("City not found. Please enter a valid city name."); 
        console.error("Error fetching weather data", error);
      });
  };

  return (
    <>
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      {/* bg img */}
      <img
        className="h-screen w-screen object-cover z-0"
        src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        alt="Background Image"
      />
      {/* search */}
      <WeatherSearchForm city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {/* Weather or Error */}
      {loading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      <WeatherData weather={weather} />
    </>
  );
}

// WeatherData.jsx
import React from "react";
import Weather from "./Weather";


export default function WeatherData({ weather }) {
  return (
    <>
      {/* Weather */}
      {weather && <Weather data={weather} />}
    </>
  );
}

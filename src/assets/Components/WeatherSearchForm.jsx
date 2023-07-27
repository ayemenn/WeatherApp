// WeatherSearchForm.jsx
import React from "react";
import { BsSearch } from "react-icons/bs";

export default function WeatherSearchForm({ city, setCity, fetchWeather }) {
  return (
    <div className="absolute inset-0 items-center z-10 max-w-[500px] w-full m-auto pt-4 text-white">
      <form onSubmit={fetchWeather} className="flex justify-between items-center p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
        <div>
          <input
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent border-none text-white focus:outline-none text-2xl"
            type="text"
            value={city}
            placeholder="Search city"
          />
        </div>
        <button onClick={fetchWeather}>
          <BsSearch size={20} />
        </button>
      </form>
    </div>
  );
}

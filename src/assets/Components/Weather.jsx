import React from "react";
export default function Weather({ data }) {
    return (
        <div className="top-0 fixed flex flex-col justify-center  w-full h-screen m-auto p-4 text-gray-200 z-30 items-center ">
            <div className="relative flex justify-between pt-20 h-screen w-[500px] ">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='/'
                    />
                    <p className="text-2xl">
                        {data.weather[0].main}
                    </p>
                </div>
                <p className="text-9xl">
                    {data.main.temp.toFixed(0)}&#176;
                </p>
            </div>
            <div className="bg-black/60 p-8 rounded-md mb-16 w-[500px]">
                <p className="text-2xl text-center pb-6"> Weather in {data.name}</p>
                <div className="flex justify-between text-center ">
                    <div>
                        <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className="text-xl">Feels like</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">{data.main.humidity}%</p>
                        <p className="text-xl">Humidity</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)}MPH</p>
                        <p className="text-xl">Winds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
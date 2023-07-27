import React from "react";
import spinner from "/spinner.gif";

export default function Spinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent ">
      <img  className="w-16 h-16"src={spinner} alt="loading.." />
    </div>
  );
}

// ErrorMessage.jsx
import React from "react";

export default function ErrorMessage({ error }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="bg-transparent text-white text-2xl">{error}</div>
    </div>
  );
}

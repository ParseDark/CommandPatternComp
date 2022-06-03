import React from "react";

export default function NumberCard({ value, prefix, suffix }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="font-bold text-7xl">{value}</div>
    </div>
  );
}

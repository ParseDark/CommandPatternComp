import React from "react";

export default function NumberCard({ value, prefix, suffix }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-5xl text-h font-mono">
        {prefix}
        {value}
        {suffix}
      </div>
    </div>
  );
}

import React from "react";

export default function ShadowCard({ title, children, colWidth, ...props }) {
  return (
    <section className={`m-1 rounded-lg col-span-${colWidth} shadow-lg`}>
      <div className="rounded-lg h-full flex flex-col">
        <div className="py-3 px-5 bg-gray-100 font-bold">{title}</div>
        <div className="p-4 grow justify-center items-center h-64">{children}</div>
      </div>
    </section>
  );
}

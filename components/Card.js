import React from "react";
import { Spin } from "antd";

export default function ShadowCard({
  title,
  children,
  colWidth,
  loading,
}) {
  return (
    <section className={`m-1 rounded-lg col-span-${colWidth} shadow-lg`}>
      <div className="rounded-lg h-full flex flex-col">
        <div className="py-3 px-5 bg-gray-100 font-bold">
          {title}
          {loading && <Spin size={12} />}
        </div>
        <div className="p-4 grow justify-center items-center relative">
          {children}
        </div>
      </div>
    </section>
  );
}

import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import useCalendar, { getMonthStr } from "./useCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Calendar() {
  const [{ calendar }, { genCalendar }] = useCalendar();
  const [currentDate, setCurrentDate] = useState(Date.now());
  const { daysNumber, month } = calendar;
  console.log("calendar", calendar);
  const nextMonth = () => {
    setCurrentDate((pre) => dayjs(pre).add(1, "M"));
  };

  const preMonth = () => {
    setCurrentDate((pre) => dayjs(pre).subtract(1, "M"));
  };

  useEffect(() => {
    genCalendar(currentDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  return (
    <div className="flex flex-col px-6 pt-5 pb-6">
      <div className="flex items-center justify-between">
        <button
          className="flex items-center justify-center p-2 rounded-xl hover:"
          onClick={preMonth}
        >
          <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
            <path
              d="M13.25 8.75L9.75 12l3.5 3.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="text-sm font-semibold">{getMonthStr(month)}</div>
        <button
          className="flex items-center justify-center p-2 rounded-xl hover:"
          onClick={nextMonth}
        >
          <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
            <path
              d="M10.75 8.75l3.5 3.25-3.5 3.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 text-xs text-center text-gray-900">
        {dayjs.en.weekdays.map((i) => (
          <span
            key={i}
            className="flex items-center justify-center w-full h-10 font-semibold rounded-lg text-gray-800"
          >
            {i}
          </span>
        ))}
        {daysNumber?.map((i, index) => (
          <span
            key={index}
            className={`flex items-center justify-center w-full h-10  rounded-none rounded-tl-lg hover:bg-gray-100 text-sm text-gray-800`}
          >
            {i}
            {(index - 2) % 7 === 0 && i && (
              <div className="px-2">
                <FontAwesomeIcon className="text-blue-400" icon={faFlag} />
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

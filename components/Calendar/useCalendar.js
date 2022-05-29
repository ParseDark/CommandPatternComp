import dayjs from "dayjs";
import { useState } from "react";

export const getMonthStr = (index = 0) => dayjs.en.months[index];

const getDaysNumber = (fiestDayAtMonth) => {
  const week = fiestDayAtMonth.day();
  const monthDays = Array(fiestDayAtMonth.daysInMonth())
    .fill(0)
    .map((i, index) => index + 1);
  const prefix = Array(week).fill(null);
  return [...prefix, ...monthDays];
};

const useCalendar = () => {
  const [calendar, setCalendar] = useState({});

  const genCalendar = (time = Date.now()) => {
    const day = dayjs(time);
    const month = day.month();
    const date = day.date();
    const week = day.day();
    const days = day.daysInMonth();
    const year = day.year();
    const firstDay = dayjs(`${year}-${month + 1}-${1}`);
    setCalendar({
      month,
      date,
      week,
      days,
      year,
      firstDay,
      daysNumber: getDaysNumber(firstDay),
    });
  };

  return [
    {
      calendar,
    },
    {
      genCalendar,
    },
  ];
};
export default useCalendar;

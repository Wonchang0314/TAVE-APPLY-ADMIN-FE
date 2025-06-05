import React, { useEffect, useState } from "react";
import type { SetStateAction } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import {
  getCalendarDates,
  getCalendarMonth,
  getCalendarYear,
} from "@/utils/datePicker";
import CalendarCell from "./CalendarCell";
import DatePickerHeader from "./DatePickerHeader";

export type datePickerType = "date" | "month" | "year";

interface DatePanelProps {
  state: any;
  selectedDate: string;
  setSelectedDate: React.Dispatch<SetStateAction<string>>;
  setShowPanel: React.Dispatch<SetStateAction<boolean>>;
}

export default function DatePanel({
  selectedDate,
  setSelectedDate,
  setShowPanel,
}: DatePanelProps) {
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs()); // header 기준이 되는 날짜
  const [mode, setMode] = useState<datePickerType>("date");

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const onClickLeftIcon = () => {
    switch (mode) {
      case "date":
        if (date.month() === 0) {
          const newDate = date.subtract(1, "year").set("month", 11);
          setDate(newDate);
        } else setDate(date.subtract(1, "month"));
        break;
      case "month":
        setDate(date.subtract(1, "year"));
        break;
      case "year":
        setDate(date.subtract(10, "year"));
        break;
    }
  };
  const onClickRightIcon = () => {
    switch (mode) {
      case "date":
        if (date.month() === 11) {
          const newDate = date.add(1, "year").set("month", 0);
          setDate(newDate);
        } else setDate(date.add(1, "month"));
        break;
      case "month":
        setDate(date.add(1, "year"));
        break;
      case "year":
        setDate(date.add(10, "year"));
        break;
    }
  };

  const onClickDayCell = (value: string) => {
    setSelectedDate(value);
    setShowPanel(false);
  };

  const onClickMonthCell = (month: number) => {
    setMode("date");
    setDate(date.set("month", month - 1));
  };

  const onClickYearCell = (year: number) => {
    setMode("month");
    setDate(date.set("year", year));
  };

  useEffect(() => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    regex.test(selectedDate) && setDate(dayjs(selectedDate));
  }, [selectedDate]);

  return (
    <div
      className="w-full bg-white py-3 px-4 flex flex-col rounded-lg border border-gray-300 text-black"
      onClick={(e) => e.stopPropagation()}
    >
      <DatePickerHeader
        onClickLeftIcon={onClickLeftIcon}
        onClickRightIcon={onClickRightIcon}
        date={date}
        mode={mode}
        setMode={setMode}
      />
      {mode === "date" && (
        <div className="w-full grid grid-cols-7 text-center text-black">
          {days.map((day) => (
            <div
              key={day}
              className="text-text-primary w-12 h-12 flex items-center justify-center text-sm font-medium"
            >
              {day}
            </div>
          ))}
        </div>
      )}
      {mode === "date" && (
        <div className="w-full grid grid-cols-7 text-black">
          {getCalendarDates(date.year(), date.month() + 1).map((date) => (
            <CalendarCell
              key={date.value}
              cellType="date"
              state={date.state}
              date={date.label}
              onClick={() => onClickDayCell(date.value)}
              selected={date.value === selectedDate}
            />
          ))}
        </div>
      )}
      {mode === "month" && (
        <div className="w-full grid grid-cols-3 text-black">
          {getCalendarMonth().map((month) => (
            <CalendarCell
              key={month}
              date={`${month}월`}
              onClick={() => onClickMonthCell(month)}
              cellType="month"
              state="inPeriod"
            />
          ))}
        </div>
      )}
      {mode === "year" && (
        <div className="w-full grid grid-cols-3 text-black">
          {getCalendarYear(date.year()).map((year) => (
            <CalendarCell
              key={year.value}
              date={`${year.value}년`}
              state={year.state}
              onClick={() => onClickYearCell(year.value)}
              cellType="year"
            />
          ))}
        </div>
      )}
    </div>
  );
}

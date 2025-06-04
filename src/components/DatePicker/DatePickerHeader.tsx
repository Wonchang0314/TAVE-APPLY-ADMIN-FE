import dayjs from "dayjs";
import React from "react";
import Icon from "../Icon/Icon";
import type { SetStateAction } from "react";
import type { datePickerType } from "./DatePanel";

interface DatePickerHeaderProps {
  onClickLeftIcon: () => void;
  onClickRightIcon: () => void;
  date: dayjs.Dayjs;
  mode: datePickerType;
  setMode: React.Dispatch<SetStateAction<datePickerType>>;
}

export default function DatePickerHeader({
  onClickLeftIcon,
  onClickRightIcon,
  date,
  mode,
  setMode,
}: DatePickerHeaderProps) {
  const onClickMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMode("month");
  };

  const onClickYear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMode("year");
  };

  const returnYearText = () => {
    const yearString = date.year().toString();
    const startYear = yearString.slice(0, yearString.length - 1) + "0";
    const endYear = yearString.slice(0, yearString.length - 1) + "9";
    return startYear + "년 - " + endYear + "년";
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClickLeftIcon();
        }}
        className="hover:bg-gray-200 p-2 rounded-lg"
      >
        <Icon type="Left" size={20} />
      </div>
      <div className="flex gap-spacing-01">
        {mode === "year" && (
          <div className={`cursor-pointer`}>{returnYearText()}</div>
        )}
        {(mode === "month" || mode === "date") && (
          <div
            onClick={onClickYear}
            className="cursor-pointer hover:bg-gray-200 p-1 rounded-lg"
          >
            {date.format("YYYY")}년
          </div>
        )}
        {mode === "date" && (
          <div
            onClick={onClickMonth}
            className="cursor-pointer hover:bg-gray-200 p-1 rounded-lg"
          >
            {date.format("MM")}월
          </div>
        )}
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClickRightIcon();
        }}
        className="hover:bg-gray-200 p-2 rounded-lg"
      >
        <Icon type="Left" size={20} className="rotate-180" />
      </div>
    </div>
  );
}

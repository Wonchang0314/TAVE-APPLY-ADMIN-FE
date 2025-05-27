interface DayCellProps {
  date?: number | string;
  selected?: boolean;
  state: "today" | "inPeriod" | "outPeriod";
  onClick: () => void;
  cellType: "date" | "month" | "year";
}

export default function CalendarCell({
  date,
  state,
  onClick,
  cellType,
}: DayCellProps) {
  return (
    <>
      {cellType === "date" ? (
        <div
          className={`
        flex flex-col items-center justify-center w-11 h-11 relative hover:bg-gray-200 rounded-lg
      `}
          onClick={onClick}
        >
          {date}
          {state === "today" && (
            <div
              className={`w-1 h-1 rounded-full absolute bottom-[5px]`}
            />
          )}
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-center w-[100px] h-[66px]`}
          onClick={onClick}
        >
          <span className="hover:bg-gray-200 rounded-lg px-4 py-3">{date}</span>
        </div>
      )}
    </>
  );
}

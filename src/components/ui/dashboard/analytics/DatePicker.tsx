import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  getDaysInMonth,
  startOfMonth,
  getDay,
} from 'date-fns';

const ResponsiveDatePicker: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Mobile detection hook (optional)
  const [isMobile] = useState(window.innerWidth < 640);

  const handleDateClick = (day: number) => {
    setSelectedDate(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
  };

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const startDay = getDay(startOfMonth(currentMonth));
    const weeks = [];
    let currentWeek = [];
    const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;

    // Empty cells for days before the 1st
    for (let i = 0; i < adjustedStartDay; i++) {
      currentWeek.push(
        <td key={`empty-${i}`} className="h-8 sm:h-8 w-8 sm:w-8"></td>
      );
    }

    // Calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isSelected =
        selectedDate && date.toDateString() === selectedDate.toDateString();

      currentWeek.push(
        <td key={day} className="h-8 sm:h-8 w-8 sm:w-8 text-center">
          <button
            onClick={() => handleDateClick(day)}
            className={`
              w-6 h-6 sm:h-7 sm:w-7 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out text-xs sm:text-sm 
              ${
                isSelected
                  ? 'bg-[#6421ec] text-light-text'
                  : 'hover:bg-[#6421ec]/50'
              }
              transition-colors duration-200
            `}
          >
            {day}
          </button>
        </td>
      );

      if ((day + adjustedStartDay) % 7 === 0 || day === daysInMonth) {
        weeks.push(<tr key={`week-${weeks.length}`}>{currentWeek}</tr>);
        currentWeek = [];
      }
    }

    return weeks;
  };

  return (
    <div className="max-w-full sm:max-w-xs mx-auto">
      <div className="flex items-center justify-between w-full mb-1">
        <h3 className="text-sm sm:text-base font-medium font-libre text-dark">
          {format(currentMonth, 'MMMM yyyy')}
        </h3>
        <div>
          <button
            onClick={handlePrevMonth}
            className="p-1 sm:p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Previous month"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={handleNextMonth}
            className="p-1 sm:p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Next month"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-light-text rounded-lg p-3">
        <table className="w-full">
          <thead>
            <tr>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <th
                  key={day}
                  className="text-xs font-medium text-gray-500 pb-2"
                >
                  {isMobile ? day.charAt(0) : day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderCalendarDays()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveDatePicker;

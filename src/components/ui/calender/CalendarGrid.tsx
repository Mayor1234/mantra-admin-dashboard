// import { ScheduleCard } from '../ScheduleCard';

import { ScheduleCard } from './ScheduleCard';

const weekDays = [
  'Mon, 26',
  'Tue, 27',
  'Wed, 28',
  'Thu, 29',
  'Fri, 30',
  'Sat, 31',
  'Sun, 01',
];
const times = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM'];

export default function CalendarGrid() {
  return (
    <div className="grid grid-cols-8 border-t text-sm">
      {/* Header Row */}
      {/* <div className="border-r p-2 bg-gray-100" /> */}
      {weekDays.map((day) => (
        <div
          key={day}
          className="border-r p-2 bg-gray-100 text-center font-semibold"
        >
          {day}
        </div>
      ))}

      {/* Time slots */}
      {times.map((time) => (
        <div key={time}>
          <div className="border-t border-r p-4 bg-gray-50 text-xs text-right">
            {time}
          </div>
          {weekDays.map((_, i) => (
            <div key={i} className="border-t border-r p-2 h-28 relative">
              {/* Example data */}
              {time === '10 AM' && i === 2 && (
                <ScheduleCard
                  title="Job Fair Preparation"
                  time="10 AM"
                  color="#e8f0ff"
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

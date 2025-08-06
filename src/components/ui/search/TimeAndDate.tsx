import { useEffect, useState } from 'react';
import { MdNotifications, MdSettings, MdWbSunny } from 'react-icons/md';

const TimeAndDate = () => {
  const [currentTime, setCurrentTime] = useState<string>(() =>
    new Date().toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center gap-4 text-gray-500">
        {/* Sun Icon */}
        <MdWbSunny className="text-[#969DA6] cursor-pointer" size={16} />

        {/* Notification Icon with Badge */}
        <div className="relative">
          <MdNotifications className="w-5 h-5 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-[#FAAB3C] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
            1
          </span>
        </div>

        {/* Settings Icon */}
        <MdSettings className="w-5 h-5 cursor-pointer" size={16} />

        {/* Language Dropdown Placeholder */}
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 bg-[#D8D8D8] rounded-full"></div>
          <span className="text-sm">ENG</span>
        </div>

        {/* Time */}
        <div className="text-sm text-gray-700 font-medium">{currentTime}</div>
      </div>
    </div>
  );
};

export default TimeAndDate;

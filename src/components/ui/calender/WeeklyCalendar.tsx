import React, { useState } from 'react';
import { Button } from '../button/Button';
import { GoPlus } from 'react-icons/go';

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  bgColor: string;
  color: string;
  row: number;
  height: number;
}

const WeeklyCalendar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState('Employee Wellness Webinar |');
  const [selectedDate] = useState('Friday, August 30');
  const [startTime, setStartTime] = useState('10:30 AM');
  const [endTime, setEndTime] = useState('11:30 AM');

  const timeSlots = ['9 AM', '10 AM', '11 AM', '12 AM', '1 PM'];

  const days = [
    { day: 'Mon', date: '26' },
    { day: 'Tue', date: '27' },
    { day: 'Wed', date: '28', highlighted: true },
    { day: 'Thu', date: '29' },
    { day: 'Fri', date: '30' },
    { day: 'Sat', date: '31' },
    { day: 'Sun', date: '01' },
  ];

  const events: CalendarEvent[] = [
    // Monday
    {
      id: '1',
      title: 'HR Team Meeting',
      time: '08:30 AM',
      bgColor: '#EEF4FE',
      color: '#135CCA',
      row: 1,
      height: 1,
    },
    {
      id: '2',
      title: 'Diversity & Inclusion Workshop',
      time: '10:30 AM',
      bgColor: '#F3EEFE',
      color: '#4E1BD9',
      row: 3,
      height: 1,
    },
    {
      id: '3',
      title: 'Appraisal Deadline',
      time: '12 AM',
      bgColor: '#FEF0DB',
      color: '#BE6F00',
      row: 5,
      height: 1,
    },

    // Tuesday
    {
      id: '4',
      title: 'Interview Round 1 - Senior Software Developer',
      time: '9:30 AM',
      bgColor: '#FEF0DB',
      color: '#BE6F00',
      row: 2,
      height: 1,
    },
    {
      id: '5',
      title: 'Presentation for New Hires',
      time: '11 AM',
      bgColor: '#DDFCE0',
      color: '#0EB01D',
      row: 4,
      height: 1,
    },

    // Wednesday
    {
      id: '6',
      title: 'Interview Round 2 - Data Analyst',
      time: '08:30 AM',
      bgColor: '#F3EEFE',
      color: '#4E1BD9',
      row: 1,
      height: 1,
    },
    {
      id: '7',
      title: 'Job Fair Preparation',
      time: '10 AM',
      bgColor: '#EEF4FE',
      color: '#135CCA',
      row: 3,
      height: 1,
    },
    {
      id: '8',
      title: 'Training Session on Time Management',
      time: '9 AM',
      bgColor: '#FEF0DB',
      color: '#BE6F00',
      row: 2,
      height: 2,
    },
    {
      id: '9',
      title: 'Interview Round 3 - UX Designer',
      time: '2 PM',
      bgColor: '#DDFCE0',
      color: '#0EB01D',
      row: 4,
      height: 1,
    },
    {
      id: '10',
      title: 'Final Interview - HR Manager',
      time: '12 AM',
      bgColor: '#FEF0DB',
      color: '#BE6F00',
      row: 5,
      height: 1,
    },
    {
      id: '11',
      title: 'Diversity & Inclusion Workshop',
      time: '1 PM',
      bgColor: '#F3EEFE',
      color: '#4E1BD9',
      row: 6,
      height: 1,
    },

    // Thursday
    {
      id: '12',
      title: 'HR Team Meeting',
      time: '9:30 AM',
      bgColor: '#EEF4FE',
      color: '#135CCA',
      row: 2,
      height: 1,
    },
    {
      id: '13',
      title: 'Monthly HR Metrics Report Review',
      time: '3:30 PM',
      bgColor: '#DDFCE0',
      color: '#0EB01D',
      row: 6,
      height: 1,
    },

    // Friday
    {
      id: '14',
      title: 'Employee Wellness Webinar',
      time: '10:30 AM',
      bgColor: '#F3EEFE',
      color: '#4E1BD9',
      row: 3,
      height: 1,
    },
  ];

  const getEventsForDay = (dayIndex: number) => {
    const dayEvents: { [key: number]: CalendarEvent } = {};

    switch (dayIndex) {
      case 0: // Monday
        dayEvents[1] = events[0];
        dayEvents[3] = events[1];
        dayEvents[5] = events[2];
        break;
      case 1: // Tuesday
        dayEvents[2] = events[3];
        dayEvents[4] = events[4];
        break;
      case 2: // Wednesday
        dayEvents[1] = events[5];
        dayEvents[2] = events[7];
        dayEvents[3] = events[6];
        dayEvents[4] = events[8];
        dayEvents[5] = events[9];
        dayEvents[6] = events[10];
        break;
      case 3: // Thursday
        dayEvents[2] = events[11];
        dayEvents[6] = events[12];
        break;
      case 4: // Friday
        dayEvents[3] = events[13];
        break;
    }

    return dayEvents;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-gray-600 font-medium">September 2023</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          leftIcon={<GoPlus />}
          onClick={() => setShowModal(true)}
        >
          Add Schedule
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="border border-border rounded-2xl overflow-hidden">
        {/* Days Header */}
        <div className="grid grid-cols-8 w-full">
          <div className="p-4" />
          {days.map((day, index) => (
            <div key={index} className="p-4 text-center border-l border-border">
              <div
                className={`text-sm text-dark w-full py-2 ${
                  day.highlighted
                    ? 'bg-[#AFFFB6] rounded-full flex items-center justify-center mx-auto'
                    : ''
                }`}
              >
                {day.day}, {day.date}
              </div>
            </div>
          ))}
        </div>

        {/* Time Slots and Events */}
        {timeSlots.map((time, timeIndex) => (
          <div
            key={timeIndex}
            className="grid grid-cols-8 border-t border-gray-200 min-h-[120px]"
          >
            {/* Time Column */}
            <div className="p-4 text-sm text-gray-600 font-medium border-r border-gray-200">
              {time}
            </div>

            {/* Day Columns */}
            {days.map((_, dayIndex) => {
              const dayEvents = getEventsForDay(dayIndex);
              const event = dayEvents[timeIndex + 1];

              return (
                <div
                  key={dayIndex}
                  className="border-l border-gray-200 p-2 relative"
                >
                  {event && (
                    <div
                      className={`${event.color} p-3 rounded-lg`}
                      style={{ backgroundColor: `${event.bgColor}` }}
                    >
                      <div className="font-medium font-libre text-base text-gray-900 mb-1">
                        {event.title}
                      </div>
                      <div
                        className={`text-sm font-libre font-medium`}
                        style={{ color: `${event.color}` }}
                      >
                        {event.time}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Add Schedule Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Add Schedule</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              ></button>
            </div>

            <div className="space-y-4">
              {/* Event Title */}
              <div>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Event title"
                />
              </div>

              {/* Color Options */}
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer ring-2 ring-orange-200"></div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-600">
                {/* <Calendar className="w-4 h-4" /> */}
                <span className="text-sm">{selectedDate}</span>
              </div>

              {/* Time */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded text-center"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded text-center"
                  />
                </div>
              </div>

              {/* Link */}
              <div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  {/* <Link className="w-4 h-4 text-blue-500" /> */}
                  <span className="text-sm text-blue-500">
                    https://www.examplewebinars.com/emplo...
                  </span>
                </div>
              </div>

              {/* Add Guest */}
              <button className="flex items-center gap-2 text-gray-600 text-sm">
                {/* <User className="w-4 h-4" /> */}
                Add Guest
              </button>

              {/* Add Description */}
              <button className="flex items-center gap-2 text-gray-600 text-sm">
                {/* <FileText className="w-4 h-4" /> */}
                Add Description
              </button>
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyCalendar;

import { useState, useCallback, useEffect, useMemo } from 'react';
import { CiLock } from 'react-icons/ci';
// import { FiLoader } from 'react-icons/fi';
import { Button } from '../button/Button';
import { GoPlus } from 'react-icons/go';
import Modal from '../modal/Modal';
import { MdOutlineClose } from 'react-icons/md';

interface Event {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  date: Date;
  color: string;
  description?: string;
  guests?: string[];
  meetingLink?: string;
}

interface FormData {
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  color: string;
  description: string;
  guests: string;
  meetingLink: string;
}

interface CalendarDay {
  date: number;
  day: string;
  fullDate: Date;
  isToday: boolean;
  isCurrentMonth: boolean;
}

const initialEvent = [
  {
    id: '1',
    title: 'Jane Feedback',
    startTime: '8:00',
    endTime: '8:30',
    date: new Date(2025, 8, 10), // September 10, 2025
    color: 'bg-purple-200',
  },
  {
    id: '2',
    title: "Abe's Birthday",
    startTime: '8:00',
    endTime: '8:30',
    date: new Date(2025, 8, 11), // September 11, 2025 (changed to current month)
    color: 'bg-blue-200',
  },
  {
    id: '3',
    title: 'Feedback Kajas Project',
    startTime: '8:30',
    endTime: '9:30',
    date: new Date(2025, 8, 12), // September 12, 2025 (changed to current month)
    color: 'bg-purple-200',
  },
  {
    id: '4',
    title: 'Design System',
    startTime: '8:30',
    endTime: '9:30',
    date: new Date(2025, 8, 8), // September 8, 2025 (changed to current month)
    color: 'bg-green-200',
  },
  {
    id: '5',
    title: 'Meet with Anne',
    startTime: '9:00',
    endTime: '9:30',
    date: new Date(2025, 8, 9), // September 9, 2025 (changed to current month)
    color: 'bg-green-200',
  },
  {
    id: '6',
    title: '[no title]',
    startTime: '9:30',
    endTime: '10:00',
    date: new Date(2025, 8, 13), // September 13, 2025 (changed to current month)
    color: 'bg-blue-200',
  },
  {
    id: '7',
    title: 'Discuss Hola Project',
    startTime: '10:30',
    endTime: '11:00',
    date: new Date(2025, 8, 11), // September 11, 2025 (changed to current month)
    color: 'bg-blue-200',
  },
  {
    id: '8',
    title: 'Daily Sync',
    startTime: '11:00',
    endTime: '11:30',
    date: new Date(2025, 8, 9), // September 9, 2025 (changed to current month)
    color: 'bg-gray-200',
  },
  {
    id: '9',
    title: 'Daily Sync',
    startTime: '11:00',
    endTime: '11:30',
    date: new Date(2025, 8, 10), // September 10, 2025 (changed to current month)
    color: 'bg-purple-200',
  },
  {
    id: '10',
    title: 'Discuss Animal Project',
    startTime: '12:00',
    endTime: '12:30',
    date: new Date(2025, 8, 12), // September 12, 2025 (changed to current month)
    color: 'bg-gray-200',
  },
  {
    id: '11',
    title: 'Upload Shots',
    startTime: '11:00',
    endTime: '12:00',
    date: new Date(2025, 8, 13), // September 13, 2025 (changed to current month)
    color: 'bg-purple-200',
  },
  {
    id: '12',
    title: 'Break',
    startTime: '11:30',
    endTime: '12:00',
    date: new Date(2025, 8, 14), // September 14, 2025 (changed to current month)
    color: 'bg-green-200',
  },
];

// Mock API service - COMMENTED OUT FOR NOW
// const eventService = {
//   // Fetch events for a specific month
//   fetchEvents: async (year: number, month: number): Promise<Event[]> => {
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500));

//     // Mock data - replace with actual API call
//     const mockEvents: Event[] = [
//       {
//         id: '1',
//         title: 'Jane Feedback',
//         startTime: '8:00',
//         endTime: '8:30',
//         date: new Date(year, month, 10),
//         color: 'bg-purple-200',
//       },
//       {
//         id: '2',
//         title: "Abe's Birthday",
//         startTime: '8:00',
//         endTime: '8:30',
//         date: new Date(year, month, 13),
//         color: 'bg-blue-200',
//       },
//       {
//         id: '3',
//         title: 'Design System',
//         startTime: '8:30',
//         endTime: '9:30',
//         date: new Date(year, month, 12),
//         color: 'bg-green-200',
//       },
//       {
//         id: '4',
//         title: 'Daily Sync',
//         startTime: '11:00',
//         endTime: '11:30',
//         date: new Date(year, month, 11),
//         color: 'bg-purple-200',
//       },
//     ];

//     // Filter events for the current month only
//     return mockEvents.filter(
//       (event) =>
//         event.date.getFullYear() === year && event.date.getMonth() === month
//     );
//   },

//   // Create a new event
//   createEvent: async (eventData: Omit<Event, 'id'>): Promise<Event> => {
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 300));

//     const newEvent: Event = {
//       ...eventData,
//       id: Date.now().toString(),
//     };

//     return newEvent;
//   },
// };

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8)); // September 2025
  const [events, setEvents] = useState<Event[]>(initialEvent);
  //   const [loading, setLoading] = useState(false); // Set to false to show events immediately
  const [showModal, setShowModal] = useState(false);
  //   const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    title: '',
    date: new Date(),
    startTime: '9:30',
    endTime: '10:00',
    color: 'bg-blue-300',
    description: '',
    guests: '',
    meetingLink: 'https://meet.google.com/czn...',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Generate calendar days for the current month view
  const calendarDays = useMemo((): CalendarDay[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();

    // Get the first day of the week for the month
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay()); // Start from Sunday

    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const days: CalendarDay[] = [];

    // Generate 7 days for week view
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);

      const isToday = date.toDateString() === today.toDateString();
      const isCurrentMonth = date.getMonth() === month;

      days.push({
        date: date.getDate(),
        day: dayNames[date.getDay()],
        fullDate: new Date(date),
        isToday,
        isCurrentMonth,
      });
    }

    return days;
  }, [currentDate]);

  const hours = Array.from({ length: 10 }, (_, i) => i + 8); // 8 AM to 5 PM

  const colorOptions = [
    'bg-red-300',
    'bg-orange-300',
    'bg-yellow-300',
    'bg-green-300',
    'bg-blue-300',
    'bg-purple-300',
  ];

  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8;
    const minute = i % 2 === 0 ? '00' : '30';
    const displayHour = hour > 12 ? hour - 12 : hour;
    const period = hour >= 12 ? 'PM' : 'AM';
    return {
      value: `${hour}:${minute}`,
      display: `${displayHour}:${minute}${period}`,
    };
  }).filter((time) => {
    const hour = parseInt(time.value.split(':')[0]);
    return hour >= 8 && hour <= 17;
  });

  // COMMENTED OUT API FETCH LOGIC - Using static initial events instead
  // const fetchEvents = useCallback(async (date: Date) => {
  //   try {
  //     setLoading(true);
  //     const fetchedEvents = await eventService.fetchEvents(
  //       date.getFullYear(),
  //       date.getMonth()
  //     );
  //     setEvents(fetchedEvents);
  //   } catch (error) {
  //     console.error('Failed to fetch events:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // COMMENTED OUT - Load events when component mounts or month changes
  // useEffect(() => {
  //   fetchEvents(currentDate);
  // }, [currentDate, fetchEvents]);

  // Filter events based on current month when navigating
  useEffect(() => {
    const filteredEvents = initialEvent.filter(
      (event) =>
        event.date.getFullYear() === currentDate.getFullYear() &&
        event.date.getMonth() === currentDate.getMonth()
    );
    setEvents([...filteredEvents]); // Create new array to trigger re-render
  }, [currentDate]);

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // Navigate to today
  const goToToday = () => {
    const today = new Date();
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Event title is required';
    }

    const startHour = parseFloat(formData.startTime.replace(':', '.'));
    const endHour = parseFloat(formData.endTime.replace(':', '.'));

    if (endHour <= startHour) {
      newErrors.endTime = 'End time must be after start time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = (
    field: keyof FormData,
    value: string | number | Date
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleOpenModal = (selectedDate?: Date) => {
    const defaultDate =
      selectedDate ||
      calendarDays.find((d) => d.isCurrentMonth)?.fullDate ||
      new Date();

    setShowModal(true);
    setFormData({
      title: '',
      date: defaultDate,
      startTime: '9:30',
      endTime: '10:00',
      color: 'bg-blue-300',
      description: '',
      guests: '',
      meetingLink: 'https://meet.google.com/czn...',
    });
    setErrors({});
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      title: '',
      date: new Date(),
      startTime: '9:30',
      endTime: '10:00',
      color: 'bg-blue-300',
      description: '',
      guests: '',
      meetingLink: 'https://meet.google.com/czn...',
    });
    setErrors({});
  };

  const handleSaveEvent = () => {
    if (!validateForm()) return;

    const newEvent: Event = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      startTime: formData.startTime,
      endTime: formData.endTime,
      date: formData.date,
      color: formData.color,
      description: formData.description.trim() || undefined,
      guests: formData.guests.trim()
        ? formData.guests.split(',').map((g) => g.trim())
        : undefined,
      meetingLink: formData.meetingLink.trim() || undefined,
    };

    // Add to both current events and initial events array for persistence
    setEvents((prev) => [...prev, newEvent]);
    initialEvent.push(newEvent); // Add to initial array for month navigation

    handleCloseModal();
  };

  const getEventsForDay = (date: Date) => {
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
  };

  const calculateEventPosition = (startTime: string, endTime: string) => {
    const parseTime = (time: string) => {
      const [hour, minute] = time.split(':').map(Number);
      return hour + minute / 60;
    };

    const start = parseTime(startTime);
    const end = parseTime(endTime);
    const duration = end - start;

    const top = (start - 8) * 65; // 60px per hour, starting from 8 AM
    const height = duration * 60;

    return { top: Math.max(0, top), height: Math.max(15, height) };
  };

  const formatEventTime = (startTime: string, endTime: string) => {
    const formatTime = (time: string) => {
      const [hour, minute] = time.split(':').map(Number);
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const period = hour >= 12 ? 'pm' : 'am';
      return `${displayHour}:${minute.toString().padStart(2, '0')}${period}`;
    };

    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  const formatMonthYear = () => {
    return currentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex justify-between items-center space-x-6 w-full">
          <h1 className="text-xl text-dark-text font-libre font-semibold">
            Calendar
          </h1>
          <div className="flex items-center space-x-4">
            <p className="text-lg font-medium w-36">{formatMonthYear()}</p>
            <div className="flex items-center space-x-1">
              <button
                onClick={goToPreviousMonth}
                className="p-1 hover:bg-gray-100 rounded-full cursor-pointer"
                // disabled={loading}
              >
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
              <Button
                variant="primary"
                size="sm"
                onClick={goToToday}
                className="py-2"
              >
                Today
              </Button>
              <button
                onClick={goToNextMonth}
                className="p-1 hover:bg-gray-100 rounded-full cursor-pointer"
                // disabled={loading}
              >
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

            <Button
              variant="primary"
              size="sm"
              leftIcon={<GoPlus size={16} />}
              onClick={() => handleOpenModal()}
              className="py-2"
            >
              Add Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex w-full border border-gray-200 rounded-xl">
        {/* Time column */}
        <div className="w-20 border-r border-gray-200">
          <div className="h-16 text-sm text-gray-600" />
          {hours.map((hour) => (
            <div
              key={hour}
              className="h-16 border-b border-gray-200 last:border-b-0 text-sm text-dark px-3"
            >
              {hour > 12 ? hour - 12 : hour} {hour >= 12 ? 'PM' : 'AM'}
            </div>
          ))}
        </div>

        {/* Days columns */}
        {calendarDays.map((day) => (
          <div
            key={day.fullDate.toISOString()}
            className="flex-1 border-r border-gray-200 last:border-r-0"
          >
            {/* Day header */}
            <div className="h-16 border-b border-gray-200 flex flex-col items-center justify-center">
              <div
                className={`text-xs font-medium mb-1 ${
                  day.isCurrentMonth ? 'text-gray-800' : 'text-gray-400'
                }`}
              >
                {day.day} {day.date}
              </div>
              {day.isToday && (
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {day.date}
                </div>
              )}
            </div>

            {/* Day content */}
            <div
              className="relative cursor-pointer hover:bg-gray-50"
              onClick={() => handleOpenModal(day.fullDate)}
            >
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="h-16 border-b border-gray-200 last:border-b-0"
                />
              ))}

              {/* Events */}
              {getEventsForDay(day.fullDate).map((event) => {
                const { top, height } = calculateEventPosition(
                  event.startTime,
                  event.endTime
                );
                return (
                  <div
                    key={event.id}
                    className={`absolute left-1 right-1 ${event.color} rounded text-sm p-1 shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow flex flex-col items-center justify-center`}
                    style={{
                      top: `${top}px`,
                      height: `${height}px`,
                      zIndex: 10,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle event click (edit event)
                    }}
                  >
                    <div className="font-medium text-dark capitalize truncate">
                      {event.title}
                    </div>
                    <div className="text-gray-600">
                      {formatEventTime(event.startTime, event.endTime)}
                    </div>
                  </div>
                );
              })}

              {/* Loading overlay - commented out since we're not using API */}
              {/* {loading && (
                <div className="absolute inset-0 bg-gray-50 bg-opacity-50 flex items-center justify-center h-full">
                  <FiLoader
                    size={16}
                    className="animate-spin text-blue-500 -mt-60"
                  />
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>

      {/* Add Schedule Modal */}
      {showModal && (
        <Modal isOpen={showModal}>
          <div className="bg-white rounded-lg w-96 p-6 max-h-[90vh] overflow-y-auto mr-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-dark">Add Schedule</h2>
              <Button
                variant="secondary"
                size="sm"
                className="py-2"
                onClick={handleCloseModal}
                leftIcon={<MdOutlineClose size={14} />}
              >
                Cancel
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Add event title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  //   disabled={saving}
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                )}
              </div>

              <div>
                <input
                  type="date"
                  value={formData.date.toISOString().split('T')[0]}
                  onChange={(e) =>
                    handleInputChange('date', new Date(e.target.value))
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  //   disabled={saving}
                />
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 flex-1">
                  <CiLock size={16} className="text-gray-400" />
                  <select
                    value={formData.startTime}
                    onChange={(e) =>
                      handleInputChange('startTime', e.target.value)
                    }
                    className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
                    // disabled={saving}
                  >
                    {timeOptions.map((time) => (
                      <option key={time.value} value={time.value}>
                        {time.display}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1">
                  <select
                    value={formData.endTime}
                    onChange={(e) =>
                      handleInputChange('endTime', e.target.value)
                    }
                    className={`w-full border rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500 ${
                      errors.endTime ? 'border-red-500' : 'border-gray-300'
                    }`}
                    // disabled={saving}
                  >
                    {timeOptions.map((time) => (
                      <option key={time.value} value={time.value}>
                        {time.display}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors.endTime && (
                <p className="text-red-500 text-xs">{errors.endTime}</p>
              )}

              <div>
                <input
                  type="text"
                  placeholder="Add guests (comma-separated)"
                  value={formData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  //   disabled={saving}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Meeting link"
                  value={formData.meetingLink}
                  onChange={(e) =>
                    handleInputChange('meetingLink', e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  //   disabled={saving}
                />
              </div>

              <div>
                <textarea
                  placeholder="Add description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange('description', e.target.value)
                  }
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                  //   disabled={saving}
                />
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Event Color</p>
                <div className="flex space-x-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleInputChange('color', color)}
                      className={`w-8 h-8 ${color} rounded-full cursor-pointer border-2 ${
                        formData.color === color
                          ? 'border-gray-800'
                          : 'border-gray-300'
                      } hover:border-gray-600 transition-colors`}
                      //   disabled={saving}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full space-x-5 mt-6">
              <Button variant="outline" size="md" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" size="md" onClick={handleSaveEvent}>
                {/* {saving && <FiLoader size={14} className="animate-spin" />} */}
                <span>Save Event</span>
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CalendarComponent;

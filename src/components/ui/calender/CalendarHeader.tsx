import { GoPlus } from 'react-icons/go';
import { Button } from '../button/Button';

export default function CalendarHeader() {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center justify-between w-full gap-5">
        <h1 className="text-xl text-dark-text font-libre font-semibold">
          Calendar
        </h1>
        <div className="flex gap-3 items-center">
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
          <Button
            variant="primary"
            size="md"
            leftIcon={<GoPlus />}
            // onClick={() => setShowModal(true)}
          >
            Add Schedule
          </Button>
        </div>
      </div>
    </div>
  );
}

// <div className="flex justify-between items-center px-4 py-3">
//   <h1 className="text-2xl font-bold">Calendar</h1>
//   <div className="flex gap-2 items-center">
//     <button className="bg-gray-200 px-3 py-1 rounded">←</button>
//     <span className="text-gray-600">September 2023</span>
//     <button className="bg-gray-200 px-3 py-1 rounded">→</button>
//     <button
//       // onClick={onAdd}
//       className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-full"
//     >
//       + Add Schedules
//     </button>
//   </div>
// </div>

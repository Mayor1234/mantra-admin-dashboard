export default function CalendarHeader({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-b">
      <h1 className="text-2xl font-bold">Calendar</h1>
      <div className="flex gap-2 items-center">
        <button className="bg-gray-200 px-3 py-1 rounded">←</button>
        <span className="text-gray-600">September 2023</span>
        <button className="bg-gray-200 px-3 py-1 rounded">→</button>
        <button
          onClick={onAdd}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          + Add Schedule
        </button>
      </div>
    </div>
  );
}

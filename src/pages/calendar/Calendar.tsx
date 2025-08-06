// import { useState } from 'react';
// import CalendarHeader from '../../components/ui/calender/CalendarHeader';
// import CalendarGrid from '../../components/ui/calender/CalendarGrid';
import WeeklyCalendar from '../../components/ui/calender/WeeklyCalendar';

// import { ScheduleCard } from '../../components/ui/calender/ScheduleCard';

const Calender = () => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <CalendarHeader onAdd={() => setShowModal(true)} />
      <CalendarGrid /> */}
      <WeeklyCalendar />
    </div>
  );
};

export default Calender;

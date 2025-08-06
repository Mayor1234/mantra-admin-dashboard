type Props = {
  title: string;
  time: string;
  color: string;
};

export const ScheduleCard: React.FC<Props> = ({ title, time, color }) => (
  <div
    className={`p-2 text-sm rounded-md text-black font-medium mb-2`}
    style={{ backgroundColor: color }}
  >
    <div>{title}</div>
    <div className="text-xs text-blue-700">{time}</div>
  </div>
);

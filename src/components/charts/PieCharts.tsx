import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface PieChartsProps {
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
  height: string;
  content?: string;
  color?: string; // Optional prop for custom color
}

const PieCharts: React.FC<PieChartsProps> = ({
  innerRadius = 50,
  outerRadius = 70,
  percent = 90,
  height,
  content,
  color,
}) => {
  const attendanceValue = percent ? percent : 76; // Default value if percent is not provided

  const data = [
    { name: 'Attendance', value: attendanceValue },
    { name: 'Remaining', value: 100 - attendanceValue },
  ];

  return (
    <div
      className="flex items-center justify-center w-full rounded-full relative"
      style={{ height }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={45}
            endAngle={360 + 45}
            cornerRadius={3}
            dataKey="value"
          >
            {data.map((_, index) => {
              if (index === 1) {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={'#fafafa'}
                    stroke="#fafafa"
                  />
                );
              }
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={color}
                  stroke={color}
                  strokeWidth={3}
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Text */}
      <div className="absolute text-center">
        <div className="text-sm font-bold text-[#111827]">
          {attendanceValue}%
        </div>
        {content && (
          <div className="text-xs text-[#6B7280] uppercase">{content}</div>
        )}
      </div>
    </div>
  );
};

export default PieCharts;

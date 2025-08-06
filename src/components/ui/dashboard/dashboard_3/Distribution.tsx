import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Development', value: 54, color: '#22C55E' }, // Green
  { name: 'Sales & Marketing', value: 38, color: '#8B5CF6' }, // Purple
  { name: 'Project Management', value: 8, color: '#F59E0B' }, // Orange
];

const totalEmployees = 3552;

const DepartmentDistribution = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl">
      {/* Left Pie */}
      <div className="relative w-44 h-44">
        <PieChart width={176} height={176}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius={65}
            outerRadius={80}
            cornerRadius={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={entry.color}
                strokeWidth={8}
              />
            ))}
          </Pie>
        </PieChart>
        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <div className="text-xl font-semibold text-dark mb-2">
            {totalEmployees}
          </div>
          <div className="text-xs text-dark/80">
            <p>ALL EMPLOYEES</p>
          </div>
        </div>
      </div>

      {/* Right Details */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {data.map((dept, index) => (
          <div key={index}>
            <p className="text-xs font-medium text-dark mb-1">
              {dept.name.toUpperCase()}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-dark">
                {dept.value}%
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 bg-white rounded-full mt-1">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${dept.value}%`,
                  backgroundColor: dept.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentDistribution;

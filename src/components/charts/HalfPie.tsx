import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  //   Tooltip,
  //   Sector,
  //   Label,
} from 'recharts';

const data = [
  { name: 'Part Time', value: 33 },
  { name: 'Full Time', value: 67 },
];

const COLORS = ['#FDBA74', '#22C55E']; // orange, green

// const RADIAN = Math.PI / 180;

// const renderCustomizedLabelLine = ({
//   cx,
//   cy,
//   midAngle,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = outerRadius + 10;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <path
//       d={`M${x},${y}L${x + (x > cx ? 20 : -20)},${y}`}
//       stroke={COLORS[index]}
//       fill="none"
//     />
//   );
// };

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = outerRadius + 30;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="#000"
//       textAnchor={x > cx ? 'start' : 'end'}
//       dominantBaseline="central"
//       fontSize={14}
//     >
//       {`${Math.round(percent * 100)}%`}
//     </text>
//   );
// };

export default function HalfPie() {
  return (
    <div>
      <div className="h-24 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                background: '#f4f5f7',
                border: 'none',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                color: 'black',
                fontSize: '12px',
                fontFamily: 'Mulish, sans-serif',
                fontWeight: '500',
                position: 'relative',
                top: -20,
                zIndex: 999,
              }}
            />
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              //   labelLine={renderCustomizedLabelLine}
              //   label={renderCustomizedLabel}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  stroke={COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Legend */}
        <div className="gap-1 mt-2 absolute z-0 bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="flex justify-center items-center gap-2 text-xs mb-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#22C55E' }}
            ></span>
            <span className="text-dark">Full Time</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#FDBA74' }}
            ></span>
            <span className="text-dark">Part Time</span>
          </div>
        </div>
      </div>
    </div>
  );
}

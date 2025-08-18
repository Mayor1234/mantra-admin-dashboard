import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  {
    department: 'Operations',
    allEmployees: 60,
    terminated: 10,
    newHires: 10,
  },
  {
    department: 'Admin',
    allEmployees: 50,
    terminated: 10,
    newHires: 20,
  },
  {
    department: 'Marketing',
    allEmployees: 40,
    terminated: 10,
    newHires: 10,
  },
  {
    department: 'Technical Team',
    allEmployees: 60,
    terminated: 10,
    newHires: 10,
  },
  {
    department: 'Guards',
    allEmployees: 40,
    terminated: 10,
    newHires: 10,
  },
];

const colors = {
  all: '#9368F7', // purple
  terminated: '#FDA73C', // orange
  newHires: '#22C55E', // green
};

const HorizontalBarChart = () => {
  return (
    <div className="w-full h-full bg-white py-2 px-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          width={400}
          height={400}
          barCategoryGap="25%"
          barGap={10}
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: '500',
            color: 'black',
          }}
          barSize={20}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid vertical={true} horizontal={false} stroke="#e5e7eb" />

          <XAxis
            type="number"
            domain={[40, 100]}
            tickFormatter={(v) => `${v}%`}
            width={10}
            tick={{
              fontSize: 14,
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
            }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            dataKey="department"
            type="category"
            width={160}
            tickLine={false}
            axisLine={false}
            tickMargin={16}
            tick={({ x, y, payload }) => (
              <text
                x={x - 10} // shift text left from Y axis
                y={y}
                dy={4}
                textAnchor="end" // aligns right so text ends at (x - 10)
                fill="#374151"
                fontSize={14}
                fontFamily="Libre, sans-serif"
              >
                {payload.value}
              </text>
            )}
          />
          <Tooltip
            formatter={(value) => `${value}%`}
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
            }}
            labelStyle={{ display: 'none' }}
            cursor={{ fill: 'transparent' }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{
              paddingTop: '20px',
              fontSize: '12px',
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
              display: 'flex',
              justifyContent: 'center',
              gap: '25px',
              color: 'black',
            }}
            content={(props) => {
              const { payload } = props;
              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                    paddingBottom: '10px',
                  }}
                >
                  {payload?.map((entry, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: entry.color,
                        }}
                      />
                      <span
                        style={{
                          color: 'black',
                          fontSize: '12px',
                          fontFamily: 'Mulish, sans-serif',
                          fontWeight: '500',
                        }}
                      >
                        {entry.value}
                      </span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Bar
            dataKey="allEmployees"
            name="All Employee"
            stackId="a"
            fill={colors.all}
            radius={[50, 50, 50, 50]}
            barSize={10}
          />
          <Bar
            dataKey="terminated"
            name="Terminated"
            stackId="a"
            fill={colors.terminated}
            radius={[50, 50, 50, 50]}
            barSize={10}
          />
          <Bar
            dataKey="newHires"
            name="New Hires"
            stackId="a"
            fill={colors.newHires}
            radius={[50, 50, 50, 50]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalBarChart;

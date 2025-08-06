import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 7000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 8000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 5000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 6780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 8890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 7390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 9490,
    pv: 4300,
    amt: 2100,
  },
];

export const AreaCharts = () => {
  return (
    <div className="w-full h-full text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
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
          />

          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#FAAB3C"
            fill="#F8D8AB"
          />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#4E1BD9"
            fill="#DDCBFC"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

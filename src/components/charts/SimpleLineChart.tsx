import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Sept 01',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sept 02',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Sept 03',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Sept 04',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Sept 05',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sept 06',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sept 07',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const SimpleLineChart = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          width={400}
          height={400}
          barCategoryGap="25%"
          barGap={30}
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: '500',
            color: 'black',
          }}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <Tooltip
            contentStyle={{
              background: '#f4f5f7',
              border: 'none',
            }}
            labelStyle={{ display: 'none' }}
            cursor={false}
          />
          <CartesianGrid vertical={false} horizontal={true} stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tick={{
              fontSize: 10,
              width: 100,
              height: 20,
              textAnchor: 'middle',
              fill: '#6B7280',
              fontStyle: 'normal',
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
              color: '#000000',
            }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={18}
            tick={{
              fontSize: 10,
              width: 100,
              height: 20,
              textAnchor: 'middle',
              fill: '#6B7280',
              fontStyle: 'normal',
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
              color: '#000000',
            }}
          />
          <Tooltip />
          <Legend iconType="circle" iconSize={5} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#9368F7"
            activeDot={{ r: 8 }}
            dot={false}
            strokeWidth={1.5}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            dot={false}
            strokeWidth={1.5}
          />
          <Line
            type="monotone"
            dataKey="amt"
            stroke="#faab3c"
            dot={false}
            strokeWidth={1.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;

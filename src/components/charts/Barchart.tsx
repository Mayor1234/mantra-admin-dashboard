import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 8300,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 5100,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 8400,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 6090,
    pv: 3800,
    amt: 7300,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 8700,
    amt: 5500,
  },
];

const Barchart = () => {
  return (
    <div className="w-full h-full text-xs">
      <ResponsiveContainer width="99%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 3,
          }}
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: '500',
            color: 'black',
          }}
          barCategoryGap="10%"
          barGap={5}
          barSize={15}
        >
          <CartesianGrid vertical={false} horizontal={true} stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{
              fontSize: 11,
              width: 100,
              height: 20,
              textAnchor: 'middle',
              fill: '#6B7280',
              fontStyle: 'normal',
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
              color: '#f7f8f9',
            }}
            tickLine={false}
            axisLine={true}
          />
          <YAxis
            tick={{
              fontSize: 14,
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
            }}
            tickLine={false}
            axisLine={false}
          />
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
            }}
            labelStyle={{ display: 'none' }}
            cursor={{ fill: 'transparent' }}
          />
          <Legend iconType="circle" iconSize={8} />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={
              <Rectangle
                fill="pink"
                stroke="blue"
                strokeWidth="2"
                radius={[50, 50, 0, 0]}
              />
            }
            radius={[50, 50, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={
              <Rectangle
                fill="gold"
                stroke="purple"
                strokeWidth="2"
                radius={[50, 50, 0, 0]}
              />
            }
            radius={[50, 50, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="amt"
            fill="#FAAB3C"
            activeBar={
              <Rectangle
                fill="black"
                stroke="purple"
                strokeWidth="2"
                radius={[50, 50, 0, 0]}
              />
            }
            radius={[50, 50, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;

import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
  YAxis,
} from 'recharts';

const data = [
  { date: 'Aug 24', name: 'Aug 24', value: 10 },
  { date: 'Aug 25', name: 'Aug 25', value: 38 },
  { date: 'Aug 26', name: 'Aug 26', value: 28 },
  { date: 'Aug 27', name: 'Aug 27', value: 34 },
  { date: 'Aug 28', name: 'Aug 28', value: 21 },
  { date: 'Aug 29', name: 'Aug 29', value: 30 },
];

const AreaChartsGeneric = () => {
  return (
    <div className="w-full h-full text-xs">
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FEF0DB" />
              <stop offset="100%" stopColor="#FFDADA00" />
            </linearGradient>
          </defs>
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
            axisLine={false}
          />
          <YAxis
            tick={{
              fontSize: 12,
              fontFamily: 'Mulish, sans-serif',
              fontWeight: '500',
            }}
            tickLine={false}
            axisLine={false}
            tickMargin={20}
          />
          <CartesianGrid vertical={false} horizontal={true} stroke="#e5e7eb" />
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
          <Area
            type="monotone"
            dataKey="value"
            fill="url(#gradientFill)"
            stroke="#FAAB3C"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartsGeneric;

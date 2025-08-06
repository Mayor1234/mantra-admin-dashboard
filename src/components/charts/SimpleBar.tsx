import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    amt: 2100,
  },
];

type ColorType = {
  pry: string;
  sec: string;
};

const SimpleBar: React.FC<ColorType> = ({ pry, sec }) => {
  return (
    <div className="w-full h-full text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={40}
          height={20}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          style={{
            fontFamily: 'Mulish, sans-serif',
            fontWeight: '500',
            color: 'black',
          }}
        >
          <Bar dataKey="uv" fill={pry} radius={[3, 3, 2, 2]} />
          <Bar dataKey="pv" fill={sec} radius={[3, 3, 2, 2]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBar;

import {
  ScatterChart,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  ResponsiveContainer,
  type ScatterProps,
} from 'recharts';

const data = [
  {
    x: 100,
    y: 300,
    color: '#3B82F6',
    ring: '#BFDBFE',
    address: '1234 Innovation Avenue,\nSeattle, WA, USA',
  },
  {
    x: 150,
    y: 200,
    color: '#9333EA',
    ring: '#E9D5FF',
    address: '1234 Innovation Avenue,\nSeattle, WA, USA',
  },
  {
    x: 200,
    y: 100,
    color: '#9333EA',
    ring: '#E9D5FF',
    address: '1234 Innovation Avenue,\nSeattle, WA, USA',
  },
  {
    x: 100,
    y: 200,
    color: '#F59E0B',
    ring: '#FDE68A',
    address: '1234 Innovation Avenue,\nSeattle, WA, USA',
  },

  {
    x: 40,
    y: 300,
    color: '#22C55E',
    ring: '#BBF7D0',
    address: '1234 Innovation Avenue,\nSeattle, WA, USA',
  },
  {
    x: 200,
    y: 300,
    color: '#22C55E',
    ring: '#BBF7D0',
    address: '1234 Innovation Avenue,\nSeattle, WA, USA',
  },
];

interface TooltipProps {
  active?: boolean;
  payload?: { payload: { address?: string } }[];
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (!active || !payload || !payload.length || !payload[0].payload.address)
    return null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow text-center text-sm font-medium relative">
      <div>{payload[0].payload.address}</div>
      <div
        className="absolute w-2 h-2 rotate-45 bg-white border-b border-r border-gray-200 left-1/2 transform -translate-x-1/2 -bottom-1"
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

const OfficeDistributionChart = () => {
  return (
    <div className="w-full p-3 h-44 overflow-y-auto">
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis type="number" dataKey="x" hide domain={[0, 200]} />
          <YAxis type="number" dataKey="y" hide domain={[0, 300]} />
          <ZAxis type="number" range={[60]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
            position={{ x: 10, y: 100 }}
          />
          <Scatter
            data={data}
            shape={(props: ScatterProps) => {
              const { cx, cy, payload } = props as ScatterProps & {
                payload: { ring: string; color: string };
              };
              return (
                <g>
                  {/* Outer ring */}
                  <circle cx={cx} cy={cy} r={12} fill={payload.ring} />
                  {/* Inner dot */}
                  <circle cx={cx} cy={cy} r={6} fill={payload.color} />
                </g>
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OfficeDistributionChart;

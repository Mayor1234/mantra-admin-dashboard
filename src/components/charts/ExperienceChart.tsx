import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

type ExperienceData = {
  name: string;
  value: number;
  color: string;
};

type Props = {
  data: ExperienceData[];
  centerText: string;
};

const ExperienceDonutChart: React.FC<Props> = ({ data, centerText }) => {
  return (
    <ResponsiveContainer width={140} height={140}>
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          innerRadius={45}
          outerRadius={65}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key={`slice-${index}`} fill={entry.color} />
          ))}
          <Label
            value={centerText}
            position="center"
            content={({ viewBox }) => {
              const { cx, cy } = viewBox as { cx: number; cy: number };
              return (
                <g>
                  <text
                    x={cx}
                    y={cy - 6}
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="600"
                    fontFamily="Libre, sans-serif"
                    fill="#1A1A1A"
                  >
                    {centerText}
                  </text>
                  <text
                    x={cx}
                    y={cy + 14}
                    textAnchor="middle"
                    fontSize="13"
                    fill="#555"
                  >
                    Candidates
                  </text>
                </g>
              );
            }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExperienceDonutChart;

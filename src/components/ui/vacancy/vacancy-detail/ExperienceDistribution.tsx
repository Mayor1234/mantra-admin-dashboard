import ExperienceDonutChart from '../../../charts/ExperienceChart';

const experienceData = [
  { name: '< 1 year', value: 24, color: '#FAAB3C' },
  { name: '1–3 years', value: 55, color: '#2C7BE5' },
  { name: '3+ years', value: 45, color: '#A56EFF' },
];

const ExperienceDistributionCard = () => {
  const total = experienceData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-3 w-full max-w-sm">
      <h2 className="text-lg font-semibold mb-3">Experience Distribution</h2>
      <div className="flex items-center justify-between w-full">
        <div className="w-20">
          <ExperienceDonutChart
            data={experienceData}
            centerText={String(total)}
          />
        </div>
        <ul className="text-xs space-y-2 ml-2">
          {experienceData.map((item, i) => (
            <li key={i} className="flex flex-col">
              <p className="text-sm font-libre font-medium text-dark">
                {item.value}
              </p>
              <div className="flex items-center gap-1">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-dark text-xs">{item.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDistributionCard;

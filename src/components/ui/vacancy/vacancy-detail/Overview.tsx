import { Card } from './OverviewCard';

const Overview = () => {
  return (
    <div className="p-3">
      <h3 className="text-lg text-dark font-libre mb-2">Overview</h3>
      <div className="grid grid-cols-2 gap-3">
        <Card title="Vacancy view" value="569" delta="12%" color="green" />
        <Card title="Total Applications" value="124" delta="12%" color="blue" />
        <Card title="Shortlisted" value="32" delta="12%" color="purple" />
        <Card title="Awaiting Review" value="92" delta="12%" color="yellow" />
      </div>
    </div>
  );
};

export default Overview;

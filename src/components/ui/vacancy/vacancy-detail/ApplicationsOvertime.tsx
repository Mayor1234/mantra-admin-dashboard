import AreaChartsGeneric from '../../../charts/AreaChartsGeneric';

const ApplicationsOvertime = () => {
  return (
    <div className="p-3">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg text-dark font-libre">
            Applications Over Time
          </h3>
          <p className="text-xs px-3 py-1 bg-[#fff] rounded-3xl font-mulish">
            Nov, 01 07
          </p>
        </div>
        <div className="w-full h-full">
          <AreaChartsGeneric />
        </div>
      </div>
    </div>
  );
};

export default ApplicationsOvertime;

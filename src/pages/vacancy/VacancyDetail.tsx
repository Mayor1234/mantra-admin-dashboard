import { useState } from 'react';
import Overview from '../../components/ui/vacancy/vacancy-detail/Overview';
import ApplicationsOvertime from '../../components/ui/vacancy/vacancy-detail/ApplicationsOvertime';
import ExperienceDistribution from '../../components/ui/vacancy/vacancy-detail/ExperienceDistribution';
import JobDescription from '../../components/ui/vacancy/vacancy-detail/JobDescription';
import RecentActivities from '../../components/ui/vacancy/vacancy-detail/RecentActivities';

const menu = [
  {
    id: 1,
    title: 'Applicant',
  },
  {
    id: 2,
    title: 'Job Detail',
  },
];

const VacancyDetail = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu[1]);

  return (
    <div>
      <div className="flex items-center gap-5 mb-3">
        <h2 className="text-xl text-dark-text font-libre font-semibold">
          Senior Security Coordinator
        </h2>
        <div className="flex items-center space-x-3">
          {menu.map((item, i) => (
            <button
              type="button"
              key={i}
              className={`text-[#17243E] text-xs font-libre px-5 py-1.5 rounded-full hover:bg-[#1F74EC]/70 hover:text-light-text cursor-pointer transition-all duration-300 ease-linear ${
                selectedCategory.id === item.id
                  ? 'bg-[#1F74EC] text-[#fff] hover:text-[#17243E]'
                  : 'bg-[#EEF4FE]'
              }`}
              onClick={() => setSelectedCategory(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className="grid w-full h-afull grid-cols-[repeat(9,minmax(100px,1fr))] grid-rows-[repeat(3,minmax(190px,auto))] auto-cols-[minmax(200px,auto)] auto-rows-[minmax(100px,auto)] gap-2.5 [grid-auto-flow:dense]">
        <div className="col-span-3 row-span-1 border border-border rounded-2xl overflow-hidden">
          <Overview />
        </div>
        <div className="col-span-4 row-span-1 border border-border rounded-2xl overflow-hidden">
          <ApplicationsOvertime />
        </div>
        <div className="col-span-2 row-span-1 border border-border rounded-2xl overflow-hidden">
          <ExperienceDistribution />
        </div>
        <div className="col-span-6 row-span-2 border border-border rounded-2xl overflow-hidden">
          <JobDescription />
        </div>
        <div className="col-span-3 row-span-2 border border-border rounded-2xl overflow-hidden">
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default VacancyDetail;

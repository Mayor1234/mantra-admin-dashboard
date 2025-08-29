import { CiImport } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';
import { Button } from '../button/Button';

const departmentButton = [
  {
    label: 'All Department',
    isActive: true,
  },
  {
    label: 'Development',
    isActive: false,
  },
  {
    label: 'Sales & Marketing',
    isActive: false,
  },
  {
    label: 'Analytics & Data',
    isActive: false,
  },
  {
    label: 'Project Management',
    isActive: false,
  },
  {
    label: 'Support',
    isActive: false,
  },
];

const positionTypeButton = [
  {
    label: 'All Position',
    isActive: true,
  },
  {
    label: 'UI/UX Designer',
    isActive: false,
  },
  {
    label: 'PM',
    isActive: false,
  },
  {
    label: 'React Developer',
    isActive: false,
  },
  {
    label: 'QA',
    isActive: false,
  },
  {
    label: 'Data Analyts',
    isActive: false,
  },
  {
    label: 'Java Developer',
    isActive: false,
  },
  {
    label: 'DevOps',
    isActive: false,
  },
];

const workExperienceButton = [
  {
    label: 'Any Experience',
    isActive: true,
  },
  {
    label: 'Less than 1year',
    isActive: false,
  },
  {
    label: '1-2years',
    isActive: false,
  },
  {
    label: '2-3years',
    isActive: false,
  },
  {
    label: '3-5years',
    isActive: false,
  },
  {
    label: 'More than 5years',
    isActive: false,
  },
];
const locationeButton = [
  {
    label: 'Any Location',
    isActive: true,
  },
  {
    label: 'United State',
    isActive: false,
  },
  {
    label: 'Ukraine',
    isActive: false,
  },
  {
    label: 'Germany',
    isActive: false,
  },
  {
    label: 'France',
    isActive: false,
  },
  {
    label: 'Remote',
    isActive: false,
  },
];

const VacancyFilter = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5 px-3">
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<CiImport size={14} />}
          className="py-2"
        >
          Import
        </Button>
        <Button
          variant="primary"
          size="sm"
          leftIcon={<GoPlus size={14} />}
          className="py-2"
        >
          Add Vacancy
        </Button>
      </div>
      <div className="rounded-2xl border border-[#E0E4EA] p-3">
        <div className="text-dark flex items-center justify-between w-full mb-3">
          <h3 className="font-libre text-base">Vacancies Filter</h3>
          <button
            type="button"
            className="text-xs border-b border-[#343942] cursor-pointer"
          >
            CLEAR ALL
          </button>
        </div>
        <div className="mb-3 border-b border-[#E0E4EA] pb-3">
          <p className="mb-1 text-sm text-dark font-libre">Department</p>
          <div className="flex flex-wrap gap-2">
            {departmentButton.map((item, i) => (
              <button
                type="button"
                key={i}
                className={`border border-[#E0E4EA] text-[#343942] text-xs font-libre px-3 py-1 rounded-full ${
                  item.isActive && 'bg-[#1F74EC] text-[#fff]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-3 border-b border-[#E0E4EA] pb-3">
          <p className="mb-1 text-sm text-dark font-libre">Position Type</p>
          <div className="flex flex-wrap gap-2">
            {positionTypeButton.map((item, i) => (
              <button
                type="button"
                key={i}
                className={`border border-[#E0E4EA] text-[#343942] text-xs font-libre px-3 py-1 rounded-full ${
                  item.isActive && 'bg-[#1F74EC] text-[#fff]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-3 border-b border-[#E0E4EA] pb-3">
          <p className="mb-1 text-sm text-dark font-libre">Position Type</p>
          <div className="flex flex-wrap gap-2">
            {workExperienceButton.map((item, i) => (
              <button
                type="button"
                key={i}
                className={`border border-[#E0E4EA] text-[#343942] text-xs font-libre px-3 py-1 rounded-full ${
                  item.isActive && 'bg-[#1F74EC] text-[#fff]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <p className="mb-1 text-sm text-dark font-libre">Location</p>
          <div className="flex flex-wrap gap-2">
            {locationeButton.map((item, i) => (
              <button
                type="button"
                key={i}
                className={`border border-[#E0E4EA] text-[#343942] text-xs font-libre px-3 py-1 rounded-full ${
                  item.isActive && 'bg-[#1F74EC] text-[#fff]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyFilter;

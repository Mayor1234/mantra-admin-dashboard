import { useState } from 'react';
import { Button } from '../../components/ui/button/Button';
import { GoPlus } from 'react-icons/go';
import ApplicantKanbanBoard from '../../components/ui/vacancy/vacancy-list/VacancyList';

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

const VacancyList = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu[0]);

  return (
    <div>
      <div>
        <div className="flex items-center gap-5 mb-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-5 ">
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
            <div>
              <Button variant="primary" size="sm" leftIcon={<GoPlus />}>
                Add Candidate
              </Button>
            </div>
          </div>
        </div>
        <div>
          <ApplicantKanbanBoard />
        </div>
      </div>
    </div>
  );
};

export default VacancyList;

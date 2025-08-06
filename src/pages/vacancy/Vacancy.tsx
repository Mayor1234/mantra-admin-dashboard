import { useState } from 'react';
import VacancyFilter from '../../components/ui/vacancy/VacancyFilter';
import { MdGridView } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa6';
import VacanciesTable from '../../components/ui/vacancy/VacanciesTable';
import VacanciesGrid from '../../components/ui/vacancy/VacanciesGrid';

const menu = [
  {
    id: 1,
    title: 'All Vacancies',
  },
  {
    id: 2,
    title: 'Open',
  },
  {
    id: 3,
    title: 'Completed',
  },
  {
    id: 4,
    title: 'In Progress',
  },
];

type ViewScreen = 'list' | 'grid';

const Vacancy = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu[0]);
  const [activeViewScreen, setActiveViewScreen] = useState<ViewScreen>('list');

  return (
    <div>
      <div className="vacancy-container h-full w-full">
        <div className="vacancy-box1 overflow-hidden h-full w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-5">
              <h2 className="text-xl text-dark-text font-libre font-semibold">
                Vacancies
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
              {activeViewScreen === 'list' ? (
                <button
                  type="button"
                  className="flex items-center gap-2 text-[#17243E] transition-all duration-300 ease-linear hover:text-[#17243E]/50 cursor-pointer"
                  onClick={() => setActiveViewScreen('grid')}
                >
                  <MdGridView />
                  <p className="text-sm font-libre">Card View</p>
                </button>
              ) : (
                <button
                  type="button"
                  className="flex items-center gap-2 text-[#17243E] transition-all duration-300 ease-linear hover:text-[#17243E]/50 cursor-pointer"
                  onClick={() => setActiveViewScreen('list')}
                >
                  <FaListUl />
                  <p className="text-sm font-libre">List View</p>
                </button>
              )}
            </div>
          </div>
          <div>
            {activeViewScreen === 'list' ? (
              <div className="h-full w-full">
                <VacanciesTable />
              </div>
            ) : (
              <div className="h-full w-full">
                <VacanciesGrid />
              </div>
            )}
          </div>
        </div>
        <div className="vacancy-box2 overflow-hidden h-full">
          <VacancyFilter />
        </div>
      </div>
    </div>
  );
};

export default Vacancy;

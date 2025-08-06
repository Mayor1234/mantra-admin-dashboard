import { useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdGridView,
  MdOutlineFileDownload,
} from 'react-icons/md';
import { FaListUl } from 'react-icons/fa6';
import { Button } from '../../components/ui/button/Button';
import { GoPlus } from 'react-icons/go';
import EmploymentTable from '../../components/ui/employee/EmploymentTable';
import EmployeeGrid from '../../components/ui/employee/EmployeeGrid';

type ViewScreen = 'list' | 'grid';

const Employee = () => {
  const [activeViewScreen, setActiveViewScreen] = useState<ViewScreen>('list');

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-5">
          <h2 className="text-xl text-dark-text font-libre font-semibold">
            Employees
          </h2>
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
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            rightIcon={<MdOutlineKeyboardArrowDown size={16} />}
            className="font-mulish text-sm font-normal text-dark-text py-2 rounded-lg"
          >
            Sort by
          </Button>
          <Button
            variant="outline"
            size="sm"
            rightIcon={<MdOutlineKeyboardArrowDown size={16} />}
            className="font-mulish text-sm font-normal text-dark-text py-2 rounded-lg"
          >
            Designation
          </Button>
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<MdOutlineFileDownload size={16} />}
            className="font-mulish text-sm font-normal py-2 rounded-full mr-2"
          >
            Import
          </Button>
          <Button
            variant="primary"
            size="sm"
            leftIcon={<GoPlus size={16} />}
            className="font-mulish text-sm font-normal py-2 rounded-full"
          >
            Add Employee
          </Button>
        </div>
      </div>
      <div>
        {activeViewScreen === 'list' ? (
          <div className="h-full w-full">
            <EmploymentTable />
          </div>
        ) : (
          <div className="h-full w-full">
            <EmployeeGrid />
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;

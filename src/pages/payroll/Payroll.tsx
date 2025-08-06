import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { Button } from '../../components/ui/button/Button';
import { GoPlus } from 'react-icons/go';

import PayrollTable from '../../components/ui/payroll/PayrollTable';
import { useState } from 'react';
import Modal from '../../components/ui/modal/Modal';
import PayrollDrawer from '../../components/ui/payroll/PayrollDrawer';

const Payroll = () => {
  const [isPayrollOpen, setIsPayrollOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-5">
          <h2 className="text-xl text-dark-text font-libre font-semibold">
            Payroll
          </h2>
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
            variant="primary"
            size="sm"
            leftIcon={<GoPlus size={16} />}
            className="font-mulish text-sm font-normal py-2 rounded-full ml-3"
            onClick={() => setIsPayrollOpen(!isPayrollOpen)}
          >
            Add Salary
          </Button>
        </div>
        {isPayrollOpen && (
          <Modal isOpen={isPayrollOpen}>
            <div className="bg-white text-dark max-w-2xl w-full h-full p-10">
              <PayrollDrawer
                setIsPayrollOpen={() => setIsPayrollOpen(!isPayrollOpen)}
              />
            </div>
          </Modal>
        )}
      </div>
      <div>
        <div className="h-full w-full">
          <PayrollTable />
        </div>
      </div>
    </div>
  );
};

export default Payroll;

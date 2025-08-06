import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Button } from '../../components/ui/button/Button';

import { GoPlus } from 'react-icons/go';
import LeaveTable from '../../components/ui/employee/leaves/LeaveTable';
import { useState } from 'react';
import LeaveDrawer from '../../components/ui/employee/leaves/LeaveDrawer';
import Modal from '../../components/ui/modal/Modal';

const EmployeeLeave = () => {
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-4">
        <h2 className="text-xl text-dark-text font-libre font-semibold">
          Leaves
        </h2>
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
            type="submit"
            // onClick={methods.handleSubmit(onSubmit)}
            variant="primary"
            size="sm"
            leftIcon={<GoPlus size={16} />}
            className="font-mulish text-sm font-normal py-2 rounded-full ml-3"
            onClick={() => setIsLeaveOpen(!isLeaveOpen)}
          >
            Add Leave
          </Button>
        </div>
        {isLeaveOpen && (
          <Modal isOpen={isLeaveOpen}>
            <div className="bg-white text-dark max-w-2xl w-full h-full p-10">
              <LeaveDrawer
                setIsExperienceOpen={() => setIsLeaveOpen(!isLeaveOpen)}
              />
            </div>
          </Modal>
        )}
      </div>
      <div className="overflow-x-auto">
        {/* Replace with your LeaveTable component */}
        <LeaveTable />
      </div>
    </div>
  );
};

export default EmployeeLeave;

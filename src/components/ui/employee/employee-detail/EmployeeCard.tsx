import { MdEmail } from 'react-icons/md';
import user from '../../../../assets/logo/user.png';
import { FaCalendar } from 'react-icons/fa';
import type { Employee } from '../../../../constants/index';

type EmployeeCardType = {
  employee: Employee;
};

const EmployeeCard: React.FC<EmployeeCardType> = ({ employee }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="flex-1">
          <img
            src={user}
            alt="user image"
            className="w-20 h-20 rounded-full object-cover mb-2"
          />
        </div>
        <div className="flex-2">
          <p className="text-dark font-libre font-semibold text-xl mb-1">
            {employee.name}
          </p>
          <button
            type="button"
            className="bg-[#FAAB3C] text-dark text-sm font-libre font-medium rounded-2xl px-3 py-1"
          >
            {employee.position}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mb-3">
        <div>
          <p className="uppercase font-mulish font-normal text-xs text-[#343942] mb-1">
            Department
          </p>
          <div className="capitalize font-libre font-medium text-sm text-dark">
            {employee.department}
          </div>
        </div>
        <div>
          <p className="uppercase font-mulish font-normal text-xs text-[#343942] mb-1">
            Date of Joining
          </p>
          <div className="capitalize font-libre font-medium text-sm text-dark">
            {employee.joiningDate}
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F7] p-3 rounded-2xl">
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <MdEmail size={14} className="text-icon" />
            {employee.department}
          </p>
          <hr className="text-border" />
          <p className="flex items-center gap-2">
            <FaCalendar size={12} className="text-icon" />

            {employee.joiningDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

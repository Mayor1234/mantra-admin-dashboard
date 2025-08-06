import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { Button } from '../button/Button';
import Pagination from '../pagination/Pagination';

type DataType = {
  name: string;
  position: string;
  department: string;
  status: 'ACTIVE' | 'REMOTE' | 'ON LEAVE' | 'RESIGNED' | 'TERMINATED';
  joiningDate: string;
  email: string;
  phone: string;
};

const employees: DataType[] = [
  {
    name: 'Joseph Idoko',
    position: 'GM Operations',
    department: 'Operations',
    status: 'ACTIVE',
    joiningDate: 'Sep,12 2023',
    email: 'kate.towne@example.com',
    phone: '(123) 456-7890',
  },
  {
    name: 'Onyeka Onye',
    position: 'Fleet Managae',
    department: 'Sales & Marketing',
    status: 'REMOTE',
    joiningDate: 'Aug,2 2023',
    email: 'wiza1234@example.com',
    phone: '(555) 123-4567',
  },
  {
    name: 'Stella Okoh',
    position: 'GM Finance',
    department: 'Finance',
    status: 'RESIGNED',
    joiningDate: 'Jul,12 2023',
    email: 'rifison-leo@example.com',
    phone: '(789) 012-3456',
  },
  {
    name: 'Abiola Arinde',
    position: 'Finance',
    department: 'Technical',
    status: 'ON LEAVE',
    joiningDate: 'Apr.5 2023',
    email: 'bitsfor-z@example.com',
    phone: '(123) 456-7890',
  },
  {
    name: 'Kingsley Ossai',
    position: 'Guards Operations',
    department: 'Development',
    status: 'ACTIVE',
    joiningDate: 'Feb,11 2023',
    email: 'tristionbode@example.com',
    phone: '(888) 555-7890',
  },
  {
    name: 'Kayode Idowu',
    position: 'Finance',
    department: 'Department',
    status: 'ACTIVE',
    joiningDate: 'Jan,29 2023',
    email: 'graham-rfc@example.com',
    phone: '(123) 554-7612',
  },
  {
    name: 'Edikan Williw',
    position: 'Business Develop.',
    department: 'Analytics & Data',
    status: 'REMOTE',
    joiningDate: 'Nov,18 2022',
    email: 'ann.jastexample.com',
    phone: '(888) 324-5678',
  },
  {
    name: 'James Edoh',
    position: 'Security Coordinator',
    department: 'Sales & Marketing',
    status: 'TERMINATED',
    joiningDate: 'Jan,10 2022',
    email: 'towne220@example.com',
    phone: '(143) 453-8733',
  },
];

const EmployeeGrid = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-2.5">
        {employees.map((employee, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 p-3 bg-white border border-border rounded-2xl"
          >
            <div className="self-end flex items-center gap-2">
              <button className="bg-[#DDFCE0] text-[#0EB01D] text-xs font-mulish font-normal px-3 py-0.5 rounded-full">
                Active
              </button>
              <div className="flex flex-col gap-[3px]">
                {Array.from({ length: 3 }, (_, i) => (
                  <span
                    key={i}
                    className="w-[3px] h-[3px] bg-[#969DA6] rounded-full"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-12 h-12 bg-[#D8D8D8] border border-[#979797] rounded-full" />
              <div>
                <span className="text-dark-text font-medium font-libre">
                  {employee.name}
                </span>
                <p className="text-xs text-gray-500 font-libre">
                  {employee.position}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full mb-2">
              <div>
                <p className="uppercase text-xs font-normal font-mulish text-[#343942]">
                  Department
                </p>
                <span className="text-xs text-dark-text font-libre">
                  {employee.department}
                </span>
              </div>
              <div>
                <p className="uppercase text-xs font-normal font-mulish text-[#343942]">
                  Date of Joining
                </p>
                <span className="text-sm font-medium text-dark font-libre">
                  {employee.joiningDate}
                </span>
              </div>
            </div>
            <div className="bg-[#F4F5F7] p-3 rounded-2xl mb-2">
              <div className="flex items-center gap-2 mb-2">
                <MdEmail size={14} className="text-icon" />
                <span className="text-sm text-dark font-libre">
                  {employee.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={14} className="text-icon" />
                <span className="text-sm text-dark font-libre">
                  {employee.phone}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full">
              <Button variant="secondary" size="sm" className="w-full">
                Edit
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default EmployeeGrid;

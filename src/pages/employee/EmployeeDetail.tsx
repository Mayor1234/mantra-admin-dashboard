import {
  MdOutlineClose,
  MdOutlineKeyboardArrowDown,
  MdSave,
} from 'react-icons/md';
import { Button } from '../../components/ui/button/Button';
import EmployeeCard from '../../components/ui/employee/employee-detail/EmployeeCard';
import PersonalInfo from '../../components/ui/employee/employee-detail/PersonalInfo';
import BankInfo from '../../components/ui/employee/employee-detail/BankInfo';
// import SalaryInfo from '../../components/ui/employee/employee-detail/SalaryInfo';
import Educations from '../../components/ui/employee/employee-detail/Educations';
import Experience from '../../components/ui/employee/employee-detail/Experience';
import Skills from '../../components/ui/employee/employee-detail/Skills';
// import WebsiteRedisign from '../../components/ui/employee/employee-detail/WebsiteRedisign';
// import MobileAppLaunch from '../../components/ui/employee/employee-detail/MobileAppLaunch';
import Documents from '../../components/ui/employee/employee-detail/Documents';
import { employees } from '../../constants/index';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();

  const employee = employees.filter((employee) => employee.id === id)[0];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-5">
          <h2 className="text-xl text-dark-text font-libre font-semibold">
            Employee Detail
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-libre text-dark">STATUS</p>
          <Button
            variant="outline"
            size="sm"
            rightIcon={<MdOutlineKeyboardArrowDown size={16} />}
            className="font-mulish text-sm font-normal text-dark-text py-2 rounded-xl"
          >
            Active
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<MdOutlineClose size={16} />}
              className="font-mulish text-sm font-normal py-2 rounded-full mr-2"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              // onClick={methods.handleSubmit(onSubmit)}
              variant="primary"
              size="sm"
              leftIcon={<MdSave size={16} />}
              className="font-mulish text-sm font-normal py-2 rounded-full"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-[repeat(4,minmax(200px,1fr))] grid-rows-[repeate(7,minmax(80px,auto))] auto-cols-[minmax(100px,auto)] auto-rows-[minmax(50px,auto)] gap-2.5 [grid-auto-flow:dense]">
        <div className="border border-border rounded-2xl p-3 row-span-3 col-span-1">
          <EmployeeCard employee={employee} />
        </div>
        <div className="border border-border rounded-2xl p-3 row-span-3 col-span-1">
          <PersonalInfo employee={employee} />
        </div>
        <div className="border border-border rounded-2xl p-3 row-span-3 col-span-1">
          <BankInfo employee={employee} />
        </div>
        <div className="border border-border rounded-2xl p-3 row-span-3 col-span-1">
          <Documents />
        </div>
        <div className="border border-border rounded-2xl p-3 row-span-2 col-span-2">
          <Educations />
        </div>
        <div className="border border-border rounded-2xl p-3 row-span-4 col-span-2 bg-[#f4f5f7]">
          <Experience />
        </div>
        <div className="border border-border rounded-2xl p-3 row-span-2 col-span-2">
          <Skills />
        </div>
        {/* <div className="border border-border rounded-2xl p-3 row-span-4 col-span-1">
          <SalaryInfo employee={employee} />
        </div> */}
        {/* <div className="border border-border rounded-2xl p-3 row-span-4 col-span-1 bg-[#F4F5F7]">
          <WebsiteRedisign />
        </div> */}
        {/* <div className="border border-border rounded-2xl p-3 row-span-4 col-span-1 bg-[#F4F5F7]">
          <MobileAppLaunch />
        </div> */}
      </div>
    </div>
  );
};

export default EmployeeDetail;

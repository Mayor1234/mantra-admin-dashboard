import type { Employee } from '../../../../constants/index';
import { SectionCard } from './SectionCard';

type PersonalInfoType = {
  employee: Employee;
};

const PersonalInfo: React.FC<PersonalInfoType> = ({ employee }) => {
  return (
    <SectionCard title="Personal Info" editable>
      <div className="space-y-3 text-dark w-full">
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-3">
          <span className="uppercase">Passport No</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.personalInfo.passportNo}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-3">
          <span className="uppercase">Passport Exp. Date</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.personalInfo.passportExpiry}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-3">
          <span className="uppercase">Phone Number</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.phone}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-3">
          <span className="uppercase">Birthday</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.personalInfo.birthday}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full">
          <span className="uppercase">Marital Status</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.personalInfo.maritalStatus}
          </span>
        </p>
      </div>
    </SectionCard>
  );
};

export default PersonalInfo;

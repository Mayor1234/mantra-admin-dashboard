import type { Employee } from '../../../../constants/index';
import { SectionCard } from './SectionCard';

type SalaryInfoType = {
  employee: Employee;
};

const SalaryInfo: React.FC<SalaryInfoType> = ({ employee }) => {
  return (
    <SectionCard title="Salary Information" editable>
      <div className="space-y-3 text-dark w-full">
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Salary Basis</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.salaryInfo.basis}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Salary Amount</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.salaryInfo.amount}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Effective Date</span>
          <span className="text-dark font-libre text-sm font-medium">
            19/08/2022
            {employee.details.salaryInfo.effectiveDate}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full">
          <span className="uppercase">Payment Type</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.salaryInfo.paymentType}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Bill Rate</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.salaryInfo.billRate}
          </span>
        </p>
      </div>
    </SectionCard>
  );
};

export default SalaryInfo;

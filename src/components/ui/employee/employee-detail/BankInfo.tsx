import type { Employee } from '../../../../constants/index';
import { SectionCard } from './SectionCard';

type BankInfoType = {
  employee: Employee;
};
const BankInfo: React.FC<BankInfoType> = ({ employee }) => {
  return (
    <SectionCard title="Bank Information" editable>
      <div className="space-y-3 text-dark w-full">
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Account NO</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.bankInfo.accountNo}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">bank name</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.bankInfo.bankName}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full pb-2">
          <span className="uppercase">account name</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.bankInfo.accountName}
          </span>
        </p>
      </div>
    </SectionCard>
  );
};

export default BankInfo;

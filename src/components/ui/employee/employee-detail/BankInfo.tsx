import type { Employee } from '../../../../constants/indext';
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
          <span className="uppercase">IFSC CODE</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.bankInfo.fscCode}
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full pb-2">
          <span className="uppercase">PAN NO</span>
          <span className="text-dark font-libre text-sm font-medium">
            {employee.details.bankInfo.panNo}
          </span>
        </p>
      </div>
    </SectionCard>
  );
};

export default BankInfo;

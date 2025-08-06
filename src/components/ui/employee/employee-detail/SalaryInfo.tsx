import { SectionCard } from './SectionCard';

const SalaryInfo = () => {
  return (
    <SectionCard title="Salary Information" editable>
      <div className="space-y-3 text-dark w-full">
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Salary Basis</span>
          <span className="text-dark font-libre text-sm font-medium">
            Monthly
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Salary Amount</span>
          <span className="text-dark font-libre text-sm font-medium">
            $1300
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Effective Date</span>
          <span className="text-dark font-libre text-sm font-medium">
            19/08/2022
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full">
          <span className="uppercase">Payment Type</span>
          <span className="text-dark font-libre text-sm font-medium">
            Transfer
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Bill Rate</span>
          <span className="text-dark font-libre text-sm font-medium">20%</span>
        </p>
      </div>
    </SectionCard>
  );
};

export default SalaryInfo;

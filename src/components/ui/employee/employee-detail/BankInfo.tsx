import { SectionCard } from './SectionCard';

const BankInfo = () => {
  return (
    <SectionCard title="Bank Information" editable>
      <div className="space-y-3 text-dark w-full">
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">Account NO</span>
          <span className="text-dark font-libre text-sm font-medium">
            00234552976293057
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">IFSC CODE</span>
          <span className="text-dark font-libre text-sm font-medium">
            CC128693311
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full pb-2">
          <span className="uppercase">PAN NO</span>
          <span className="text-dark font-libre text-sm font-medium">
            0012998383647383
          </span>
        </p>
      </div>
    </SectionCard>
  );
};

export default BankInfo;

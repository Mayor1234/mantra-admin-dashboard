import { SectionCard } from './SectionCard';

const PersonalInfo = () => {
  return (
    <SectionCard title="Personal Info" editable>
      <div className="space-y-3 text-dark w-full">
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-3">
          <span className="uppercase">Passport No</span>
          <span className="text-dark font-libre text-sm font-medium">
            QW3342981
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-3">
          <span className="uppercase">Passport Exp. Date</span>
          <span className="text-dark font-libre text-sm font-medium">
            12/12/28
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-3">
          <span className="uppercase">Phone Number</span>
          <span className="text-dark font-libre text-sm font-medium">
            (380)-322-4422
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-3">
          <span className="uppercase">Birthday</span>
          <span className="text-dark font-libre text-sm font-medium">
            12/01/1988
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full">
          <span className="uppercase">Marital Status</span>
          <span className="text-dark font-libre text-sm font-medium">
            Married
          </span>
        </p>
      </div>
    </SectionCard>
  );
};

export default PersonalInfo;

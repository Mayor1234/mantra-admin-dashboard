import { useFormContext } from 'react-hook-form';
import { FormInput } from '../../form';
import { MdKeyboardArrowDown } from 'react-icons/md';

const BankInformation = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-dark">Bank Information</h2>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">BANK ACCOUNT NUMBER</p>
            <p className="font-mulish text-[#343942]">Bank account number</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="bankAccountNumber"
              placeholder="Enter account number"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">BANK NAME</p>
            <p className="font-mulish text-[#343942]">Bank name</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="bankName"
              placeholder="Choose bank name"
              iconRight={<MdKeyboardArrowDown />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInformation;

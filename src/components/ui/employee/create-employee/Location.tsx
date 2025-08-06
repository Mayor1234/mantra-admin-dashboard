import { useFormContext } from 'react-hook-form';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FormInput } from '../../form';

const Location = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-dark">Location</h2>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">OFFICE ADDRESS</p>
            <p className="font-mulish text-[#343942]">
              Office Location in Nigeria
            </p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="officeAddress"
              placeholder="Choose office location"
              iconRight={<MdKeyboardArrowDown />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">LOCATION</p>
            <p className="font-mulish text-[#343942]">
              Location of assignment{' '}
            </p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="officeLocation"
              placeholder="Choose location of assignment"
              iconRight={<MdKeyboardArrowDown />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

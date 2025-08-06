import { useFormContext } from 'react-hook-form';
import { FormInput } from '../../form';
import { FaCalendar } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DateAndStatus = () => {
  const { control } = useFormContext();

  return (
    <div className="p-4 border border-border rounded-lg bg-[#FFFFFF] h-full space-y-5">
      <div className="w-full flex justify-between gap-5 mb-4">
        <h2 className="max-w-48 w-full text-xl font-semibold text-dark">
          Dates and Status
        </h2>
        <p className="w-full text-xs text-[#343942] font-mulish">
          This section provides a snapshot of when the vacancy opened, any
          closing date (if applicable), and its current status in the hiring
          process
        </p>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">VACANCY STATUS</p>
            <p className="font-mulish text-[#343942]">Choose current stage</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="vacancy_status"
              placeholder="Choose status"
              iconRight={<MdKeyboardArrowDown />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">OPENING & CLOSING DATE</p>
            <p className="font-mulish text-[#343942]">(If applicable)</p>
          </div>
          <div className="w-full flex items-center gap-2">
            <FormInput
              control={control}
              name="contact_phone"
              placeholder="Opening Date"
              iconRight={<FaCalendar size={14} />}
            />
            <FormInput
              control={control}
              name="contact_phone"
              placeholder="Closing Date"
              iconRight={<FaCalendar size={14} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateAndStatus;

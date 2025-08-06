import { GoPaperclip } from 'react-icons/go';
import { FormCheckboxGroup, FormInput } from '../../form';
import { useFormContext } from 'react-hook-form';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaCalendar } from 'react-icons/fa';

const BasicInformation = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-dark">Basic Information</h2>
        <div className="flex items-center gap-1">
          <GoPaperclip size={15} className="text-icon" />
          <p className="text-sm">Upload Image</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">FULL NAME</p>
            <p className="font-mulish text-[#343942]">Add employee's name</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="fullname"
              placeholder="Employee's Name"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">POSITION</p>
            <p className="font-mulish text-[#343942]">Choose Position</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="position"
              placeholder="Choose Position"
              iconRight={<MdKeyboardArrowDown size={14} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">DEPARTMENT</p>
            <p className="font-mulish text-[#343942]">Choose Department</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="department"
              placeholder="Choose Category"
              iconRight={<MdKeyboardArrowDown size={14} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">DATE OF JOINING</p>
            <p className="font-mulish text-[#343942]">
              Choose the employee's date of join
            </p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="dateOfJoin"
              placeholder="Select the employee's date of join"
              iconRight={<FaCalendar size={12} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">PHONE NUMBER</p>
            <p className="font-mulish text-[#343942]">Only Numbers</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="phoneNUmber"
              placeholder="000 - 000 - 000"
              iconRight={<FaCalendar size={12} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">EMAIL ADDRESS</p>
            <p className="font-mulish text-[#343942]">Add email adress</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="emailAddress"
              placeholder="@example.com"
            />
          </div>
        </div>
      </div>
      <hr className="text-border" />
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-dark">
          Personal Information
        </h2>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">PASSPORT NUMBER</p>
            <p className="font-mulish text-[#343942]">Add passport number</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="passportNumber"
              placeholder="Passport no."
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">PASSPORT EXP DATE</p>
            <p className="font-mulish text-[#343942]">dd/mm/yyyy</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="passportExpDate"
              placeholder="Passport Exp. Date"
              iconRight={<FaCalendar size={12} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">DATE OF BIRTHDAY</p>
            <p className="font-mulish text-[#343942]">
              Choose employee's date of birth
            </p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="dateOfBirth"
              placeholder="Select employee's date of birth"
              iconRight={<FaCalendar size={12} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">MARITAL STATUS</p>
            <p className="font-mulish text-[#343942]">
              Choose option is available
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-4 text-xs text-dark">
            <FormCheckboxGroup
              name="maritalStatus"
              control={control}
              options={[
                { label: 'Single', value: 'single' },
                { label: 'Married', value: 'married' },
                { label: 'Divorced', value: 'divorced' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;

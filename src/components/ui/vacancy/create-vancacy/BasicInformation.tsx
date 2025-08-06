import { useFormContext } from 'react-hook-form';

import { Button } from '../../button/Button';
import { GoPaperclip } from 'react-icons/go';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

import {
  FormCheckbox,
  FormCheckboxGroup,
  FormInput,
  FormTextarea,
} from '../../form';

const BasicInformation = () => {
  const { control } = useFormContext();

  return (
    <div className="p-4 border border-border rounded-lg bg-[#FFFFFF] space-y-5">
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
            <p className="font-libre text-dark mb-1">JOB TITLE</p>
            <p className="font-mulish text-[#343942]">Add position name</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="jobTitle"
              placeholder="Position name"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">JOB DEPARTMENT</p>
            <p className="font-mulish text-[#343942]">Choose category</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="jobDepartment"
              placeholder="Choose Category"
              className="w-full"
              iconRight={<MdKeyboardArrowDown />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 text-xs">
            <p className="font-libre text-dark mb-1">JOB DESCRIPTION</p>
            <p className="font-mulish text-[#343942] text-xs">
              For effective candidate selection, enhance the job description
              with comprehensive details
            </p>
          </div>
          <div className="w-full">
            <FormTextarea
              control={control}
              name="jobDescription"
              placeholder="Enter job description"
              rows={3}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">EMPLOYMENT TYPE</p>
            <p className="font-mulish text-[#343942]">
              Pick one or multiple options
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-dark">
            <FormCheckboxGroup
              name="employmentTypes"
              control={control}
              options={[
                { label: 'Full Time', value: 'full_time' },
                { label: 'Part Time', value: 'part_time' },
                { label: 'Contract', value: 'contract' },
                { label: 'Freelance', value: 'freelance' },
                { label: 'Remote', value: 'remote' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">JOB LOCATIONS</p>
            <p className="font-mulish text-[#343942]">
              Choose multiple options if available
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-y-3 gap-x-4 text-dark">
            <FormInput
              control={control}
              name="location"
              placeholder="Search for location"
              iconLeft={<FaMapMarkerAlt size={12} />}
              iconRight={<MdKeyboardArrowDown />}
            />
            <div className="flex gap-2 flex-wrap">
              {['Lagos State', 'Akwa Ibom', 'Portharcourt'].map((loc, i) => (
                <Button variant="secondary" size="sm" key={i}>
                  {loc}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">SALARY</p>
            <p className="font-mulish text-[#343942]">
              Choose how you prefer for this job
            </p>
          </div>
          <div className="w-full">
            <FormInput control={control} name="salary" placeholder="Salary" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">MULTIPLE CANDIDATES</p>
            <p className="font-mulish text-[#343942]">
              This will be displayed on the job page
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-y-2 gap-x-4 text-xs text-dark">
            <FormCheckbox
              control={control}
              name="multipleCandidates"
              label="Yes, i am hiring multiple candidates"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;

import { useFormContext } from 'react-hook-form';
import { FormCheckboxGroup, FormInput, FormTextarea } from '../../form';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ApplicantRequirements = () => {
  const { control } = useFormContext();

  return (
    <div className="p-4 border border-border rounded-lg bg-[#FFFFFF] h-full space-y-5">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-dark">
          Applicant Requirements
        </h2>
      </div>

      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">WORK EXPERIENCE</p>
            <p className="font-mulish text-[#343942]">
              Provide details about experience
            </p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="work_experience"
              placeholder="No experience required"
              iconRight={<MdKeyboardArrowDown />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">EDUCATION</p>
            <p className="font-mulish text-[#343942]">Select Education</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="jobTitle"
              placeholder="Higher"
              iconRight={<MdKeyboardArrowDown />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">
              THE JOB IS SUITABLE FOR:
            </p>
            <p className="font-mulish text-[#343942]">
              Pick one or multiple options
            </p>
          </div>
          <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-dark">
            <FormCheckboxGroup
              control={control}
              name="suitableFor"
              options={[
                { label: 'A student', value: 'student' },
                { label: 'A veteran', value: 'veteran' },
                { label: 'A person with disabilities', value: 'disability' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 text-xs">
            <p className="font-libre text-dark mb-1">RESPONSIBILITIES</p>
            <p className="font-mulish text-[#343942]">
              Main tasks that the candidates will be accountable for in this
              role
            </p>
          </div>
          <div className="w-full">
            <FormTextarea
              control={control}
              name="responsibilities"
              placeholder="Perfoming tasks related to... Organizing and coordinating...Analyzing and Optimizing...
                  "
              rows={3}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 text-xs">
            <p className="font-libre text-dark mb-1">DUTIES</p>
            <p className="font-mulish text-[#343942]">
              Specific tasks and actions that the candidate will be responsible
              for on a day-to-day basis
            </p>
          </div>
          <div className="w-full">
            <FormTextarea
              control={control}
              name="jobDescription"
              placeholder="Planning and executing... Ensuring the efficient functioning of... Supporting processes...
                  "
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantRequirements;

import { FormProvider, useForm } from 'react-hook-form';
import { FormInput, FormTextarea } from '../../form';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaCalendar } from 'react-icons/fa';
import { MdOutlineClose, MdSave } from 'react-icons/md';
import { Button } from '../../button/Button';

type CreateExperienceValues = {
  jobTitle?: string;
  department?: string;
  compnayName?: string;
  endDate?: string;
  startDate?: string;
  responsibility?: string;
  companyName?: string;
};

interface Props {
  setIsExperienceOpen: () => void;
}

const ExperienceDrawer: React.FC<Props> = ({ setIsExperienceOpen }) => {
  const methods = useForm<CreateExperienceValues>({
    defaultValues: {
      jobTitle: '',
      department: '',
      compnayName: '',
      endDate: '',
      startDate: '',
      responsibility: '',
      companyName: '',
    },
  });

  const handleSubmitExperience = methods.handleSubmit((data) => {
    console.log('Experience submitted:', data);
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => {
            e.stopPropagation(); // ✅ prevent bubbling to parent form
            e.preventDefault(); // ✅ prevent native form submit
            handleSubmitExperience(); // ✅ run RHF submission
          }}
        >
          <div className="space-y-8">
            <div className="flex items-center justify-between w-full mb-8">
              <h2 className="text-xl font-semibold text-dark">Experience</h2>
              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  className="py-2"
                  onClick={setIsExperienceOpen}
                  leftIcon={<MdOutlineClose size={14} />}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="py-2"
                  leftIcon={<MdSave size={14} />}
                >
                  Save
                </Button>
              </div>
            </div>
            <>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">JOB TITLE</p>
                    <p className="font-mulish text-[#343942]">Job title</p>
                  </div>
                  <div className="w-full">
                    <FormInput name="jobTitle" placeholder="Enter job title" />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">
                      COMPNAY'S INDUSTRY
                    </p>
                    <p className="font-mulish text-[#343942]">
                      Company's industry
                    </p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="department"
                      placeholder="Information Technology"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">COMPNAY'S NAME</p>
                    <p className="font-mulish text-[#343942]">Company's name</p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="companyName"
                      placeholder="Company's name"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">PERIOD OF WORK</p>
                    <p className="font-mulish text-[#343942]">Period of work</p>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    <FormInput
                      name="startDate"
                      placeholder="Start date"
                      iconRight={<FaCalendar size={12} />}
                    />
                    <FormInput
                      name="endDate"
                      placeholder="End date"
                      iconRight={<FaCalendar size={12} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">
                      RESPONSIBILITIES
                    </p>
                    <p className="font-mulish text-[#343942] text-xs">
                      Short description about job
                    </p>
                  </div>
                  <div className="w-full">
                    <FormTextarea
                      name="jobDescription"
                      placeholder="Enter job description"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ExperienceDrawer;

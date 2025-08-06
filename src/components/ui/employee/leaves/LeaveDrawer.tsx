import { FormProvider, useForm } from 'react-hook-form';
import { FormInput, FormTextarea } from '../../form';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaCalendar } from 'react-icons/fa';
import { MdOutlineClose, MdSave } from 'react-icons/md';
import { Button } from '../../button/Button';

type CreateExperienceValues = {
  employeeName?: string;
  department?: string;
  position?: string;
  leaveType?: string;
  remainingLeave?: string;
  startDate?: string;
  endDate?: string;
  reason?: string;
};

interface DrawerProps {
  setIsExperienceOpen: () => void;
}

const LeaveDrawer: React.FC<DrawerProps> = ({ setIsExperienceOpen }) => {
  const methods = useForm<CreateExperienceValues>({
    defaultValues: {
      employeeName: '',
      department: '',
      position: '',
      leaveType: '',
      remainingLeave: '',
      startDate: '',
      endDate: '',
      reason: '',
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
              <h2 className="text-xl font-semibold text-dark">Add Leave</h2>
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
                    <p className="font-libre text-dark mb-1">EMPLOYEE NAME</p>
                    <p className="font-mulish text-[#343942]">Employee name</p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="employeeName"
                      placeholder="Employee name"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">
                      EMPLOYEE DEPARTMENT
                    </p>
                    <p className="font-mulish text-[#343942]">
                      Select department
                    </p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="department"
                      placeholder="Sales & Marketing"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">
                      EMPLOYEE POSITION
                    </p>
                    <p className="font-mulish text-[#343942]">
                      Select position
                    </p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="postion"
                      placeholder="Graphic designer"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">LEAVE TYPE</p>
                    <p className="font-mulish text-[#343942]">
                      Select Leave Type
                    </p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="leaveType"
                      placeholder="Sick leave"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">
                      REMAINING LEVAES
                    </p>
                    <p className="font-mulish text-[#343942]">Only numbers</p>
                  </div>
                  <div className="w-full">
                    <FormInput name="remainingLeave" placeholder="12" />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">PERIOD OF LEAVE</p>
                    <p className="font-mulish text-[#343942]">Period period</p>
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
                    <p className="font-libre text-dark mb-1">LEAVE REASON</p>
                    <p className="font-mulish text-[#343942] text-xs">
                      Short description
                    </p>
                  </div>
                  <div className="w-full">
                    <FormTextarea
                      name="reason"
                      placeholder="Enter short description"
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

export default LeaveDrawer;

import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../button/Button';
import { MdKeyboardArrowDown, MdOutlineClose, MdSave } from 'react-icons/md';
import { FormInput } from '../form';

type CreateExperienceValues = {
  employeeName?: string;
  position?: string;
  paymentPeriod?: string;
  paymentType?: string;
  paymentRate?: string;
  billRate?: string;
  employeeEmail?: string;
};

interface DrawerProps {
  setIsPayrollOpen: () => void;
}

const PayrollDrawer: React.FC<DrawerProps> = ({ setIsPayrollOpen }) => {
  const methods = useForm<CreateExperienceValues>({
    defaultValues: {
      employeeName: '',
      position: '',
      paymentPeriod: '',
      paymentType: '',
      paymentRate: '',
      billRate: '',
      employeeEmail: '',
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
              <h2 className="text-xl font-semibold text-dark">Add Salary</h2>
              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  className="py-2"
                  onClick={setIsPayrollOpen}
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
                    <p className="font-libre text-dark mb-1">SELECT STAFF</p>
                    <p className="font-mulish text-[#343942]">Employee name</p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="employeeName"
                      placeholder="Employee name"
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
                    <p className="font-mulish text-[#343942]">Select postion</p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="department"
                      placeholder="Select Employee Position"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">PAYMENT PERIOD</p>
                    <p className="font-mulish text-[#343942]">
                      Hourly, Monthly, etc.
                    </p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="pyamentPeriod"
                      placeholder="Monthly"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">PAYMENT TYPE</p>
                    <p className="font-mulish text-[#343942]">
                      Cash, Bank Transfer, etc.
                    </p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="paymentType"
                      placeholder="Select Payment Type"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">PAYMENT RATE</p>
                    <p className="font-mulish text-[#343942]">
                      Employee compensation rate
                    </p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="paymentRate"
                      placeholder="Salary"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">BILL RATE</p>
                    <p className="font-mulish text-[#343942]">
                      Client rate for employee work
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    <FormInput
                      name="billRate"
                      placeholder="Salary"
                      iconRight={<MdKeyboardArrowDown size={16} />}
                    />
                  </div>
                </div>
              </div>
              <hr className="text-border" />
              <div className="w-full">
                <div className="flex justify-between w-full gap-4">
                  <div className="max-w-48 w-full text-xs">
                    <p className="font-libre text-dark mb-1">EMPLOYEE EMAIL</p>
                    <p className="font-mulish text-[#343942] text-xs">
                      Employee email
                    </p>
                  </div>
                  <div className="w-full">
                    <FormInput
                      name="billRate"
                      placeholder="email@example.com"
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

export default PayrollDrawer;

import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../../components/ui/button/Button';
import { MdOutlineClose, MdSave, MdShare } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import BasicInformation from '../../components/ui/employee/create-employee/BasicInformation';
import BankInformation from '../../components/ui/employee/create-employee/BankInformation';
import Location from '../../components/ui/employee/create-employee/Location';
import Experience from '../../components/ui/employee/create-employee/Experience';

type CreateEmployyeeValues = {
  fullname?: string;
  position?: string;
  department?: string;
  dateOfJoin?: string[];
  phoneNUmber?: string;
  emailAddress?: string;
  bankAccountNumber?: string;
  bankName?: string;
  passportNumber?: string;
  passportExpDate?: string;
  dateOfBirth?: string;
  maritalStatus?: string[];
  officeAddress?: string;
  officeLocation?: string;
};

const CreateEmployee = () => {
  const methods = useForm<CreateEmployyeeValues>({
    defaultValues: {
      fullname: '',
      position: '',
      department: '',
      dateOfJoin: [],
      phoneNUmber: '',
      emailAddress: '',
      passportNumber: '',
      passportExpDate: '',
      dateOfBirth: '',
      maritalStatus: [],
      officeAddress: '',
      officeLocation: '',
    },
  });

  const onSubmit = (data: CreateEmployyeeValues) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between gap-5 mb-4">
            <h2 className="text-xl text-dark-text font-libre font-semibold">
              Employees
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                leftIcon={<MdShare size={16} />}
                className="font-mulish text-sm font-normal py-2 rounded-full mr-2"
              >
                Share
              </Button>
              <Button
                variant="secondary"
                size="sm"
                leftIcon={<MdOutlineClose size={16} />}
                className="font-mulish text-sm font-normal py-2 rounded-full mr-2"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                // onClick={methods.handleSubmit(onSubmit)}
                variant="primary"
                size="sm"
                leftIcon={<MdSave size={16} />}
                className="font-mulish text-sm font-normal py-2 rounded-full"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="grid w-full h-full grid-cols-[repeat(2,minmax(100px,1fr))] grid-rows-[repeat(5,minmax(120px,auto))] auto-cols-[minmax(200px,auto)] auto-rows-[minmax(100px,auto)] gap-2.5 [grid-auto-flow:dense]">
            <div className="border border-border col-span-1 row-span-4 rounded-2xl p-4">
              <BasicInformation />
            </div>
            <div className="border border-border col-span-1 row-span-1 rounded-2xl p-4 overflow-hidden h-full">
              <BankInformation />
            </div>
            <div className="border border-border col-span-1 row-span-1 rounded-2xl p-4 overflow-hidden h-full">
              <Location />
            </div>
            <div className="border border-border col-span-1 row-span-2 rounded-2xl p-4 overflow-hidden h-full">
              <Experience />
            </div>
            <div className="border border-border col-span-1 row-span-1 rounded-2xl p-4 overflow-hidden h-full">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-semibold text-dark">Documents</h2>
                </div>
                <div className="flex items-center gap-5">
                  <button className="bg-[#1F74EC] text-[#fff] flex items-center gap-2 p-2.5 rounded-full hover:bg-[#1F74EC]/80 transition-all duration-300 ease-linear cursor-pointe">
                    <GoPlus size={20} />
                  </button>
                  <p className="text-dark font-libre font-medium text-lg">
                    Add Employee Documents
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border col-span-1 row-span-1 rounded-2xl  p-4 overflow-hidden h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-dark">Skills</h2>
                </div>
                <div className="flex items-center gap-2 bg-[#f4f5f7] p-3 rounded-xl">
                  {[
                    'Project management',
                    'Data analysis',
                    'Graphic Desgin',
                    // 'Customer Service',
                  ].map((skill, i) => (
                    <Button
                      variant="outline"
                      size="md"
                      key={i}
                      className="text-dark-text bg-[#fff] font-mulish text-sm font-normal py-2 rounded-full capitalize"
                    >
                      {skill}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateEmployee;

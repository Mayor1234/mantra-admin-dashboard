import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../../components/ui/button/Button';
import { MdOutlineClose, MdSave } from 'react-icons/md';
import { FaShare } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import BasicInformation from '../../components/ui/employee/create-employee/BasicInformation';
import BankInformation from '../../components/ui/employee/create-employee/BankInformation';
import Location from '../../components/ui/employee/create-employee/Location';
import Experience from '../../components/ui/employee/create-employee/Experience';
import { useState } from 'react';

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
  const [copiedLink, setCopiedLink] = useState('');
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

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(url);
    setTimeout(() => setCopiedLink(''), 3000);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between gap-5 mb-4">
            <h2 className="text-xl text-dark-text font-libre font-semibold">
              Create Employee
            </h2>
            <div className="relative">
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<FaShare size={14} />}
                  className="font-mulish text-sm font-normal py-2 rounded-full mr-2"
                  onClick={() =>
                    copyToClipboard(
                      'https://mantra-admin-dashboard.vercel.app/shareable-employee-form'
                    )
                  }
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
              {copiedLink && (
                <div className=" absolute z-50 mt-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <IoMdCheckmarkCircleOutline size={16} />
                    <span className="font-medium">
                      Link copied to clipboard!
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-green-600 break-all">
                    {copiedLink}
                  </div>
                </div>
              )}
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
            <div className="border border-border col-span-1 row-span-2 rounded-2xl p-4 overflow-hidden h-full">
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
            <div className="border border-border col-span-1 row-span-1 rounded-2xl p-4 overflow-hidden h-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-dark mb-4">
                    Education
                  </h2>
                  <div>
                    <div className="flex items-center gap-5">
                      <button
                        type="button"
                        className="bg-[#1F74EC] text-[#fff] flex items-center gap-2 p-2.5 rounded-full hover:bg-[#1F74EC]/80 transition-all duration-300 ease-linear cursor-pointer"
                        // onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                      >
                        <GoPlus size={20} />
                      </button>
                      <p className="text-dark font-libre font-medium text-lg">
                        Add Education
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-border col-span-1 row-span-1 rounded-2xl p-4 overflow-hidden h-full">
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

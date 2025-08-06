import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Button } from '../../components/ui/button/Button';
import { GoPlus } from 'react-icons/go';
import Modal from '../../components/ui/modal/Modal';
import ApplicantsDrawer from '../../components/ui/applicant/ApplicantsDrawer';
import { useState } from 'react';
import SimpleBar from '../../components/charts/SimpleBar';
import ApplicantsTable from '../../components/ui/applicant/ApplicantsTable';

const Applicant = () => {
  const [isApplicantOpen, setIsApplicantOpen] = useState(false);

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center justify-between gap-5 mb-4">
          <h2 className="text-xl text-dark-text font-libre font-semibold">
            Applicants
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              rightIcon={<MdOutlineKeyboardArrowDown size={16} />}
              className="font-mulish text-sm font-normal text-dark-text py-2 rounded-lg"
            >
              Sort by
            </Button>
            <Button
              variant="outline"
              size="sm"
              rightIcon={<MdOutlineKeyboardArrowDown size={16} />}
              className="font-mulish text-sm font-normal text-dark-text py-2 rounded-lg"
            >
              Designation
            </Button>
            <Button
              type="submit"
              // onClick={methods.handleSubmit(onSubmit)}
              variant="primary"
              size="sm"
              leftIcon={<GoPlus size={16} />}
              className="font-mulish text-sm font-normal py-2 rounded-full ml-3"
              onClick={() => setIsApplicantOpen(!isApplicantOpen)}
            >
              Add Applicant
            </Button>
          </div>
          {isApplicantOpen && (
            <Modal isOpen={isApplicantOpen}>
              <div className="bg-white text-dark max-w-2xl w-full h-full p-10">
                <ApplicantsDrawer
                // setIsApplicantOpen={() =>
                //   setIsApplicantOpen(!isApplicantOpen)
                // }
                />
              </div>
            </Modal>
          )}
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="gap-5 rounded-2xl border border-border p-3 h-full w-full">
            <div className="flex items-start justify-between">
              <div className="mb-3">
                <h3 className="text-dark font-libre font-semibold text-base mb-1">
                  Open Positions
                </h3>
                <p className="uppercase font-mulish text-sm text-[#343942]">
                  All Vacancies
                </p>
              </div>
              <div>
                <p className="text-dark font-libre font-semibold text-xl">
                  358
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="h-16 flex-1">
                <SimpleBar pry={'#1F74EC'} sec={'#EEF4FE'} />
              </div>
              <p className="text-xs text-dark bg-[#AFFFB6] p-1 px-2 rounded-full flex items-center">
                <GoPlus /> 22 new
              </p>
            </div>
          </div>

          <div className="gap-5 rounded-2xl border border-border p-3 h-full w-full">
            <div className="flex justify-between">
              <div className="mb-3">
                <h3 className="text-dark font-libre font-semibold text-base mb-1">
                  Active Candidates
                </h3>
                <p className="uppercase font-mulish text-sm text-[#343942]">
                  All Vacancies
                </p>
              </div>
              <p className="text-dark font-libre font-semibold text-xl">125</p>
            </div>
            <div className="flex items-end justify-between">
              <div className="h-16 w-full flex-1">
                <SimpleBar pry={'#9566F2'} sec={'#F3EEFE'} />
              </div>
              <p className="text-xs text-dark bg-[#AFFFB6] p-1 px-2 rounded-full flex items-center">
                <GoPlus /> 12 new
              </p>
            </div>
          </div>
          <div className="gap-5 rounded-2xl border border-border p-3 h-full w-full">
            <div className="flex items-start justify-between">
              <div className="mb-3">
                <h3 className="text-dark font-libre font-semibold text-base mb-1">
                  Hiring Process
                </h3>
                <p className="uppercase font-mulish text-sm text-[#343942]">
                  AVERAGE
                </p>
              </div>
              <div className="flex items-end gap-1">
                <p className="text-dark font-libre font-semibold text-xl">12</p>
                <span>HRS</span>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="h-16 w-full flex-1">
                <SimpleBar pry={'#FAAB3C'} sec={'#FEF0DB'} />
              </div>
              <p className="text-xs text-dark bg-[#AFFFB6] p-1 px-2 rounded-full flex items-center">
                6 stages
              </p>
            </div>
          </div>
          <div className="gap-5 rounded-2xl border border-border p-3 h-full w-full">
            <div className="flex items-start justify-between">
              <div className="mb-3">
                <h3 className="text-dark font-libre font-semibold text-base mb-1">
                  Candidates Experience
                </h3>
                <p className="uppercase font-mulish text-sm text-[#343942]">
                  AVERAGE
                </p>
              </div>
              <div className="flex items-end gap-1">
                <p className="text-dark font-libre font-semibold text-xl">3+</p>
                <span>YRS</span>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="h-16 flex-1">
                <SimpleBar pry={'#23EB31'} sec={'#DDFCE0'} />
              </div>
              <p className="text-xs text-dark bg-[#AFFFB6] font-libre p-1 px-2 rounded-full flex items-center">
                <GoPlus /> 50%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicant;

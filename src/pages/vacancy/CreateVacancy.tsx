import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../../components/ui/button/Button';
import { MdOutlineClose } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import BasicInformation from '../../components/ui/vacancy/create-vancacy/BasicInformation';
import ApplicantRequirements from '../../components/ui/vacancy/create-vancacy/ApplicantRequirements';
import ContactInformation from '../../components/ui/vacancy/create-vancacy/ContactInformation';
import DateAndStatus from '../../components/ui/vacancy/create-vancacy/DateAndStatus';

type CreateVacancyValues = {
  jobTitle?: string;
  jobDepartment?: string;
  jobDescription?: string;
  employmentTypes?: string[];
  location?: string;
  salary?: string;
  multipleCandidates?: false;
  workExperience?: string;
  education?: string;
  suitableFor?: string[];
  responsibilities?: string;
  duties?: string;
  status?: string;
  openingDate?: string;
  closingDate?: string;
  contactPerson?: string;
  contactPhone?: string;
  additionalContact?: string;
  showContact?: false;
};

const CreateVacancy = () => {
  const methods = useForm<CreateVacancyValues>({
    defaultValues: {
      jobTitle: '',
      jobDepartment: '',
      jobDescription: '',
      employmentTypes: [],
      location: '',
      salary: '',
      multipleCandidates: false,
      workExperience: '',
      education: '',
      suitableFor: [],
      responsibilities: '',
      duties: '',
      status: '',
      openingDate: '',
      closingDate: '',
      contactPerson: '',
      contactPhone: '',
      additionalContact: '',
      showContact: false,
    },
  });

  const onSubmit = (data: CreateVacancyValues) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between gap-5 mb-3">
            <h2 className="text-xl text-dark-text font-libre font-semibold">
              Create Vacancies
            </h2>
            <div className="flex items-center gap-5">
              <Button
                variant="secondary"
                size="sm"
                leftIcon={<MdOutlineClose size={14} />}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                leftIcon={<FaSave size={14} />}
                onClick={methods.handleSubmit(onSubmit)}
                type="submit"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="grid w-full h-full grid-cols-[repeat(2,minmax(100px,1fr))] grid-rows-[repeat(4,minmax(100px,auto))] auto-cols-[minmax(160px,auto)] auto-rows-[minmax(100px,auto)] gap-2.5 [grid-auto-flow:dense]">
            <div className="row-span-3">
              <BasicInformation />
            </div>
            <div className="row-span-2">
              <ApplicantRequirements />
            </div>
            <div className="row-span-2">
              <ContactInformation />
            </div>
            <div className="row-span-1">
              <DateAndStatus />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateVacancy;

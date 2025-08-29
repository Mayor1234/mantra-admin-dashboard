import { FormProvider, useForm, useWatch } from 'react-hook-form';
import Pagination from '../pagination/Pagination';
import Table from '../table/Table';
import { FormCheckbox } from '../form';
// import { MdEmail } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import type { ReactNode } from 'react';

type DataType = {
  id: number;
  name: string;
  position: string;
  date: string;
  status: {
    val: string;
    step: number;
  };
  email: string;
  rating: number;
};

// | { val: string; step: number }
type TableColumn<T> = {
  key: keyof T;
  label: string | ReactNode;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

type FormValues = {
  selectedPositions: Record<string, boolean>;
};

const applicants: DataType[] = [
  {
    id: 1,
    name: 'Brendan Bradt',
    position: 'UI/UX Designer',
    date: 'Sep, 12 2023',
    status: {
      val: 'New Application',
      step: 1,
    },
    email: 'b.bradtke@example.com',
    rating: 0,
  },
  {
    id: 2,
    name: 'Jameson Steul',
    position: 'Full Stack Developer',
    date: 'Sep, 10 2023',
    status: {
      val: 'Interview 1',
      step: 3,
    },
    email: 'steuber2012@example.com',
    rating: 4,
  },
  {
    id: 3,
    name: 'Ellen Howell',
    position: 'UI/UX Designer',
    date: 'Sep. 3 2023',
    status: { val: 'Review', step: 2 },
    email: 'elev4452@example.cc',
    rating: 0,
  },
  {
    id: 4,
    name: 'Krystina Kautz',
    position: 'Data Analyst',
    date: 'Sep. 1 2023',
    status: { val: 'Onboarding', step: 5 },
    email: 'krkautze@example.com',
    rating: 5,
  },
  {
    id: 5,
    name: 'Colt Lakin',
    position: 'Frontend Developer',
    date: 'Aug. 28 2023',
    status: { val: 'Offer Extended', step: 4 },
    email: 'colrtlakin@example.cc',
    rating: 5,
  },
  {
    id: 6,
    name: 'Donnie Howell',
    position: 'G++ Game Developer',
    date: 'Aug. 24 2023',
    status: { val: 'New Application', step: 1 },
    email: 'd.qwert@example.com',
    rating: 0,
  },
  {
    id: 7,
    name: 'Ellen Howell',
    position: 'PHP Web Developer',
    date: 'Aug. 24 2023',
    status: { val: 'Interview 2', step: 3 },
    email: 'e.howell12@example.cc',
    rating: 4,
  },
  {
    id: 8,
    name: 'Gabriella Lakir',
    position: 'Project Manager',
    date: 'Aug. 22 2023',
    status: { val: 'Review', step: 2 },
    email: 'g.lakin1990@example',
    rating: 3,
  },
  // Add other applicants similarly...
];
const ApplicantsTable = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      selectedPositions: applicants.reduce(
        (acc, item) => ({
          ...acc,
          [item.id]: false,
        }),
        {}
      ),
    },
  });

  const { control, setValue } = methods;
  const selectedPositions = useWatch({ control, name: 'selectedPositions' });
  console.log(selectedPositions);

  // Handle select all/deselect all checkbox
  const handleSelectAll = (checked: boolean) => {
    const newSelection = applicants.reduce(
      (acc, item) => ({ ...acc, [item.id]: checked }),
      {}
    );
    setValue('selectedPositions', newSelection);
  };

  // Check if all visible rows are selected
  const allSelected =
    applicants.length > 0 &&
    applicants.every((item) => selectedPositions[item.id]);

  // Check if some (but not all) rows are selected
  const indeterminate =
    !allSelected && applicants.some((item) => selectedPositions[item.id]);

  const columns: TableColumn<DataType>[] = [
    {
      key: 'name',
      label: (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={allSelected}
            ref={(input) => {
              if (input) {
                input.indeterminate = indeterminate;
              }
            }}
            onChange={(e) => handleSelectAll(e.target.checked)}
            className="appearance-none h-4 w-4 text-pry border border-border bg-gray-100 rounded-sm focus:ring-active focus:ring-2 focus:outline-none checked:focus:ring-border focus:ring-offset-2 focus:ring-offset-gray-100 checked:bg-pry checked:border-transparent checked:focus:ring-offset-gray-100"
          />
          <span>Applicant Name</span>
        </div>
      ),
      render: (value, row: DataType) => (
        <div className="flex items-center gap-3">
          <FormCheckbox<FormValues>
            name={`selectedPositions.${row.id}`}
            control={methods.control}
          />
          <div className="w-8 h-8 bg-[#D8D8D8] border border-[#979797] rounded-full" />
          <span className="text-dark-text font-medium font-libre">
            {value as string}
          </span>
        </div>
      ),
    },
    {
      key: 'position',
      label: 'Position Applied',
      render: (value) => (
        <span className="text-dark text-sm font-medium font-mulish ">
          {value as string}
        </span>
      ),
    },
    {
      key: 'date',
      label: 'Application Date',
      render: (value) =>
        typeof value === 'string' || typeof value === 'number' ? (
          <span className="text-dark font-medium font-libre text-sm">
            {value}
          </span>
        ) : null,
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) =>
        typeof value === 'object' && 'val' in value && 'step' in value ? (
          <div>
            <p className="font-libre text-sm text-dark mb-1">{value.val}</p>
            <div className="flex gap-1.5">
              {Array.from({ length: 6 }, (_, i) => (
                <span
                  key={i}
                  className={`w-5 h-1.5 rounded-sm ${
                    i < value.step ? 'bg-pry' : 'bg-[#F3EEFE]'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : null,
    },
    {
      key: 'email',
      label: 'Contact Information',
      render: (value) =>
        typeof value === 'string' ? (
          <div className="flex items-center gap-2">
            {/* <MdEmail className="text-icon" /> */}
            <p className="text-dark font-medium font-libre text-sm">{value}</p>
          </div>
        ) : null,
    },
    {
      key: 'rating',
      label: 'Ratings',
      render: (value) => (
        <div className="flex justify-between items-center">
          <div className="flex gap-[3px]">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                size={14}
                className={`${
                  i < (typeof value === 'number' ? value : 0)
                    ? 'text-[#FAAB3C]'
                    : 'text-[#F8D8AB]'
                } ] `}
                key={i}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <FormProvider {...methods}>
      <div className="border border-border p-3 rounded-2xl">
        <Table<DataType> data={applicants} columns={columns} />
        <Pagination />
      </div>
    </FormProvider>
  );
};

export default ApplicantsTable;

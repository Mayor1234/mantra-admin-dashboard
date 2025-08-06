import Table from '../table/Table';
import { type ReactNode } from 'react';
import { FaGlobe } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Pagination from '../pagination/Pagination';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FormCheckbox } from '../form';

type DataType = {
  id: number;
  title: string;
  location: string;
  applicants: number;
  newApplicants: number;
  status: 'OPEN' | 'IN PROGRESS' | 'COMPLETED';
  published: string;
};

type TableColumn<T> = {
  key: keyof T;
  label: string | ReactNode;
  render?: (value: T[keyof T], row: T, rowIndex: number) => ReactNode;
};

type FormValues = {
  selectedPositions: Record<string, boolean>;
};

const data: DataType[] = [
  {
    id: 1,
    title: 'Ruby on Rails Deve',
    location: 'Remote',
    applicants: 34,
    newApplicants: 3,
    status: 'OPEN',
    published: 'Sep,12 2023',
  },
  {
    id: 2,
    title: 'iOS App Developer',
    location: 'Dayton',
    applicants: 122,
    newApplicants: 33,
    status: 'COMPLETED',
    published: 'Aug,02 2023',
  },
  {
    id: 3,
    title: 'Network Administrator',
    location: 'Phoenix',
    applicants: 45,
    newApplicants: 13,
    status: 'IN PROGRESS',
    published: 'Aug,22 2023',
  },
  {
    id: 4,
    title: 'JavaScript Developer',
    location: 'Remote',
    applicants: 57,
    newApplicants: 5,
    status: 'OPEN',
    published: 'Sep,6 2023',
  },
  {
    id: 5,
    title: 'Graphic Designer',
    location: 'Gothenburg',
    applicants: 74,
    newApplicants: 22,
    status: 'OPEN',
    published: 'Aug,24 2023',
  },
  {
    id: 6,
    title: 'C++ Game Developer',
    location: 'Munich',
    applicants: 44,
    newApplicants: 12,
    status: 'IN PROGRESS',
    published: 'Jul,14 2023',
  },
  {
    id: 7,
    title: 'Python Django Dev',
    location: 'Remote',
    applicants: 24,
    newApplicants: 12,
    status: 'IN PROGRESS',
    published: 'Jul,30 2023',
  },
  {
    id: 8,
    title: 'iOS App Developer',
    location: 'Kathmandu',
    applicants: 126,
    newApplicants: 12,
    status: 'COMPLETED',
    published: 'Jun,21 2023',
  },
];

const VacanciesTable = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      selectedPositions: data.reduce(
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
  // console.log(selectedPositions);
  // Handle select all/deselect all checkbox
  const handleSelectAll = (checked: boolean) => {
    const newSelection = data.reduce(
      (acc, item) => ({ ...acc, [item.id]: checked }),
      {}
    );
    setValue('selectedPositions', newSelection);
  };

  // Check if all visible rows are selected
  const allSelected =
    data.length > 0 && data.every((item) => selectedPositions[item.id]);

  // Check if some (but not all) rows are selected
  const indeterminate =
    !allSelected && data.some((item) => selectedPositions[item.id]);

  const columns: TableColumn<DataType>[] = [
    {
      key: 'title',
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
          <span>Position Title</span>
        </div>
      ),
      render: (value, row: DataType) => {
        return (
          <div className="flex items-center gap-3">
            <FormCheckbox<FormValues>
              name={`selectedPositions.${row.id}`}
              control={methods.control}
            />
            <span className="bg-purple-600 h-7.5 w-7.5 rounded-lg"></span>
            <span>{value}</span>
          </div>
        );
      },
    },
    {
      key: 'location',
      label: 'Location',
      render: (value: string | number) => {
        if (typeof value === 'string') {
          let Icon = FaMapMarkerAlt;

          if (value.toLowerCase().includes('remote')) {
            Icon = FaGlobe;
          }

          return (
            <span className="flex items-center gap-2">
              <Icon className="text-[#969DA6] w-3 h-3" />
              {value}
            </span>
          );
        }
        return value;
      },
    },
    {
      key: 'applicants',
      label: 'Applicants',
      render: (value: string | number, row: DataType) => (
        <div>
          {value}{' '}
          {row.newApplicants && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              {row.newApplicants} new
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string | number) => {
        const statusColors = {
          OPEN: 'text-green-600 bg-green-100',
          'IN PROGRESS': 'text-yellow-600 bg-yellow-100',
          COMPLETED: 'text-gray-600 bg-gray-100',
        };
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              statusColors[value as keyof typeof statusColors]
            }`}
          >
            {value}
          </span>
        );
      },
    },
    { key: 'published', label: 'Published' },
    { key: 'newApplicants', label: 'Last 7 days' },
  ];

  return (
    <FormProvider {...methods}>
      <div className="border border-border p-3 rounded-2xl">
        <Table<DataType> data={data} columns={columns} />
        <Pagination />
      </div>
    </FormProvider>
  );
};

export default VacanciesTable;

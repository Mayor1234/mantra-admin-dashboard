import { type ReactNode } from 'react';
import Table from '../table/Table';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { formatStatusColor } from '../../../shared/helper/formatStatus';
import Pagination from '../pagination/Pagination';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FormCheckbox } from '../form';

// import { FormCheckbox } from '../form';

type DataType = {
  id: number;
  name: string;
  position: string;
  department: string;
  status: 'ACTIVE' | 'REMOTE' | 'ON LEAVE' | 'RESIGNED' | 'TERMINATED';
  joiningDate: string;
  email: string;
  phone: string;
};

type TableColumn<T> = {
  key: keyof T;
  label: string | ReactNode;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

type FormValues = {
  selectedPositions: Record<string, boolean>;
};

const employees: DataType[] = [
  {
    id: 1,
    name: 'Joseph Idoko',
    position: 'GM Operations',
    department: 'Operations',
    status: 'ACTIVE',
    joiningDate: 'Sep,12 2023',
    email: 'kate.towne@example.com',
    phone: '(123) 456-7890',
  },
  {
    id: 2,
    name: 'Onyeka Onye',
    position: 'Fleet Managae',
    department: 'Sales & Marketing',
    status: 'REMOTE',
    joiningDate: 'Aug,2 2023',
    email: 'wiza1234@example.com',
    phone: '(555) 123-4567',
  },
  {
    id: 3,
    name: 'Stella Okoh',
    position: 'GM Finance',
    department: 'Finance',
    status: 'RESIGNED',
    joiningDate: 'Jul,12 2023',
    email: 'rifison-leo@example.com',
    phone: '(789) 012-3456',
  },
  {
    id: 4,
    name: 'Abiola Arinde',
    position: 'Finance',
    department: 'Technical',
    status: 'ON LEAVE',
    joiningDate: 'Apr.5 2023',
    email: 'bitsfor-z@example.com',
    phone: '(123) 456-7890',
  },
  {
    id: 5,
    name: 'Kingsley Ossai',
    position: 'Guards Operations',
    department: 'Development',
    status: 'ACTIVE',
    joiningDate: 'Feb,11 2023',
    email: 'tristionbode@example.com',
    phone: '(888) 555-7890',
  },
  {
    id: 6,
    name: 'Kayode Idowu',
    position: 'Finance',
    department: 'Department',
    status: 'ACTIVE',
    joiningDate: 'Jan,29 2023',
    email: 'graham-rfc@example.com',
    phone: '(123) 554-7612',
  },
  {
    id: 7,
    name: 'Edikan Williw',
    position: 'Business Develop.',
    department: 'Analytics & Data',
    status: 'REMOTE',
    joiningDate: 'Nov,18 2022',
    email: 'ann.jastexample.com',
    phone: '(888) 324-5678',
  },
  {
    id: 8,
    name: 'James Edoh',
    position: 'Security Coordinator',
    department: 'Sales & Marketing',
    status: 'TERMINATED',
    joiningDate: 'Jan,10 2022',
    email: 'towne220@example.com',
    phone: '(143) 453-8733',
  },
];

const EmploymentTable = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      selectedPositions: employees.reduce(
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
    const newSelection = employees.reduce(
      (acc, item) => ({ ...acc, [item.id]: checked }),
      {}
    );
    setValue('selectedPositions', newSelection);
  };

  // Check if all visible rows are selected
  const allSelected =
    employees.length > 0 &&
    employees.every((item) => selectedPositions[item.id]);

  // Check if some (but not all) rows are selected
  const indeterminate =
    !allSelected && employees.some((item) => selectedPositions[item.id]);
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
          <span>Name</span>
        </div>
      ),
      render: (value, row: DataType) => (
        <div className="flex items-center gap-3">
          <FormCheckbox<FormValues>
            name={`selectedPositions.${row.id}`}
            control={methods.control}
          />
          <div className="w-8 h-8 bg-[#D8D8D8] border border-[#979797] rounded-full" />
          <span className="text-dark-text font-medium font-libre">{value}</span>
        </div>
      ),
    },
    {
      key: 'position',
      label: 'Position',
      render: (value) => (
        <span className="text-dark text-sm font-medium font-libre ">
          {value}
        </span>
      ),
    },
    {
      key: 'department',
      label: 'Department',
      render: (value) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span
          className={`text-${
            typeof value === 'string' ? value.toLowerCase() : ''
          } ${formatStatusColor(value as string)} text-xs`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'joiningDate',
      label: 'Joining Date',
      render: (value) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value}
        </span>
      ),
    },
    {
      key: 'email',
      label: 'Email',
      render: (value) => (
        <div className="flex items-center gap-2">
          <MdEmail className="text-icon" />
          <p className="text-dark font-medium font-libre text-sm">{value}</p>
        </div>
      ),
    },
    {
      key: 'phone',
      label: 'Phone Number',
      render: (value) => (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-icon" />
            <span className="text-dark font-medium font-libre text-sm">
              {value}
            </span>
          </div>
          <div className="flex flex-col gap-[3px]">
            {Array.from({ length: 3 }, (_, i) => (
              <span
                key={i}
                className="w-[3px] h-[3px] bg-[#969DA6] rounded-full inline-block"
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
        <Table<DataType> data={employees} columns={columns} />
        <Pagination />
      </div>
    </FormProvider>
  );
};

export default EmploymentTable;

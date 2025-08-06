import { type ReactNode } from 'react';
import Table from '../table/Table';
import { formatStatusColor } from '../../../shared/helper/formatStatus';
import Pagination from '../pagination/Pagination';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FormCheckbox } from '../form';

type DataType = {
  id: number;
  name: string;
  position: string;
  rate: string;
  period: string;
  workingHours: string;
  salary: string;
  status: 'ACTIVE' | 'REMOTE' | 'ON LEAVE' | 'RESIGNED' | 'TERMINATED';
};

type TableColumn<T> = {
  key: keyof T;
  label: string | ReactNode;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

type FormValues = {
  selectedPositions: Record<string, boolean>;
};

const payroll: DataType[] = [
  {
    id: 1,
    name: 'Joseph Idoko',
    position: 'GM Operations',
    rate: 'Operations',
    period: 'Sep,12 2023',
    workingHours: 'full day',
    salary: '$2400',
    status: 'ACTIVE',
  },
  {
    id: 2,
    name: 'Onyeka Onye',
    position: 'Fleet Managae',
    rate: 'Sales & Marketing',
    period: 'Aug,2 2023',
    workingHours: 'full day',
    salary: '$800',
    status: 'REMOTE',
  },
  {
    id: 3,
    name: 'Stella Okoh',
    position: 'GM Finance',
    rate: 'Finance',
    period: 'Jul,12 2023',
    workingHours: 'part time',
    salary: '$700',
    status: 'RESIGNED',
  },
  {
    id: 4,
    name: 'Abiola Arinde',
    position: 'Finance',
    rate: 'Technical',
    period: 'Apr.5 2023',
    workingHours: 'full day',
    salary: '$3500',
    status: 'ON LEAVE',
  },
  {
    id: 5,
    name: 'Kingsley Ossai',
    position: 'Guards Operations',
    rate: 'Development',
    period: 'Feb,11 2023',
    workingHours: 'full day',
    salary: '$2300',
    status: 'ACTIVE',
  },
  {
    id: 6,
    name: 'Kayode Idowu',
    position: 'Finance',
    rate: 'rate',
    period: 'Jan,29 2023',
    workingHours: 'part time',
    salary: '$1000',
    status: 'ACTIVE',
  },
  {
    id: 7,
    name: 'Edikan Williw',
    position: 'Business Develop.',
    rate: 'Analytics & Data',
    period: 'Nov,18 2022',
    workingHours: 'full day',
    salary: '$900',
    status: 'REMOTE',
  },
  {
    id: 8,
    name: 'James Edoh',
    position: 'Security Coordinator',
    rate: 'Sales & Marketing',
    period: 'Jan,10 2022',
    workingHours: 'part time',
    salary: '$500',
    status: 'TERMINATED',
  },
];

const PayrollTable = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      selectedPositions: payroll.reduce(
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
    const newSelection = payroll.reduce(
      (acc, item) => ({ ...acc, [item.id]: checked }),
      {}
    );
    setValue('selectedPositions', newSelection);
  };

  // Check if all visible rows are selected
  const allSelected =
    payroll.length > 0 && payroll.every((item) => selectedPositions[item.id]);

  // Check if some (but not all) rows are selected
  const indeterminate =
    !allSelected && payroll.some((item) => selectedPositions[item.id]);

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
      render: (value: string | number, row: DataType) => (
        <div className="flex items-center gap-2">
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
      render: (value: string | number) => (
        <span className="text-dark text-xs font-medium font-mulish ">
          {value}
        </span>
      ),
    },
    {
      key: 'rate',
      label: 'Rate',
      render: (value: string | number) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value}
        </span>
      ),
    },
    {
      key: 'period',
      label: 'Period',
      render: (value: string | number) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value}
        </span>
      ),
    },
    {
      key: 'workingHours',
      label: 'Working Hours',
      render: (value: string | number) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value}
        </span>
      ),
    },
    {
      key: 'salary',
      label: 'Salary',
      render: (value: string | number) => (
        <div className="flex items-center gap-2">
          <p className="text-dark font-medium font-libre text-sm">{value}</p>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string | number) => (
        <span
          className={`text-${
            typeof value === 'string' ? value.toLowerCase() : ''
          } ${formatStatusColor(value as string)} text-xs`}
        >
          {value}
        </span>
      ),
    },
  ];
  return (
    <FormProvider {...methods}>
      <div className="border border-border p-3 rounded-2xl">
        <Table<DataType> data={payroll} columns={columns} />
        <Pagination />
      </div>
    </FormProvider>
  );
};

export default PayrollTable;

import { type ReactNode } from 'react';

import { formatStatusColor } from '../../../../shared/helper/formatStatus';
import Table from '../../table/Table';
import Pagination from '../../pagination/Pagination';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FormCheckbox } from '../../form';

// import { FormCheckbox } from '../form';

type DataType = {
  id: number;
  name: string;
  position: string;
  department: string;
  leaveType: string;
  period: string;
  reason: string;
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

const leaves: DataType[] = [
  {
    id: 1,
    name: 'Joseph Idoko',
    position: 'GM Operations',
    department: 'Operations',
    leaveType: 'Annual Leave',
    period: 'Aug,2 2023',
    reason: 'Family vacation',
    status: 'ACTIVE',
  },
  {
    id: 2,
    name: 'Onyeka Onye',
    position: 'Fleet Managae',
    department: 'Sales & Marketing',
    leaveType: 'Sick Leave',
    period: 'Jul,15 2023',
    reason: 'Medical emergency',
    status: 'REMOTE',
  },
  {
    id: 3,
    name: 'Stella Okoh',
    position: 'GM Finance',
    department: 'Finance',
    leaveType: 'Maternity Leave',
    period: 'Jun,10 2023',
    reason: 'Childbirth',
    status: 'RESIGNED',
  },
  {
    id: 4,
    name: 'Abiola Arinde',
    position: 'Finance',
    department: 'Technical',
    leaveType: 'Annual Leave',
    period: 'May,20 2023',
    reason: 'Personal reasons',
    status: 'ON LEAVE',
  },
  {
    id: 5,
    name: 'Kingsley Ossai',
    position: 'Guards Operations',
    department: 'Development',
    leaveType: 'Sick Leave',
    period: 'Apr,5 2023',
    reason: 'Health issues',
    status: 'ACTIVE',
  },
  {
    id: 6,
    name: 'Kayode Idowu',
    position: 'Finance',
    department: 'Department',
    leaveType: 'Annual Leave',
    period: 'Mar,1 2023',
    reason: 'Family event',
    status: 'ACTIVE',
  },
  {
    id: 7,
    name: 'Edikan Williw',
    position: 'Business Develop.',
    department: 'Analytics & Data',
    leaveType: 'Sick Leave',
    period: 'Feb,15 2023',
    reason: 'Flu',
    status: 'REMOTE',
  },
  {
    id: 8,
    name: 'James Edoh',
    position: 'Security Coordinator',
    department: 'Sales & Marketing',
    leaveType: 'Annual Leave',
    period: 'Jan,10 2023',
    reason: 'Personal reasons',
    status: 'TERMINATED',
  },
];

const LeaveTable = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      selectedPositions: leaves.reduce(
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
    const newSelection = leaves.reduce(
      (acc, item) => ({ ...acc, [item.id]: checked }),
      {}
    );
    setValue('selectedPositions', newSelection);
  };

  // Check if all visible rows are selected
  const allSelected =
    leaves.length > 0 && leaves.every((item) => selectedPositions[item.id]);

  // Check if some (but not all) rows are selected
  const indeterminate =
    !allSelected && leaves.some((item) => selectedPositions[item.id]);

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
      render: (value: string | number) => (
        <span className="text-dark text-xs font-medium font-mulish ">
          {value}
        </span>
      ),
    },
    {
      key: 'department',
      label: 'Department',
      render: (value: string | number) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value}
        </span>
      ),
    },
    {
      key: 'leaveType',
      label: 'Leave Type',
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
      key: 'reason',
      label: 'Reason',
      render: (value: string | number) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value}
        </span>
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
        <Table<DataType> data={leaves} columns={columns} />
        <Pagination />
      </div>
    </FormProvider>
  );
};

export default LeaveTable;

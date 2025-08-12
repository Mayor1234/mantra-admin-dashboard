import { type ReactNode } from 'react';
import Table from '../table/Table';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { formatStatusColor } from '../../../shared/helper/formatStatus';
import Pagination from '../pagination/Pagination';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FormCheckbox } from '../form';
import { employees, type Employee } from '../../../constants/indext';

type TableColumn<T> = {
  key: keyof T;
  label: string | ReactNode;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

type FormValues = {
  selectedPositions: Record<string, boolean>;
};

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
  // console.log(selectedPositions);

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
  const columns: TableColumn<Employee>[] = [
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
      render: (value, row) => (
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
      label: 'Position',
      render: (value) => (
        <span className="text-dark text-sm font-medium font-libre ">
          {value as string}
        </span>
      ),
    },
    {
      key: 'department',
      label: 'Department',
      render: (value) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value as string}
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
          {value as string}
        </span>
      ),
    },
    {
      key: 'joiningDate',
      label: 'Joining Date',
      render: (value) => (
        <span className="text-dark font-medium font-libre text-sm">
          {value as string}
        </span>
      ),
    },
    {
      key: 'email',
      label: 'Email',
      render: (value) => (
        <div className="flex items-center gap-2">
          <MdEmail className="text-icon" />
          <p className="text-dark font-medium font-libre text-sm">
            {value as string}
          </p>
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
              {value as string}
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
        <Table data={employees} columns={columns} />
        <Pagination />
      </div>
    </FormProvider>
  );
};

export default EmploymentTable;

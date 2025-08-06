import { type ReactNode } from 'react';
// import { useNavigate } from 'react-router-dom';

type TableColumn<T> = {
  key: keyof T;
  label: string | ReactNode;
  render?: (value: T[keyof T], row: T, colIndex: number) => ReactNode;
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  height?: string;
};

function Table<T extends Record<string, any>>({
  columns,
  data,
  height,
}: TableProps<T>) {
  // const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-auto">
      <div
        className="overflow-y-auto transition-all duration-300 ease-linear scrollbar border-gray-200"
        style={{ maxHeight: height }}
      >
        <table className="min-w-full text-sm text-left table-auto border-collapse">
          <thead className="sticky top-0 bg-light-text text-[#343942] text-sm w-full z-10">
            <tr>
              {columns.map((col, colIndex) => (
                <th
                  key={colIndex}
                  className="py-4 px-2 max-w-[200px] font-normal text-gray-500 tracking-wide whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 space-y-2">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-[#E0E4EA] hover:bg-gray-50 transition-colors cursor-pointer"
                // onClick={() => navigate(`${row.id}`)}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="text-gray-600 py-3 px-2 max-w-[120px] md:max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis capitalize hover:text-clip"
                  >
                    {col.render
                      ? col.render(row[col.key], row, colIndex)
                      : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

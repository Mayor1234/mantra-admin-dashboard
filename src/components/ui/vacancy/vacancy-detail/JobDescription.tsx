import { FaCalendar } from 'react-icons/fa';
function Detail({
  title,
  value,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <div className="flex justify-between gap-5 w-full py-2 border-b border-border last:border-none">
      <dt className="font-medium text-[#5D6675] text-sm uppercase font-libre flex-1">
        {title}
      </dt>
      <dd className="text-dark font-mulish flex-2 flex items-center gap-2 ">
        {icon && <FaCalendar className="text-icon" />}
        {value}
      </dd>
    </div>
  );
}

import { FaRegEdit } from 'react-icons/fa';

const JobDescription = () => {
  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-base font-libre">
            Job Description
          </h2>
          <button className="text-[#343942] text-sm font-libre flex items-center gap-2 cursor-pointer">
            <FaRegEdit size={14} className="" />
            Edit Vacancy
          </button>
        </div>
        <dl className="flex flex-col gap-2 text-sm p-4 bg-[#F4F5F7] w-full rounded-2xl">
          <Detail title="Job Title" value="Senior Software Developer" />
          <Detail
            title="Job Status"
            value={<span className="text-green-600">● Active</span>}
          />
          <Detail
            title="Opening - Closing Dates"
            value="Aug 22 2023 - Aug 22 2023"
            icon
          />
          <Detail
            title="Salary"
            value="Ensure to check the references provided by Emily Johnson"
          />
          <Detail
            title="Key Skills and Experience"
            value="Java, Spring Framework, REST API design and implementation, experience with Agile methodologies, database management."
          />
          <Detail
            title="Job Description"
            value="We are seeking an experienced Senior Software Developer to join our team. You will be responsible for designing, developing ..."
          />
          <Detail
            title="Notes"
            value="Ensure to check the references provided by Emily Johnson"
          />
        </dl>
      </div>
    </div>
  );
};

export default JobDescription;

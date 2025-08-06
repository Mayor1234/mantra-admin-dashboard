import { FaGlobe } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

type Job = {
  title: string;
  location: string;
  date: string;
  status: 'OPEN' | 'CLOSED';
  applications: number;
  newApplicants: number;
  isRemote?: boolean;
};

const jobs: Job[] = [
  {
    title: 'JavaScript Developer',
    location: 'Salt Lake City',
    date: 'Aug, 24 2023',
    status: 'OPEN',
    applications: 45,
    newApplicants: 2,
  },
  {
    title: 'Project Manager',
    location: 'Remote',
    date: 'Aug, 24 2023',
    status: 'OPEN',
    applications: 99,
    newApplicants: 2,
    isRemote: true,
  },
  {
    title: 'iOS App Developer',
    location: 'Singapore',
    date: 'Sep, 12 2023',
    status: 'OPEN',
    applications: 20,
    newApplicants: 2,
  },
  {
    title: 'UX Designer',
    location: 'Salt Lake City',
    date: 'Sep, 6 2023',
    status: 'OPEN',
    applications: 333,
    newApplicants: 2,
  },
  {
    title: 'C++ Game Developer',
    location: 'Winnipeg',
    date: 'Aug, 12 2023',
    status: 'OPEN',
    applications: 287,
    newApplicants: 2,
  },
  {
    title: 'Graphic Designer',
    location: 'Remote',
    date: 'Sep, 2 2023',
    status: 'OPEN',
    applications: 174,
    newApplicants: 2,
    isRemote: true,
  },
  {
    title: 'Ruby on Rails Developer',
    location: 'Dayton',
    date: 'Sep, 13 2023',
    status: 'OPEN',
    applications: 24,
    newApplicants: 2,
  },
  {
    title: 'C# Software Developer',
    location: 'Remote',
    date: 'Aug, 24 2023',
    status: 'OPEN',
    applications: 49,
    newApplicants: 2,
    isRemote: true,
  },
  {
    title: 'Python Django Developer',
    location: 'Salt Lake City',
    date: 'Aug, 21 2023',
    status: 'OPEN',
    applications: 125,
    newApplicants: 2,
  },
  {
    title: 'Senior React Developer',
    location: 'Seville',
    date: 'Aug, 16 2023',
    status: 'OPEN',
    applications: 25,
    newApplicants: 2,
  },
  {
    title: 'Network Administrator',
    location: 'Remote',
    date: 'Aug, 18 2023',
    status: 'OPEN',
    applications: 49,
    newApplicants: 2,
    isRemote: true,
  },
  {
    title: 'iOS App Developer (Swift)',
    location: 'Singapore',
    date: 'Aug, 12 2023',
    status: 'OPEN',
    applications: 20,
    newApplicants: 2,
  },
];

const VacanciesGrid = () => {
  return (
    <div className="grid w-full h-full grid-cols-[repeat(3,minmax(160px,1fr))] grid-rows-[repeat(4,minmax(160px,auto))] auto-cols-[minmax(160px,auto)] auto-rows-[minmax(100px,auto)] gap-[10px] [grid-auto-flow:dense]">
      {jobs.map((job, i) => (
        <div key={i} className="border border-[#E0E4EA] p-3 rounded-2xl">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 bg-[#969DA6] rounded-md"></div>
              <h3 className="text-dark font-libre text-base">{job.title}</h3>
            </div>
            <div className="text-sm w-full flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  {job.isRemote ? (
                    <FaGlobe size={12} className="text-[#969DA6]" />
                  ) : (
                    <FaMapMarkerAlt size={12} className="text-[#969DA6]" />
                  )}
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar size={12} className="text-[#969DA6]" />
                  <span>{job.date}</span>
                </div>
              </div>
              <button
                typeof="button"
                className="bg-[#DDFCE0] text-dark font-mulish px-5 py-1 rounded-full text-xs"
              >
                Open
              </button>
            </div>
            <hr className="mt-4 mb-6 text-[#E0E4EA]" />
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <p className="text-2xl text-dark font-libre font-semibold">
                  {job.applications}
                </p>
                <span className="text-[#17243E] font-mulish text-sm font-normal">
                  Appls
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center -space-x-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#1D2A57] text-white font-medium">
                  +{job.newApplicants} new
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VacanciesGrid;

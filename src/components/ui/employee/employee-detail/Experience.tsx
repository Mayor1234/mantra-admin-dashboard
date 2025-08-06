import { FaMapMarkerAlt } from 'react-icons/fa';
import { SectionCard } from './SectionCard';

const Experience = () => {
  return (
    <SectionCard title="Experience" editable>
      <div className="space-y-3 text-dark w-full">
        {[
          {
            role: 'Senior Project Manager',
            date: 'Aug, 2023 - Present',
            location: 'Dayton',
            company: 'Tech Solutions Pro',
            summary:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
          },
          {
            role: 'Assistant Project Manager',
            date: 'Jul 2018 - Dec 2019',
            location: 'Louisville',
            company: 'Tech Innovators Ltd.',
            summary:
              'Assisted Project Managers in coordinating project activities, resources, and timelines...',
          },
          {
            role: 'Project Coordinator',
            date: 'Aug, 23 - present',
            location: 'Dayton',
            company: 'Software Solutions',
            summary:
              'Assisted Project Managers in coordinating project activities, resources, and timelines...',
          },
        ].map((exp, i) => (
          <div
            key={i}
            className="mb-3 border-b border-border pb-3 space-y-3 last:border-none"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-base font-libre text-dark">
                {exp.role}
              </p>
              <div className="w-5 h-5 bg-[#969DA6] rounded-lg" />
            </div>
            <div className="text-xs text-gray-500 flex justify-between items-center">
              <span className="text-sm font-libre font-medium text-dark">
                {exp.date}
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> {exp.location}
              </span>
            </div>
            <p className="text-xs font-medium font-libre uppercase text-dark">
              {exp.company}
            </p>
            <p className="text-xs text-[#343942] font-mulish font-normal">
              {exp.summary}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Experience;

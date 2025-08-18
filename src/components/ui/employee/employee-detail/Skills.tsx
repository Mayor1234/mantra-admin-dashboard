import { SectionCard } from './SectionCard';

const Skills = () => {
  return (
    <SectionCard title="Skills">
      <div className="flex flex-wrap gap-2">
        {[
          'Project Management',
          'Team Leadership',
          'Data Agile Methodologies',
          'Risk Management',
          //   'Budgeting and Financial Management',
          'Stakeholder Communication',
          'Process Improvement',
          'Scope Management',
          'Quality Assurance',
          'Presentation Skills',
          'Conflict Resolution',
          //   'Data Analytics Tools',
          'Trello',
          'JIRA',
          'Microsoft Project',
        ].map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-100 rounded-full text-xs text-dark"
          >
            {skill}
          </span>
        ))}
      </div>
    </SectionCard>
  );
};

export default Skills;

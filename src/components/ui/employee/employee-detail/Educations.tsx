import { SectionCard } from './SectionCard';

const Educations = () => {
  return (
    <SectionCard title="Educations" editable>
      <div className="space-y-2 pb-3 border-b border-border">
        <div className="h-7 w-7 bg-[#D8D8D8] border border-[#979797] rounded-full" />
        <p className="font-medium font-libre text-base text-dark-text tracking-normal">
          Bachelor of Science in Computer Science
        </p>
        <p className="text-sm text-dark font-medium font-libre uppercase">
          University of Technology
        </p>
        <p className="text-sm font-libre font-medium">Graduated May 2017</p>
      </div>
    </SectionCard>
  );
};

export default Educations;

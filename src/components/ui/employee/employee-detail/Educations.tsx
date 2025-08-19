import { SectionCard } from './SectionCard';

const Educations = () => {
  return (
    <SectionCard title="Education" editable>
      <div></div>
      <div className="space-y-2 pb-3 border-b border-border py-2">
        <p className="font-medium font-libre text-base text-dark-text tracking-normal">
          Bachelor of Science in Computer Science
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="text-xs text-dark font-medium font-libre uppercase">
            University of Technology
          </p>
          <p className="text-sm font-libre font-medium">Graduated May 2017</p>
        </div>
      </div>
      <div className="space-y-2 pb-3 border-b border-border py-2">
        <p className="font-medium font-libre text-base text-dark-text tracking-normal">
          B.Engr. Civil Engineering
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="text-xs text-dark font-medium font-libre uppercase">
            University of Uyo | Nigeria
          </p>
          <p className="text-sm font-libre font-medium">Graduated May 2017</p>
        </div>
      </div>
    </SectionCard>
  );
};

export default Educations;

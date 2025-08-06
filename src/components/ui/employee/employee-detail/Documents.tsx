import { SectionCard } from './SectionCard';
import { FaFilePdf } from 'react-icons/fa';

const Documents = () => {
  return (
    <SectionCard title="Documents" editable>
      <div className="space-y-3 text-dark w-full">
        {[
          { name: 'Employment Contract', color: 'bg-[#F3EEFE]' },
          { name: 'Resume', color: 'bg-[#FEF0DB]' },
          { name: 'Personal Information', color: 'bg-[#EEF4FE]' },
        ].map((doc, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-2 rounded-lg mb-2 ${doc.color}`}
          >
            <span className="flex items-center gap-2">
              <FaFilePdf className="text-blue-500 rounded-sm" />
              <span className="font-libre font-medium text-base">
                {doc.name}
              </span>
            </span>
            <div className="space-y-[3px]">
              <div className="w-[3px] h-[3px] rounded-full bg-[#969DA6] " />
              <div className="w-[3px] h-[3px] rounded-full bg-[#969DA6] " />
              <div className="w-[3px] h-[3px] rounded-full bg-[#969DA6] " />
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Documents;

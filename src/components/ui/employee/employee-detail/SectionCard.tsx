import { FaRegEdit } from 'react-icons/fa';
interface SectionCardProps {
  title: string;
  editable?: boolean;
  kebab?: boolean;
  children: React.ReactNode;
}

export const SectionCard = ({
  title,
  editable = false,
  kebab = false,
  children,
}: SectionCardProps) => (
  <div>
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-dark font-semibold text-lg font-libre">{title}</h3>
      {kebab && (
        <div className="space-y-[3px]">
          <div className="w-[3px] h-[3px] rounded-full bg-[#969DA6] " />
          <div className="w-[3px] h-[3px] rounded-full bg-[#969DA6] " />
          <div className="w-[3px] h-[3px] rounded-full bg-[#969DA6] " />
        </div>
      )}
      {editable && (
        <button className="bg-[#f4f5f7] text-[#343942] py-1 px-3 font-mulish font-normal text-sm flex items-center gap-2 rounded-2xl">
          <FaRegEdit size={14} />
          Edit
        </button>
      )}
    </div>
    {children}
  </div>
);

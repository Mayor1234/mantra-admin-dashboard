export function Activity({
  type,
  color,
  text,
}: {
  type: string;
  color: string;
  text: string;
}) {
  const colorMap: Record<string, string> = {
    green: 'bg-[#23EB31]',
    purple: 'bg-[#9566F2]',
    orange: 'bg-[#FAAB3C]',
  };
  return (
    <li className="pb-2 border-b border-border last:border-none">
      <div className="font-medium flex items-center gap-2 mb-1">
        <div className={`${colorMap[color]} w-4 h-4 rounded-full`}></div>
        <p className="text-dark-text font-libre">{type}</p>
      </div>
      <div className="text-[#343942] text-xs font-mulish">{text}</div>
    </li>
  );
}

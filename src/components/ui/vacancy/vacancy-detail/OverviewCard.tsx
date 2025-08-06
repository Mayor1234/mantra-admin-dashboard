export function Card({
  title,
  value,
  delta,
  color,
}: {
  title: string;
  value: string;
  delta: string;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    green: 'bg-[#DDFCE0]',
    blue: 'bg-[#EEF4FE]',
    purple: 'bg-[#F3EEFE]',
    yellow: 'bg-[#FEF0DB]',
  };
  return (
    <div className={`rounded-xl p-3 ${colorMap[color]}`}>
      <div className="text-xs text-[#5D6675] font-medium font-libre uppercase mb-1">
        {title}
      </div>
      <div className="text-lg flex items-center justify-between font-libre">
        <p className="text-dark-text font-semibold text-xl">{value}</p>
        <p className="text-xs text-dark bg-[#AFFFB6] p-1 px-2 rounded-full">
          ↑ {delta}
        </p>
      </div>
    </div>
  );
}

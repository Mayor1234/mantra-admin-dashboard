type ProgressBarProps = {
  value: number; // 0 to 100
  label?: string;
  height?: string;
  color?: string; // Tailwind class or hex
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  height = 'h-2',
  color = 'bg-blue-600',
}) => {
  const percentage = Math.min(Math.max(value, 0), 100);

  return (
    <div>
      <div className="w-full">
        {label && (
          <div className="mb-1 text-sm text-dark font-medium font-libre flex justify-between">
            <span>{label}</span>
            <span>{percentage}%</span>
          </div>
        )}
        <div className={`w-full bg-[#fff] rounded-full ${height}`}>
          <div
            className={`${color} h-full rounded-full transition-all duration-500 ease-in-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

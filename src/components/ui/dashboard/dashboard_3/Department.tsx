type Department = {
  name: string;
  bgColor: string;
  badgeColor?: string;
  hasNew?: boolean;
};

const departments: Department[] = [
  {
    name: 'Development',
    bgColor: 'bg-violet-100',
    badgeColor: 'bg-violet-500',
    hasNew: true,
  },
  {
    name: 'Sales & Marketing',
    bgColor: 'bg-orange-100',
  },
  {
    name: 'Project Management',
    bgColor: 'bg-green-100',
    badgeColor: 'bg-green-600',
    hasNew: true,
  },
  {
    name: 'Analytics & Data',
    bgColor: 'bg-blue-100',
    badgeColor: 'bg-blue-600',
    hasNew: true,
  },
  {
    name: 'Finance',
    bgColor: 'bg-violet-100',
  },
];

const DepartmentList = () => {
  return (
    <div className="bg-white p-3 w-full max-w-md">
      <h3 className="text-base font-medium font-libre mb-2 text-dark">
        Departments
      </h3>
      <div className="space-y-1.5">
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`flex justify-between items-center px-3 py-1 rounded-xl ${dept.bgColor}`}
          >
            {/* Department Name */}
            <p className="text-xs font-medium text-dark">{dept.name}</p>

            {/* Right side: Avatars + Badge */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white"
                  />
                ))}
              </div>

              {dept.hasNew && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full text-white font-medium ${dept.badgeColor}`}
                >
                  +2 new
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;

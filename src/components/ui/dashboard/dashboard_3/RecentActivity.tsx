const RecentActivity = () => {
  return (
    <div className="p-3 rounded-lg bg-[#135CCA] text-[#fff]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium font-libre mb-2">Recent Activity</h3>
        <p className="text-xs px-3 py-1 bg-[#AFFFB6] text-dark rounded-3xl font-mulish">
          All Activity
        </p>
      </div>
      <div className="bg-[#71a6fb] p-3 rounded-lg mb-2">
        <p className="text-[#E0E4EA] text-xs mb-1">
          <span>11:20AM,</span>
          <span>Mon 12 Sept 2023</span>
        </p>
        <p className="text-[#F3EEFE] text-sm">
          We welcome Sophia Anderson to our team as a network administrator
        </p>
      </div>
      <p className="text-[#F3EEFE] text-xs">TODAY YOU MAKES 12 ACTIVITY</p>
    </div>
  );
};

export default RecentActivity;

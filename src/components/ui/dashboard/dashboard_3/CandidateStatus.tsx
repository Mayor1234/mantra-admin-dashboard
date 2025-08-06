type Application = {
  name: string;
  role: string;
  status: 'OFFER' | 'SHORTLIST' | 'REJECTED';
};

const applications: Application[] = [
  { name: 'Bella Hamill', role: 'Marketing Specialist', status: 'OFFER' },
  { name: 'Dashonte Clarke', role: 'Project Manager', status: 'SHORTLIST' },
  //   { name: 'Julian Gruber', role: 'Project Manager', status: 'OFFER' },
];

const statusColors = {
  OFFER: 'bg-green-100 text-green-700',
  SHORTLIST: 'bg-blue-100 text-blue-700',
  REJECTED: 'bg-orange-100 text-orange-700',
};

const CandidateStatus = () => {
  return (
    <div className="bg-white p-3 w-full max-w-md">
      {/* Header */}
      <h3 className="text-base font-medium font-libre mb-2 text-dark">
        Candidate Status
      </h3>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-bold text-[#17243E]">2651</span>
        <span className="text-xs font-medium text-dark">EMPLOYERS</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 my-3 flex overflow-hidden">
        <div
          className="bg-blue-600 h-full rounded-full mr-1"
          style={{ width: '69%' }}
        />
        <div
          className="bg-green-400 h-full rounded-r-full mr-1"
          style={{ width: '14%' }}
        />
        <div
          className="bg-orange-400 h-full rounded-r-full mr-1"
          style={{ width: '7%' }}
        />
      </div>

      {/* Legends */}
      <div className="flex justify-between text-xs font-medium text-gray-700 mb-4">
        <div className="flex flex-col gap-1 text-xs">
          <div>
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-1" />
            <span>69%</span>{' '}
          </div>
          <span className="text-[#343942]/80 text-xs">TOTAL APPLICATIONS</span>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <div>
            <span className="inline-block w-2 h-2 rounded-full bg-[#23EB31] mr-1" />
            <span>14%</span>{' '}
          </div>
          <span className="text-[#343942]/80 text-xs">SHORTLISTED</span>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <div>
            <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mr-1" />
            <span>7%</span>{' '}
          </div>
          <span className="text-[#343942]/80 text-xs">REJECTED</span>
        </div>
      </div>

      {/* Recent Applications */}
      <h3 className="text-sm font-medium text-dark mb-2">
        Recent Applications
      </h3>
      <div className="space-y-3">
        {applications.map((app, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-300" />
              <div className="flex items-center gap-3 text-xs">
                <h4 className="font-medium text-dark">{app.name}</h4>
                <p className="text-[#343942]/80">{app.role}</p>
              </div>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                statusColors[app.status]
              }`}
            >
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateStatus;

const data = [
  {
    stage: 'New Application',
    color: 'bg-orange-500',
    progress: 1,
    applicants: [
      {
        name: 'Diana Campos',
        date: 'Sep, 12 2023',
        email: 'b.bradtke@example.com',
      },
      {
        name: 'Brendan Bradtke',
        date: 'Sep, 12 2023',
        email: 'candidate@email.com',
      },
      {
        name: 'Donnie Howell',
        date: 'Sep, 11 2023',
        email: 'hovel2001@example.com',
      },
      {
        name: 'Jameson Steuber',
        date: 'Sep, 8 2023',
        email: 'steuberjam@example.com',
      },
      { name: 'Lew Silverton', date: 'Sep, 8 2023', email: '...' },
    ],
  },
  {
    stage: 'Review',
    color: 'bg-indigo-500',
    progress: 2,
    applicants: [
      {
        name: 'Chikanso Chima',
        date: 'Aug, 27 2023',
        email: 'chime125@example.com',
        highlight: true,
      },
      {
        name: 'Filipa Gaspar',
        date: 'Aug, 25 2023',
        email: 'gaspar2000@example.com',
      },
      {
        name: 'Diana Campos',
        date: 'Aug, 23 2023',
        email: 'd.campos@example.com',
      },
      {
        name: 'Jenny Murtaugh',
        date: 'Aug, 22 2023',
        email: 'murtagh.j@example.com',
      },
    ],
  },
  {
    stage: 'Interview 1',
    color: 'bg-purple-500',
    progress: 3,
    applicants: [
      {
        name: 'Gabriella Lakin',
        date: 'Aug, 28 2023',
        email: 'g.lakin@example.com',
      },
      {
        name: 'Bartoloměj Dohnal',
        date: 'Aug, 29 2023',
        email: 'dohnal22@example.com',
      },
      {
        name: 'Ellen Howell',
        date: 'Sep, 2 2023',
        email: 'hovel-ellen@example.com',
      },
    ],
  },
  {
    stage: 'Interview 2',
    color: 'bg-green-500',
    progress: 4,
    applicants: [
      {
        name: 'Lungelo Ngcaba',
        date: 'Aug, 23 2023',
        email: 'lu-gcaba@example.com',
        rating: '4.6',
      },
      {
        name: 'Marcos Sá',
        date: 'Aug, 24 2023',
        email: 'marcos2901@example.com',
        rating: '4.6',
      },
    ],
  },
];

const ApplicantKanbanBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
      {data.map((stage, idx) => (
        <div key={idx} className="rounded-2xl border border-border p-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className={`${stage.color} w-2 h-2 rounded-full`} />
              <h2 className="font-medium font-libre text-sm text-dark">
                {stage.stage}
              </h2>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 6 }, (_, i) => (
                <span
                  key={i}
                  className={`w-4 h-1 rounded-sm ${
                    i < stage.progress ? 'bg-pry' : 'bg-[#F3EEFE]'
                  }`}
                />
              ))}
            </div>
          </div>
          <hr className="py-2 text-border" />
          <div className="space-y-3">
            {stage.applicants.map((applicant, i) => (
              <div
                key={i}
                className={`bg-[#f4f5f7] p-3 rounded-xl border ${
                  'highlight' in applicant && applicant.highlight
                    ? 'border-purple-500 shadow-inner'
                    : 'border-transparent'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-full">
                    <div className="flex items-center w-full h-full mb-3">
                      <div className="flex-1">
                        <div className="w-12 h-12 rounded-full bg-[#D8D8D8] border border-[#979797]" />
                      </div>
                      <div className="flex-2">
                        <div className="flex items-center justify-between w-full">
                          <h3 className="text-sm font-medium font-libre text-dark-text">
                            {applicant.name}
                          </h3>
                          <div className="flex items-center">
                            {Array.from({ length: 3 }, (_, j) => (
                              <span
                                className="w-[3px] h-[3px] rounded-full bg-icon inline-block mr-1"
                                key={j}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <span className="text-yellow-500">★</span>
                          <span>
                            {'rating' in applicant ? applicant.rating : '—'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 flex justify-between items-center gap-1 mt-1">
                      <span className="uppercase">Application Date</span>
                      <span>{applicant.date}</span>
                    </div>
                    <div className="text-xs text-gray-500 flex justify-between items-center gap-1 mt-1">
                      <span className="uppercase">Email</span>
                      <span>{applicant.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicantKanbanBoard;

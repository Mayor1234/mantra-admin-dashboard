import Table from '../../table/Table';

interface JobListing {
  title: string;
  location: string;
  totalApplicants: number;
  newApplicants: number;
}

const RecentVacancies = () => {
  const jobListings: JobListing[] = [
    {
      title: 'UX Designer',
      location: 'Dayton',
      totalApplicants: 122,
      newApplicants: 33,
    },
    {
      title: 'iOS App Developer',
      location: 'Remote',
      totalApplicants: 34,
      newApplicants: 5,
    },
    {
      title: 'Network Administrator',
      location: 'Phoenix',
      totalApplicants: 45,
      newApplicants: 13,
    },
    {
      title: 'JavaScript Developer',
      location: 'Remote',
      totalApplicants: 57,
      newApplicants: 5,
    },
    {
      title: 'Graphic Designer',
      location: 'Gothenburg',
      totalApplicants: 74,
      newApplicants: 22,
    },
    {
      title: 'Python Django Developer',
      location: 'Remote',
      totalApplicants: 44,
      newApplicants: 12,
    },
  ];

  const columns: { key: keyof JobListing; label: string }[] = [
    { key: 'title', label: 'Job Title' },
    { key: 'location', label: 'location' },
    { key: 'totalApplicants', label: 'Applicants' },
    { key: 'newApplicants', label: 'New Applicants' },
  ];

  return (
    <div>
      <Table
        columns={columns}
        data={jobListings.map((job) => ({
          title: job.title,
          location: job.location,
          totalApplicants: job.totalApplicants.toString(),
          newApplicants: job.newApplicants.toString(),
        }))}
      />
    </div>
  );
};

export default RecentVacancies;

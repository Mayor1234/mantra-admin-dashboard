import user from '../assets/logo/user.png';

import {
  MdOutlineWorkOutline,
  MdOutlinePeople,
  MdOutlineCalendarToday,
  MdOutlineHome,
  // MdOutlineListAlt,
  MdGroups,
  // MdOutlineListAlt,
} from 'react-icons/md';

export type Employee = {
  id: string;
  name: string;
  position: string;
  department: string;
  status: 'ACTIVE' | 'REMOTE' | 'RESIGNED' | 'ON LEAVE' | 'TERMINATED';
  joiningDate: string;
  email: string;
  phone: string;
  details: EmployeeDetails;
};

type EmployeeDetails = {
  lastUpdated: string;
  personalInfo: {
    passportNo: string;
    passportExpiry: string;
    birthday: string;
    maritalStatus: 'Single' | 'Married' | 'Divorced';
  };
  bankInfo: {
    accountNo: string;
    bankName: string;
    accountName: string;
  };
  experience: {
    title: string;
    period: string;
    company: string;
    description: string;
  }[];
  skills: {
    management: string[];
    technical: string[];
  };
  salaryInfo: {
    basis: 'Monthly' | 'Weekly' | 'Bi-weekly' | 'Annual';
    amount: string;
    effectiveDate: string;
    paymentType: string;
    billRate: string;
  };
  projects?: {
    title: string;
    description: string;
    deadline: string;
    leader: string;
    progress: string;
  }[];
  education: {
    degree: string;
    institution: string;
    graduationDate: string;
  }[];
  documents: string[];
};

export const sidebarNavMenu = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <MdOutlineHome className="h-5 w-5" />,
    children: [
      {
        label: 'Analytics',
        path: 'dashboard/analytics',
      },
      {
        label: 'Reports',
        path: 'dashboard/reports',
      },
    ],
  },
  {
    label: 'Employees',
    path: '/employees',
    icon: <MdGroups className="h-5 w-5" />,
    children: [
      {
        label: 'Create Employee',
        path: 'employees/create',
      },
      {
        label: 'Leaves',
        path: 'employees/leaves',
      },
    ],
  },
  {
    label: 'Vacancies',
    path: '/vacancies',
    icon: <MdOutlineWorkOutline className="h-5 w-5" />,
    children: [
      {
        label: 'Create Vacancy',
        path: 'vacancies/create',
      },
      {
        label: 'Vacancy List',
        path: 'vacancies/list',
      },
    ],
  },
  {
    label: 'Applicants',
    path: '/applicants',
    icon: <MdOutlinePeople className="h-5 w-5" />,
  },

  // {
  //   label: 'Payroll',
  //   path: '/payroll',
  //   icon: <MdOutlineListAlt className="h-5 w-5" />,
  // },
  {
    label: 'Calendar',
    path: '/calendar',
    icon: <MdOutlineCalendarToday className="h-5 w-5" />,
  },
];

export const mockUsers = [
  {
    id: '1',
    name: 'Aniedi Sunday',
    age: 23,
    role: 'Data Analyst',
    image: user,
    isToday: true,
  },
  {
    id: '2',
    name: 'Ada Obi',
    age: 30,
    role: 'Product Designer',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    isToday: true,
  },
  {
    id: '3',
    name: 'John Doe',
    age: 27,
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    isToday: false,
  },
];

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Joseph Idoko',
    position: 'GM Operations',
    department: 'Operations',
    status: 'ACTIVE',
    joiningDate: 'Sept. 12, 2023',
    email: 'kate.towne@example.com',
    phone: '(123)456-7890',
    details: {
      lastUpdated: '15 Oct, 2023',
      personalInfo: {
        passportNo: 'PA7890123',
        passportExpiry: '10/25/28',
        birthday: '05/15/1980',
        maritalStatus: 'Married',
      },
      bankInfo: {
        accountNo: '00123456789012345',
        bankName: 'BOA123456789',
        accountName: 'PAN789012345',
      },
      experience: [
        {
          title: 'Operations Director',
          period: 'Jan 2020 - Aug 2023',
          company: 'GLOBAL OPERATIONS INC',
          description:
            'Oversaw all operational activities across multiple regions, implementing efficiency improvements that reduced costs by 15%.',
        },
        {
          title: 'Senior Operations Manager',
          period: 'Mar 2015 - Dec 2019',
          company: 'LOGISTICS SOLUTIONS',
          description:
            'Managed daily operations for a team of 50+ employees across three facilities.',
        },
      ],
      skills: {
        management: [
          'Operations Management',
          'Process Optimization',
          'Supply Chain',
          'Team Leadership',
          'Strategic Planning',
        ],
        technical: ['ERP Systems', 'SAP', 'Six Sigma', 'Data Analysis'],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$8500',
        effectiveDate: '01/09/2023',
        paymentType: 'Transfer',
        billRate: '25%',
      },
      projects: [
        {
          title: 'Operations Automation',
          description:
            'Implemented robotic process automation across warehouse operations',
          deadline: 'Jun 15, 2024',
          leader: 'Joseph Idoko',
          progress: '30%',
        },
      ],
      education: [
        {
          degree: 'MBA in Operations Management',
          institution: 'HARVARD BUSINESS SCHOOL',
          graduationDate: 'May 2014',
        },
      ],
      documents: [
        'Employment Contract',
        'Degree Certificates',
        'Professional Certifications',
      ],
    },
  },
  {
    id: '2',
    name: 'Onyeka Onye',
    position: 'Fleet Manager',
    department: 'Sales & Marketing',
    status: 'REMOTE',
    joiningDate: 'August 2, 2023',
    email: 'wiza1234@example.com',
    phone: '(555)123-4567',
    details: {
      lastUpdated: '05 Nov, 2023',
      personalInfo: {
        passportNo: 'NG5678901',
        passportExpiry: '03/27/30',
        birthday: '08/22/1985',
        maritalStatus: 'Single',
      },
      bankInfo: {
        accountNo: '00223344556677889',
        bankName: 'UBA987654321',
        accountName: 'PAN123987456',
      },
      experience: [
        {
          title: 'Transportation Manager',
          period: 'Apr 2021 - Jul 2023',
          company: 'CITY LOGISTICS',
          description:
            'Managed fleet of 75 vehicles with 99.5% on-time delivery rate.',
        },
      ],
      skills: {
        management: [
          'Fleet Management',
          'Route Optimization',
          'Vendor Management',
          'Cost Control',
        ],
        technical: [
          'GPS Tracking Systems',
          'Fuel Management Software',
          'Vehicle Diagnostics',
        ],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$4500',
        effectiveDate: '02/08/2023',
        paymentType: 'Transfer',
        billRate: '15%',
      },
      projects: [
        {
          title: 'Green Fleet Initiative',
          description: 'Transition 30% of fleet to electric vehicles by 2025',
          deadline: 'Dec 31, 2025',
          leader: 'Onyeka Onye',
          progress: '10%',
        },
      ],
      education: [
        {
          degree: 'BSc in Transportation Management',
          institution: 'UNIVERSITY OF LAGOS',
          graduationDate: 'Jun 2019',
        },
      ],
      documents: ['Driving License', 'Vehicle Maintenance Certifications'],
    },
  },
  {
    id: '3',
    name: 'Stella Okoh',
    position: 'GM Finance',
    department: 'Finance',
    status: 'RESIGNED',
    joiningDate: 'July 12, 2023',
    email: 'rifison-leo@example.com',
    phone: '(789)012-3456',
    details: {
      lastUpdated: '20 Sep, 2023',
      personalInfo: {
        passportNo: 'GH3456789',
        passportExpiry: '07/24/27',
        birthday: '11/30/1978',
        maritalStatus: 'Divorced',
      },
      bankInfo: {
        accountNo: '00998877665544332',
        bankName: 'GTB112233445',
        accountName: 'PAN456123789',
      },
      experience: [
        {
          title: 'CFO',
          period: 'Jan 2018 - Jun 2023',
          company: 'FINANCIAL GROUP LTD',
          description: 'Led financial strategy for $50M revenue company.',
        },
      ],
      skills: {
        management: [
          'Financial Planning',
          'Risk Management',
          'Investment Strategy',
          'Mergers & Acquisitions',
        ],
        technical: [
          'SAP FICO',
          'QuickBooks',
          'Advanced Excel',
          'Financial Modeling',
        ],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$9500',
        effectiveDate: '12/07/2023',
        paymentType: 'Transfer',
        billRate: '30%',
      },
      education: [
        {
          degree: 'PhD in Financial Economics',
          institution: 'LONDON SCHOOL OF ECONOMICS',
          graduationDate: 'May 2017',
        },
      ],
      documents: ['CPA Certification', 'Resume', 'Non-Disclosure Agreement'],
    },
  },
  {
    id: '4',
    name: 'Abiola Arinde',
    position: 'Finance',
    department: 'Technical',
    status: 'ON LEAVE',
    joiningDate: 'April 5, 2023',
    email: 'bitsfor-z@example.com',
    phone: '(123)456-7890',
    details: {
      lastUpdated: '01 Aug, 2023',
      personalInfo: {
        passportNo: 'NG1234567',
        passportExpiry: '05/26/29',
        birthday: '02/14/1990',
        maritalStatus: 'Single',
      },
      bankInfo: {
        accountNo: '00554433221100998',
        bankName: 'ZEN876543210',
        accountName: 'PAN987654321',
      },
      experience: [
        {
          title: 'Financial Analyst',
          period: 'Sep 2020 - Mar 2023',
          company: 'TECH FINANCE CORP',
          description: 'Performed financial analysis for tech startups.',
        },
      ],
      skills: {
        management: ['Budgeting', 'Financial Reporting', 'Cost Analysis'],
        technical: ['Python for Finance', 'Tableau', 'SQL', 'Power BI'],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$3800',
        effectiveDate: '05/04/2023',
        paymentType: 'Transfer',
        billRate: '10%',
      },
      education: [
        {
          degree: 'MSc in Financial Technology',
          institution: 'MASSACHUSETTS INSTITUTE OF TECHNOLOGY',
          graduationDate: 'Jun 2020',
        },
      ],
      documents: ['CFA Level II Candidate', 'Technical Certifications'],
    },
  },
  {
    id: '5',
    name: 'Kingsley Ossai',
    position: 'Guards Operations',
    department: 'Development',
    status: 'ACTIVE',
    joiningDate: 'Feb 11, 2023',
    email: 'tristionbode@example.com',
    phone: '(888)555-7890',
    details: {
      lastUpdated: '10 Mar, 2023',
      personalInfo: {
        passportNo: 'NG9876543',
        passportExpiry: '11/27/26',
        birthday: '07/04/1982',
        maritalStatus: 'Married',
      },
      bankInfo: {
        accountNo: '00112233445566778',
        bankName: 'FID567890123',
        accountName: 'PAN123456789',
      },
      experience: [
        {
          title: 'Security Operations Manager',
          period: 'Aug 2018 - Jan 2023',
          company: 'SAFE GUARD SYSTEMS',
          description: 'Managed security operations for corporate clients.',
        },
      ],
      skills: {
        management: [
          'Security Protocols',
          'Crisis Management',
          'Team Coordination',
        ],
        technical: [
          'Surveillance Systems',
          'Access Control',
          'Incident Reporting Software',
        ],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$3200',
        effectiveDate: '11/02/2023',
        paymentType: 'Transfer',
        billRate: '12%',
      },
      projects: [
        {
          title: 'Security System Upgrade',
          description: 'Implement new biometric access control system',
          deadline: 'Aug 15, 2023',
          leader: 'Kingsley Ossai',
          progress: '75%',
        },
      ],
      education: [
        {
          degree: 'BSc in Criminology',
          institution: 'UNIVERSITY OF NIGERIA',
          graduationDate: 'May 2016',
        },
      ],
      documents: ['Security Certifications', 'First Aid Training'],
    },
  },
  {
    id: '6',
    name: 'Kayode Idowu',
    position: 'Finance',
    department: 'Department',
    status: 'ACTIVE',
    joiningDate: 'Jan 29, 2023',
    email: 'graham-rfc@example.com',
    phone: '(123)554-7612',
    details: {
      lastUpdated: '05 Feb, 2023',
      personalInfo: {
        passportNo: 'NG2468101',
        passportExpiry: '09/28/25',
        birthday: '03/22/1992',
        maritalStatus: 'Single',
      },
      bankInfo: {
        accountNo: '00334455667788990',
        bankName: 'SKY123456789',
        accountName: 'PAN987123456',
      },
      experience: [
        {
          title: 'Junior Accountant',
          period: 'Jul 2021 - Dec 2022',
          company: 'ACCOUNTING FIRM LLC',
          description:
            'Handled accounts payable/receivable and monthly closings.',
        },
      ],
      skills: {
        management: ['Bookkeeping', 'Tax Preparation', 'Audit Support'],
        technical: ['QuickBooks', 'Excel', 'Sage 50'],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$2800',
        effectiveDate: '29/01/2023',
        paymentType: 'Transfer',
        billRate: '8%',
      },
      education: [
        {
          degree: 'BSc in Accounting',
          institution: 'UNIVERSITY OF IBADAN',
          graduationDate: 'Jun 2021',
        },
      ],
      documents: ['ICAN Certification', 'NYSC Certificate'],
    },
  },
  {
    id: '7',
    name: 'Edikan Williw',
    position: 'Business Develop.',
    department: 'Analytics & Data',
    status: 'REMOTE',
    joiningDate: 'Nov, 18 2022',
    email: 'ann.jastexample.com',
    phone: '(888)324-5678',
    details: {
      lastUpdated: '20 Dec, 2022',
      personalInfo: {
        passportNo: 'NG1357924',
        passportExpiry: '02/29/24',
        birthday: '09/15/1987',
        maritalStatus: 'Married',
      },
      bankInfo: {
        accountNo: '00776655443322110',
        bankName: 'ECO987654321',
        accountName: 'PAN456789123',
      },
      experience: [
        {
          title: 'Business Development Manager',
          period: 'Mar 2020 - Oct 2022',
          company: 'GROWTH CONSULTING',
          description:
            'Developed new business opportunities in emerging markets.',
        },
      ],
      skills: {
        management: [
          'Market Research',
          'Client Acquisition',
          'Partnership Development',
        ],
        technical: ['CRM Software', 'Data Analysis', 'Google Analytics'],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$5200',
        effectiveDate: '18/11/2022',
        paymentType: 'Transfer',
        billRate: '18%',
      },
      projects: [
        {
          title: 'Market Expansion Initiative',
          description: 'Expand operations to 3 new African markets',
          deadline: 'Jun 30, 2024',
          leader: 'Edikan Williw',
          progress: '25%',
        },
      ],
      education: [
        {
          degree: 'MBA in International Business',
          institution: 'OXFORD UNIVERSITY',
          graduationDate: 'May 2019',
        },
      ],
      documents: ['Business Proposals', 'Client Contracts'],
    },
  },
  {
    id: '8',
    name: 'James Edoh',
    position: 'Security Coordinator',
    department: 'Sales & Marketing',
    status: 'TERMINATED',
    joiningDate: 'Jan 10, 2022',
    email: 'towne220@example.com',
    phone: '(143)453-8733',
    details: {
      lastUpdated: '05 Jan, 2023',
      personalInfo: {
        passportNo: 'NG8642097',
        passportExpiry: '08/31/23',
        birthday: '12/05/1975',
        maritalStatus: 'Divorced',
      },
      bankInfo: {
        accountNo: '00889900112233445',
        bankName: 'FCMB123987456',
        accountName: 'PAN321654987',
      },
      experience: [
        {
          title: 'Head of Security',
          period: 'Jun 2018 - Dec 2021',
          company: 'CORPORATE SECURITY LTD',
          description:
            'Coordinated security operations for high-profile clients.',
        },
      ],
      skills: {
        management: [
          'Security Planning',
          'Emergency Response',
          'Personnel Management',
        ],
        technical: [
          'CCTV Systems',
          'Risk Assessment Tools',
          'Security Databases',
        ],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$3800',
        effectiveDate: '10/01/2022',
        paymentType: 'Transfer',
        billRate: '15%',
      },
      education: [
        {
          degree: 'Diploma in Security Management',
          institution: 'NATIONAL SECURITY ACADEMY',
          graduationDate: 'Mar 2016',
        },
      ],
      documents: ['Termination Notice', 'Exit Interview'],
    },
  },
  {
    id: '9',
    name: 'Aniedi Sunday',
    position: 'Data Analyst',
    department: 'Sales & Marketing',
    status: 'ACTIVE',
    joiningDate: 'Jan 19, 2020',
    email: 'awilliams@email.com',
    phone: '(380)-322-4422',
    details: {
      lastUpdated: '12 Apr, 2020',
      personalInfo: {
        passportNo: 'QW3342981',
        passportExpiry: '12/12/28',
        birthday: '12/01/1988',
        maritalStatus: 'Married',
      },
      bankInfo: {
        accountNo: '00234552976293057',
        bankName: 'CC128693311',
        accountName: '0012998383647383',
      },
      experience: [
        {
          title: 'Senior Project Manager',
          period: 'Aug. 2023 - Present',
          company: 'TECH SOLUTIONS PRO',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and ...',
        },
        {
          title: 'Assistant Project Manager',
          period: 'Jul 2018 - Dec 2019',
          company: 'TECH INNOVATORS LTD.',
          description:
            'Assisted Project Managers in coordinating project activities, resources, and timelines. Prepared project status reports, tracked ...',
        },
        {
          title: 'Project Coordinator',
          period: 'Aug. 2023 - Present',
          company: 'SOFTWARE SOLUTIONS',
          description:
            'Assisted Project Managers in coordinating project activities and ensuring adherence to timelines. Prepared and delivered project ...',
        },
      ],
      skills: {
        management: [
          'Project Management',
          'Team Leadership',
          'Risk Management',
          'Budgeting and Financial Management',
          'Stakeholder Communication',
          'Process Improvement',
          'Scope Management',
          'Quality Assurance',
          'Presentation Skills',
          'Conflict Resolution',
        ],
        technical: [
          'Data Agile Methodologies',
          'Data Analytics Tools',
          'Trello',
          'JIRA',
          'Microsoft Project',
        ],
      },
      salaryInfo: {
        basis: 'Monthly',
        amount: '$1300',
        effectiveDate: '19/08/2022',
        paymentType: 'Transfer',
        billRate: '20%',
      },
      projects: [
        {
          title: 'Website Redesign',
          description:
            'Enhance user experience and functionality of our online store by revamping design, improving navigation, and implementing features to boost engagement and conversions.',
          deadline: 'Dec 22, 2022',
          leader: 'Henry Richardson',
          progress: '50%',
        },
        {
          title: 'Mobile App Launch',
          description:
            'Develop an app for seamless event planning and attestee management. Features include scheduling, registration, ticketing, real-time updates, and networking.',
          deadline: 'Nov 12, 2022',
          leader: 'Barbara Cotilla',
          progress: '50%',
        },
      ],
      education: [
        {
          degree: 'Bachelor of Science in Computer Science',
          institution: 'UNIVERSITY OF TECHNOLOGY',
          graduationDate: 'May 2017',
        },
      ],
      documents: ['Employment Contract', 'Resume', 'Personal Information'],
    },
  },
];

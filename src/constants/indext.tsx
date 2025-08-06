import user from '../assets/logo/user.png';

import {
  MdOutlineWorkOutline,
  MdOutlinePeople,
  MdOutlineCalendarToday,
  MdOutlineHome,
  MdOutlineListAlt,
  MdGroups,
} from 'react-icons/md';

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
    label: 'Vacancies',
    path: '/vacancies',
    icon: <MdOutlineWorkOutline className="h-5 w-5" />,
    children: [
      {
        label: 'Create Vacancy',
        path: 'vacancies/create',
      },
      {
        label: 'Vacancy Detail',
        path: 'vacancies/detail',
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
        label: 'Employee Detail',
        path: 'employees/detail',
      },
      {
        label: 'Leaves',
        path: 'employees/leaves',
      },
    ],
  },
  {
    label: 'Payroll',
    path: '/payroll',
    icon: <MdOutlineListAlt className="h-5 w-5" />,
  },
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

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import Vacancy from '../pages/vacancy/Vacancy';
import Applicant from '../pages/applicant/Applicant';
import Employee from '../pages/employee/Employee';
import Calendar from '../pages/calendar/Calendar';
import Payroll from '../pages/payroll/Payroll';
import Overview from '../components/ui/dashboard/Overview';
import Analytics from '../components/ui/dashboard/Analytics';
import Reports from '../components/ui/dashboard/Reports';
import CreateVacancy from '../pages/vacancy/CreateVacancy';
import VacancyDetail from '../pages/vacancy/VacancyDetail';
import VacancyList from '../pages/vacancy/VacancyList';

import VacanciesLayout from '../pages/vacancy/VacanciesLayout';
import EmployeesLayout from '../pages/employee/EmployeesLayout';
import CreateEmployee from '../pages/employee/CreateEmployee';
import EmployeeDetail from '../pages/employee/EmployeeDetail';
import EmployeeLeave from '../pages/employee/EmployeeLeave';
import ShareableEmployeeForm from '../pages/employee/ShareableEmployeeForm';
import Login from '../pages/auth/Login';
import NotFound from '../pages/not-found/NotFound';
import ForgotPassword from '../pages/auth/ForgotPassword';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/shareable-employee-form"
        element={<ShareableEmployeeForm />}
      />
      <Route element={<DashboardLayout />}>
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* Vacancy */}
        <Route path="/vacancies" element={<VacanciesLayout />}>
          <Route index element={<Vacancy />} />
          <Route path="create" element={<CreateVacancy />} />
          <Route path="list" element={<VacancyList />} />
        </Route>
        <Route path="/vacancies/:id" element={<VacancyDetail />} />

        {/* Application */}
        <Route path="/applicants" element={<Applicant />} />

        {/* Employee */}
        <Route path="/employees" element={<EmployeesLayout />}>
          <Route index element={<Employee />} />
          <Route path="create" element={<CreateEmployee />} />
          <Route path="leaves" element={<EmployeeLeave />} />
        </Route>
        <Route path="/employees/:id" element={<EmployeeDetail />} />

        {/* Payroll */}
        <Route path="/payroll" element={<Payroll />} />

        {/* Calendar */}
        <Route path="/calendar" element={<Calendar />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

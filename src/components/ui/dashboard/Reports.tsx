import { AreaCharts } from '../../charts/AreaChart';
import CandidateStatus from './dashboard_3/CandidateStatus';
import DepartmentList from './dashboard_3/Department';
import DepartmentDistribution from './dashboard_3/Distribution';
import RecentActivity from './dashboard_3/RecentActivity';
import RecentVacancies from './dashboard_3/RecentVacancies';

const Reports = () => {
  return (
    <div>
      <h2 className="text-xl text-dark-text font-libre font-semibold mb-3">
        Dashboard
      </h2>
      <div className="reports-container">
        {/* Box 1 */}
        <div className="box reports-box1 rounded-lg overflow-hidden border border-[#E0E4EA]">
          <CandidateStatus />
        </div>
        {/* Box2 */}
        <div className="box reports-box2 rounded-lg overflow-hidden border border-[#E0E4EA]">
          <DepartmentList />
        </div>
        {/* Box3 */}
        <div className="box reports-box3 bg-[#EEF4FE] rounded-lg overflow-hidden p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base text-dark font-libre">
              Distribution by Departments
            </h3>
            <p className="text-xs px-3 py-1 bg-[#fff] rounded-3xl font-mulish">
              Sept, 01 07
            </p>
          </div>
          <DepartmentDistribution />
        </div>
        {/* Box4 */}
        <div className="box reports-box4 bg-light-text rounded-lg overflow-hidden p-3">
          <div className="flex justify-between mb-2">
            <h3 className="text-base font-medium font-libre text-dark">
              Recent Vacancies
            </h3>
            <p className="text-xs px-3 py-1 bg-[#fff] rounded-3xl font-mulish">
              All Vacancies
            </p>
          </div>
          <div>
            <RecentVacancies />
          </div>
        </div>
        {/* Box5 */}
        <div className="box reports-box5 box reports-box4 rounded-lg overflow-hidden  w-full">
          <div className="mb-3 p-3 rounded-lg border border-[#E0E4EA]">
            <div className="flex justify-between">
              <h3 className="text-base font-medium font-libre mb-2 text-dark">
                Resource Collection
              </h3>
              <div className="flex gap-5">
                <div>
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-1" />
                  <span>Income</span>{' '}
                </div>
                <div>
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-1" />
                  <span>Outcome</span>{' '}
                </div>
              </div>
            </div>
            <div className="w-full h-28">
              <AreaCharts />
            </div>
          </div>
          <div className="">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

import HalfPie from '../../charts/HalfPie';
import PieCharts from '../../charts/PieCharts';
import OfficeDistributionChart from '../../charts/ScatterChart';
import SimpleLineChart from '../../charts/SimpleLineChart';
import BirthdayWidget from './analytics/BirthdayWidget';
import { mockUsers } from '../../../constants/indext';
import DatePicker from './analytics/DatePicker';
import ProgressBar from '../progress-bar/ProgressBar';

const Analytics = () => {
  return (
    <div className="">
      <h2 className="text-xl text-dark-text font-libre font-semibold mb-3">
        Dashboard
      </h2>
      <div className="analytics-container">
        {/* Box 1 */}
        <div className="analytics-box analytics-box1 rounded-lg w-full h-full overflow-hidden flex flex-col border border-[#E0E4EA] p-3">
          <h3 className="text-base font-medium font-libre mb-2 text-[#23272c]">
            Overview
          </h3>
          <div className="flex justify-between items-center gap-2 w-full h-full">
            <div className="flex items-center w-full h-20 bg-[#f3eefe] rounded-lg">
              <div className="flex-1 flex flex-col justify-between w-full h-full p-2">
                <p className="text-xs">TOTAL APPLICATIONS</p>
                <div className="flex items-center gap-3">
                  <p className="text-base text-dark font-bold">2187</p>
                  <p className="bg-[#afffb6] px-2 py-1 text-xs rounded-full w-fit text-dark font-libre">
                    12%
                  </p>
                </div>
              </div>
              {/* Pie chart */}
              <div className="w-20 h-16">
                <PieCharts
                  innerRadius={22}
                  outerRadius={28}
                  percent={76}
                  height={'70px'}
                  color={'#9368F7'}
                />
              </div>
            </div>
            <div className="flex items-center w-full h-20 bg-[#f3eefe] rounded-lg">
              <div className="flex-1 flex flex-col justify-between h-full w-full p-2">
                <h3 className="text-xs">SHORTLISTED CANDIDATES</h3>
                <div className="flex items-center gap-3">
                  <p className="text-base text-dark font-bold">1379</p>
                  <p className="bg-[#f8d8ab] px-2 py-1 text-xs rounded-full w-fit text-dark font-libre">
                    16%
                  </p>
                </div>
              </div>
              {/* Pie chart */}
              <div className="w-20 h-16">
                <PieCharts
                  innerRadius={22}
                  outerRadius={28}
                  percent={63}
                  height={'70px'}
                  color={'#1f74ec'}
                />
              </div>
            </div>
            <div className="flex items-center w-full h-20 bg-[#f3eefe] rounded-lg">
              <div className="flex-1 flex flex-col justify-between h-full w-full p-2">
                <h3 className="text-xs">REJECTED CANDIDATE</h3>
                <div className="flex items-center gap-3">
                  <p className="text-base text-dark font-bold">232</p>
                  <p className="bg-[#afffb6] px-2 py-1 text-xs rounded-full w-fit text-dark font-libre">
                    14%
                  </p>
                </div>
              </div>
              {/* Pie chart */}
              <div className="w-20 h-16">
                <PieCharts
                  innerRadius={22}
                  outerRadius={28}
                  percent={28}
                  height={'70px'}
                  color={'#faab3c'}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Box 2 */}
        <div className="analytics-box analytics-box2 rounded-lg p-3 border border-[#E0E4EA] h-full overflow-hidden">
          <div className="">
            <DatePicker />
            <hr className="text-[#e0e4ea] my-4" />
            <div className="">
              <h3 className="text-sm sm:text-base font-medium font-libre text-dark mb-3">
                Activity
              </h3>
              <div>
                <p className="text-xs mb-1 text-dark">TODAY</p>
                <div className="flex flex-col gap-3">
                  <div className="bg-[#eef4fe] p-3 rounded-lg flex items-center gap-3 text-dark">
                    <div className="text-base font-libre font-medium">
                      <p>09:00</p>
                    </div>
                    <div className="border-l-2 border-[#1F74EC] px-3">
                      <p className="text-xs text-[#343942] pb-0.5">
                        CONFERENCE ROOM A
                      </p>
                      <p className="text-sm">SkillSwap Session</p>
                    </div>
                  </div>
                  <div className="bg-[#F3EEFE] p-3 rounded-lg flex items-center gap-3 text-dark">
                    <div className="text-base font-libre font-medium">
                      <p>09:00</p>
                    </div>
                    <div className="border-l-2 border-[#4E1BD9] px-3">
                      <p className="text-xs text-[#343942] pb-0.5">
                        ONLINE WEBINAR
                      </p>
                      <p className="text-sm">Skills Webinar</p>
                    </div>
                  </div>
                  <div className="bg-[#DDFCE0] p-3 rounded-lg flex items-center gap-3 text-dark">
                    <div className="text-base font-libre font-medium">
                      <p>09:00</p>
                    </div>
                    <div className="border-l-2 border-[#0EB01D] px-3">
                      <p className="text-xs text-[#343942] pb-0.5">
                        TRAINING ROOM
                      </p>
                      <p className="text-sm">New Employee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Box 3 */}
        <div className="analytics-box analytics-box3 rounded-lg w-full h-full overflow-hidden border border-[#E0E4EA]">
          <div className="w-full h-full px-4 y-2">
            <div className="flex items-center justify-between py-2 mb-4">
              <h2 className="text-dark font-libre">
                Application Received Time
              </h2>
              <p className="text-xs px-3 py-1 bg-[#EEF4FE] rounded-3xl font-mulish">
                Nov, 01 07
              </p>
            </div>
            <div className="overflow-hidden w-full h-44">
              <SimpleLineChart />
            </div>
          </div>
        </div>
        {/* Box 4 */}
        <div className="analytics-box analytics-box4 rounded-lg bg-light-text h-full overflow-hidden">
          <div className="text-center p-3 mb-4">
            <h3 className="text-base font-medium text-center mb-3 font-libre text-[#23272c]">
              Employment by Status
            </h3>
            <div className="text-center font-libre">
              <p className="text-2xl font-bold text-[#17243e] mb-2">1342</p>
              <p className="text-sm font-medium text-[#343942]">
                TOTAL EMPLOYMENT
              </p>
            </div>
          </div>
          <div className="h-auto px-4">
            <HalfPie />
          </div>
        </div>
        {/* Box 5 */}
        <div className="analytics-box analytics-box5 rounded-lg bg-light-text h-full overflow-hidden">
          <div className="p-3">
            <h3 className="text-base font-medium font-libre mb-2 text-[#23272c]">
              Projects Overview
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#ddcbfc] p-3 text-xs rounded-lg">
                <div className="mb-2">
                  <p className="mb-2 text-base font-medium font-libre">124</p>
                  <p className="font-mulish">Total Projects</p>
                </div>
                {/* <div className="bg-white rounded-full w-full h-2"></div> */}
                <ProgressBar value={50} color="bg-[#9566F2]" height="h-1.5" />
              </div>
              <div className="bg-[#f8d8ab] p-3 text-xs rounded-lg">
                <div className="mb-2">
                  <p className="mb-2 text-base font-medium font-libre">12</p>
                  <p className="font-mulish">Avg Participants</p>
                </div>
                <ProgressBar value={50} color="bg-[#FAAB3C]" height="h-1.5" />
              </div>
              <div className="bg-[#83bcfa] p-3 text-xs rounded-lg">
                <div className="mb-2">
                  <p className="mb-2 text-base font-medium font-libre">
                    15 <small className="text-xs">Days</small>
                  </p>
                  <p className="font-mulish">Total Duration</p>
                </div>
                <ProgressBar value={50} color="bg-[#0EB01D]" height="h-1.5" />
              </div>
              <div className="bg-[#adcfff] p-3 text-xs rounded-lg">
                <div className="mb-2">
                  <p className="mb-2 text-base font-medium font-libre">
                    71.67%
                  </p>
                  <p className="font-mulish">Avg Progess</p>
                </div>
                <ProgressBar value={50} color="bg-[#1F74EC]" height="h-1.5" />
              </div>
            </div>
          </div>
        </div>
        {/* Box 6 */}
        <div className="analytics-box analytics-box6 rounded-lg h-full overflow-hidden border border-[#E0E4EA]">
          <div className="p-3">
            <h3 className="text-base font-medium font-libre mb-2 text-[#23272c]">
              Office Distribution
            </h3>
            <OfficeDistributionChart />
          </div>
        </div>
        {/* Box 7 */}
        <div className="analytics-box analytics-box7 rounded-lg bg-[#135cca]">
          <BirthdayWidget users={mockUsers} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

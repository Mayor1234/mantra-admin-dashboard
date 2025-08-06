import Barchart from '../../charts/Barchart';
import HorizontalBarChart from '../../charts/HorizontalBarChart';
import CustomLineChart from '../../charts/LineChart';
import PieCharts from '../../charts/PieCharts';

const Overview = () => {
  return (
    <div>
      <h2 className="text-xl text-dark-text font-libre font-semibold mb-4">
        Dashboard
      </h2>
      <div className="overview">
        {/* Box 1 */}
        <div className="box1 box">
          <div className="grid grid-cols-2 gap-2 w-full h-full">
            <div className="px-3 py-6 bg-[#DDFCE0] text-base rounded-xl">
              <div className="border-l-3 border-[#0EB01D] pl-2">
                <p className="text-[#23272c] font-mulish">79</p>
                <span className="text-xs">Office Staff</span>
              </div>
            </div>
            <div className="px-3 py-6 bg-[#FEF0DB] text-base rounded-xl">
              <div className="border-l-3  border-[#FAAB3C] pl-2">
                <p className="text-[#23272c] font-mulish">700</p>
                <span className="text-xs">Guards</span>
              </div>
            </div>
            <div className="px-3 py-6 bg-[#EEF4FE] text-base rounded-xl">
              <div className="border-l-3 border-[#1F74EC] pl-2">
                <p className="text-[#23272c] font-mulish">7</p>
                <span className="text-xs">Office Location</span>
              </div>
            </div>
            <div className="px-3 py-6 bg-[#F3EEFE] text-base rounded-xl">
              <div className="border-l-3 border-[#4E1BD9] pl-2">
                <p className="text-[#23272c] font-mulish">18</p>
                <span className="text-xs">Guard Locations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="box2 box border border-[#E0E4EA] rounded-lg overflow-hidden">
          <div className="w-full h-full px-4 y-2">
            <div className="flex items-center justify-between py-2">
              <h2 className="text-dark font-libre">
                Top Guards Hiring Sources
              </h2>
              <p className="text-xs px-3 py-1 bg-[#EEF4FE] rounded-3xl font-mulish">
                Nov, 01 07
              </p>
            </div>
            <div className="w-full h-full">
              <Barchart />
            </div>
          </div>
        </div>
        {/* Box 3 */}
        <div className="box3 box bg-[#F3EEFE] w-full h-full rounded-lg overflow-hidden">
          <div className="w-full h-full p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-dark font-libre">Attendance Today</h2>
              <p className="text-xs px-3 py-1 bg-[#EEF4FE] rounded-3xl font-mulish">
                24%
              </p>
            </div>
            <div>
              <div className="w-full h-44">
                <PieCharts
                  innerRadius={50}
                  outerRadius={70}
                  percent={95}
                  height={'176px'}
                  content="Attendance"
                  color={'#9368F7'}
                />
              </div>
              <div className="text-[#23272C] flex flex-col space-y-2 mt-3">
                <div className="flex justify-between w-full">
                  <p className="text-xs font-mulish">Reported Employees</p>
                  <p className="text-xs font-mulish">230</p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-xs font-mulish">On Leave</p>
                  <p className="text-xs font-mulish">12</p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-xs font-mulish">Not Yet Reported</p>
                  <p className="text-xs font-mulish">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="box4 box overflow-hidden w-full h-full border border-[#E0E4EA] rounded-lg">
          <div className="flex items-center justify-between py-2 px-4">
            <h2 className="text-dark font-libre">Employer by Department</h2>
            <p className="text-xs px-3 py-1 bg-[#EEF4FE] rounded-3xl font-mulish">
              Nov, 01 07
            </p>
          </div>
          <div className="h-64 w-full">
            <HorizontalBarChart />
          </div>
        </div>

        {/* Box 5 */}
        <div className="box5 box bg-[#EEF4FE] rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="mb-3 text-dark">Recent Applications</h2>
            <div className="flex flex-col space-y-5">
              <div className="flex justify-between w-full pb-1 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                  <p className="text-xs">Katylin Spike</p>
                </div>
                <div className="bg-[#F8D8AB] rounded-full text-xs px-3 py-1 w-fit">
                  Product Manager
                </div>
              </div>
              <div className="flex justify-between w-full pb-1 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                  <p className="text-xs">Katylin Spike</p>
                </div>
                <div className="bg-[#AFFFB6] rounded-full text-xs px-3 py-1 w-fit">
                  QA Tester
                </div>
              </div>
              <div className="flex justify-between w-full pb-1 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                  <p className="text-xs">Katylin Spike</p>
                </div>
                <div className="bg-[#ADCFFF] rounded-full text-xs px-3 py-1 w-fit">
                  UI/UX Designer
                </div>
              </div>
              <div className="flex justify-between w-full pb-1 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                  <p className="text-xs">Katylin Spike</p>
                </div>
                <div className="bg-[#F8D8AB] rounded-full text-xs px-3 py-1 w-fit">
                  IT Support
                </div>
              </div>
              <div className="flex justify-between w-full pb-1 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                  <p className="text-xs">Katylin Spike</p>
                </div>
                <div className="bg-[#DDCBFC] rounded-full text-xs px-3 py-1 w-fit">
                  Graphic Designer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 6 */}
        <div className="box6 box overflow-hidden flex justify-between gap-3">
          <div className="bg-[#f7f7f7] flex justify-between w-[342px] px-4 py-3 rounded-lg">
            {/* data info */}
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 text-xs">
                <div className="h-5 w-5 bg-black rounded-sm"></div>
                <p>UX Designer</p>
              </div>
              <div className="text-xs flex items-center gap-2">
                <p className="text-base font-bold">64</p>
                <p>Applications</p>
              </div>
            </div>
            {/* chart info */}
            <div className="flex flex-col justify-between h-full">
              <div className="h-5 w-20 mb-1">
                <CustomLineChart />
              </div>
              <p className="bg-[#afffb6] px-2 py-1 text-xs rounded-full w-fit  text-dark font-libre">
                6 New
              </p>
            </div>
          </div>
          <div className="bg-[#f7f7f7] flex justify-between items-center w-[342px] px-4 py-3 rounded-lg">
            {/* data info */}
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 text-xs">
                <div className="h-5 w-5 bg-black rounded-sm"></div>
                <p>Project Manager</p>
              </div>
              <div className="text-xs flex items-center gap-2">
                <p className="text-base font-bold">164</p>
                <p>Applications</p>
              </div>
            </div>
            {/* chart info */}
            <div className="flex flex-col justify-between h-full">
              <div className="h-5 w-20 mb-1">
                <CustomLineChart />
              </div>
              <p className="bg-[#afffb6] px-2 py-1 text-xs rounded-full w-fit text-dark font-libre">
                12 New
              </p>
            </div>
          </div>
          <div className="bg-[#f7f7f7] flex justify-between w-[342px] px-4 py-3 rounded-lg">
            {/* data info */}
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 text-xs">
                <div className="h-5 w-5 bg-black rounded-sm"></div>
                <p>React Developer</p>
              </div>
              <div className="text-xs flex items-center gap-2">
                <p className="text-base font-bold">27</p>
                <p>Applications</p>
              </div>
            </div>
            {/* chart info */}
            <div className="flex flex-col justify-between h-full">
              <div className="h-5 w-20 mb-1">
                <CustomLineChart />
              </div>
              <p className="bg-[#afffb6] px-2 py-1 text-xs rounded-full w-fit text-dark font-libre">
                7 New
              </p>
            </div>
          </div>
        </div>

        {/* Box 7 */}
        <div className="box7 box bg-[#135cca] rounded-lg overflow-hidden">
          <div className="p-4 text-[#fff]">
            <div className="flex justify-between items-center w-full mb-3">
              <h2 className="font-libre">News & Events</h2>
              <button
                type="button"
                className="w-3 h-3 p-2.5 rounded-full bg-[#F8D8AB] text-dark text-lg flex items-center justify-center"
              >
                +
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs">
                <div className="bg-[#a5c5f8] px-2 py-1 rounded-lg text-[#fff]">
                  <p className="text-[#fff] font-bold">14</p>
                  <p className="text-[#fafafa]">Nov</p>
                </div>
                <div>
                  <p className="text-sm">High Employee satisfaction</p>
                  <p className="text-xs font-light">
                    92% Employee Satisfaction
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="bg-[#a5c5f8] px-2 py-1 rounded-lg text-[#fff]">
                  <p className="text-[#fff] font-bold">14</p>
                  <p className="text-[#fafafa]">Nov</p>
                </div>
                <div>
                  <p className="text-sm">High Employee satisfaction</p>
                  <p className="text-xs font-light">
                    92% Employee Satisfaction
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="bg-[#a5c5f8] px-2 py-1 rounded-lg text-[#fff]">
                  <p className="text-[#fff] font-bold">14</p>
                  <p className="text-[#fafafa]">Nov</p>
                </div>
                <div>
                  <p className="text-sm">High Employee satisfaction</p>
                  <p className="text-xs font-light">
                    92% Employee Satisfaction
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="bg-[#a5c5f8] px-2 py-1 rounded-lg text-[#fff]">
                  <p className="text-[#fff] font-bold">14</p>
                  <p className="text-[#fafafa]">Nov</p>
                </div>
                <div>
                  <p className="text-sm">High Employee satisfaction</p>
                  <p className="text-xs font-light">
                    92% Employee Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

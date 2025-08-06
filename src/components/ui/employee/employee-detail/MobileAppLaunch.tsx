import ProgressBar from '../../progress-bar/ProgressBar';
import { SectionCard } from './SectionCard';

const MobileAppLaunch = () => {
  return (
    <SectionCard title="Mobile App Launch" kebab>
      <div className="space-y-3">
        <p className="font-mulish text-sm font-normal text-[#343942]">
          Develop an app for seamless event plannning and attendee management.
          Features include scheduling, registration, ticketing, real-time
          updates and networking
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">DEADLINE</span>
          <span className="text-dark font-libre text-sm font-medium">
            Nov 12, 2022
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">PROJECT LEADER</span>
          <span className="text-dark font-libre text-sm font-medium">
            Barbara Cotilla
          </span>
        </p>
        <ProgressBar value={50} label="Progress" height="h-1.5" />
      </div>
    </SectionCard>
  );
};

export default MobileAppLaunch;

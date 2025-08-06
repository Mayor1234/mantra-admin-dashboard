import ProgressBar from '../../progress-bar/ProgressBar';
import { SectionCard } from './SectionCard';

const WebsiteRedisign = () => {
  return (
    <SectionCard title="Website Redesign" kebab>
      <div className="space-y-3">
        <p className="font-mulish text-sm font-normal text-[#343942]">
          Enhance user experience and functionality of our online store by
          revamping design, improving navigation, and implementing features to
          boost engagement and conversions
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">DEADLINE</span>
          <span className="text-dark font-libre text-sm font-medium">
            Dec 22, 2022
          </span>
        </p>
        <p className="flex justify-between items-center font-mulish text-xs w-full border-b border-border pb-2">
          <span className="uppercase">PROJECT LEADER</span>
          <span className="text-dark font-libre text-sm font-medium">
            Henry Richardson
          </span>
        </p>
        <ProgressBar value={50} label="Progress" height="h-1.5" />
      </div>
    </SectionCard>
  );
};

export default WebsiteRedisign;

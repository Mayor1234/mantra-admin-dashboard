import { Activity } from './ActivityCard';

const RecentActivities = () => {
  return (
    <div className="overflow-hidden h-full">
      <div className="p-4">
        <h2 className="font-semibold mb-3">Recently Activity</h2>
        <ul className="space-y-3 text-sm">
          <Activity
            type="Interview Feedback"
            color="purple"
            text="Feedback from the recent interview with David Clark was positive for the Senior Software Developer position."
          />
          <Activity
            type="Application Withdrawn"
            color="green"
            text="Lisa Williams withdrew her application for the Senior Software Developer role."
          />
          <Activity
            type="Interview Scheduled"
            color="purple"
            text="Emily Johnson's interview for the Senior Software Developer role is scheduled for August 25."
          />
          <Activity
            type="Offer Extended"
            color="green"
            text="An offer was extended to Sarah Miller for the Senior Software Developer position."
          />
          <Activity
            type="Application Received"
            color="orange"
            text="John Smith submitted an application for the Senior Software Developer position."
          />
        </ul>
      </div>
    </div>
  );
};

export default RecentActivities;

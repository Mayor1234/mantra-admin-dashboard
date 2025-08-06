import { useState } from 'react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import Modal from '../../modal/Modal';

import ExperienceDrawer from './ExperienceDrawer';

const Experience = () => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  return (
    <div>
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-dark">Experience</h2>
        </div>
        <div className="">
          <div className="flex items-center justify-between w-full mb-1">
            <p className="text-dark font-libre font-medium text-lg">
              Senior Project Manager
            </p>
            <p className="uppercase text-sm text-dark font-libre font-medium">
              Tech Solution Pro
            </p>
          </div>
          <div className="flex items-center justify-between w-full mb-4">
            <p className="flex items-center gap-2 text-sm font-libre font-medium">
              <FaCalendar size={14} className="text-icon" />
              Aug, 2023 - present
            </p>
            <p className="flex items-center gap-2 text-sm font-libre font-medium text-dark">
              <FaMapMarkerAlt size={14} className="text-icon" />
              Dayton
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-10 text-sm font-mulish font-normal list-disc ml-4 mb-5">
            <li>Successfully led complex software projects, managing scope;</li>
            <li>
              Achieve a 20% improvement in project delivery time by optimizing
              team workflows and processes;
            </li>
            <li>
              Established strong relationships with clients, understanding their
              needs;
            </li>
            <li>
              Mentored and coached junior project managers, contributing to
              their professional growth
            </li>
          </ul>
          <hr className="text-border py-3" />
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="bg-[#1F74EC] text-[#fff] flex items-center gap-2 p-2.5 rounded-full hover:bg-[#1F74EC]/80 transition-all duration-300 ease-linear cursor-pointer"
              onClick={() => setIsExperienceOpen(!isExperienceOpen)}
            >
              <GoPlus size={20} />
            </button>
            <p className="text-dark font-libre font-medium text-lg">
              Add Work Experience
            </p>
          </div>
          {isExperienceOpen && (
            <Modal isOpen={isExperienceOpen}>
              <div className="bg-white text-dark max-w-2xl w-full h-full p-10">
                <ExperienceDrawer
                  setIsExperienceOpen={() =>
                    setIsExperienceOpen(!isExperienceOpen)
                  }
                />
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React, { useState } from 'react';
import { sidebarNavMenu } from '../../constants/indext';
import { NavLink, useLocation } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import logo from '../../assets/logo/mantra_logo.png';
import { MdPowerSettingsNew } from 'react-icons/md';

interface SideNavProps {
  isSidebarOpen: boolean;
}

const SideNav: React.FC<SideNavProps> = ({ isSidebarOpen }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const location = useLocation();

  const isActivePath = (path: string) => location.pathname.startsWith(path);

  const handleToggle = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <aside
      className={`transition-all duration-300 ease-in-out bg-pry text-light shadow-lg h-screen px-5
          ${isSidebarOpen ? 'w-64' : 'w-16'}
          hidden sm:block`}
    >
      <div className="flex flex-col justify-between items-center h-full pb-10 w-full">
        <div className="w-full">
          <div className="flex items-center justify-center p-5">
            {/* <span className="text-xl font-bold whitespace-nowrap overflow-hidden transition-all">
          {isSidebarOpen ? 'MyApp' : '🧩'}
        </span> */}
            <img
              src={logo}
              alt=""
              width={100}
              height={100}
              className="w-20 h-16"
            />
          </div>
          <nav className="mt-4 space-y-2">
            {sidebarNavMenu.map((link, i) => {
              const isOpen = openSections[link.label];

              if (!link.children) {
                return (
                  <NavLink
                    key={i}
                    to={link.path}
                    className={() =>
                      `flex items-center gap-5 px-3 py-1.5 font-libre tracking-wide text-base rounded-3xl hover:bg-active/50 hover:text-dark transition-all duration-300 ease-linear cursor-pointer" ${
                        isActivePath(link.path)
                          ? 'bg-active text-dark transition-all duration-300 ease-linear hover:text-gray-700'
                          : ''
                      }`
                    }
                  >
                    {link.icon}
                    {isSidebarOpen ? link.label : link.label.charAt(0)}
                  </NavLink>
                );
              }

              return (
                <div key={i}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-5 px-3 py-1.5 font-libre tracking-wide text-base rounded-3xl hover:bg-active/50 hover:text-dark transition-all duration-300 ease-linear cursor-pointer" ${
                        isActive
                          ? 'bg-active text-dark transition-all duration-300 ease-linear hover:bg-pry-hover hover:text-gray-700'
                          : ''
                      }`
                    }
                    onClick={() => handleToggle(link.label)}
                  >
                    {link.icon}
                    {isSidebarOpen ? link.label : link.label.charAt(0)}
                    <span className="ml-auto transform transition-transform duration-200 ease-linear">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ${
                          isOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8.25 4.5L15.75 12l-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </NavLink>

                  {/* Sub Items */}
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-linear ${
                      isOpen ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                  >
                    <div className="ml-8 mt-1 space-y-1 py-2 font-libre tracking-wide text-[16px]">
                      {link.children.map((subItem, j) => (
                        <NavLink
                          key={j}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `flex items-center gap-2 text-base hover:text-active transition-all ${
                              isActive
                                ? 'text-active transition-all duration-300 ease-linear hover:bg-pry-hover hover:opacity-70'
                                : ''
                            }`
                          }
                        >
                          <IoMdArrowDropright /> {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        <button
          type="button"
          className="w-full text-[#fff] flex items-center gap-5 px-3 py-1.5 font-libre tracking-wide text-base rounded-3xl hover:bg-active hover:text-dark transition-all duration-300 ease-linear cursor-pointer"
        >
          <MdPowerSettingsNew size={20} />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default SideNav;

import { useState } from 'react';
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { Button } from '../button/Button';

const Pagination = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <div>
      {/* Pagination Footer */}
      <div className="flex justify-between items-center px-2 py-3 mt-3 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded-md border border-[#E0E4EA] hover:bg-gray-100">
            <MdChevronLeft size={16} />
          </button>
          <span className="px-3 py-1 text-dark bg-light-text rounded-md">
            1
          </span>
          <button className="px-2 py-1 rounded-md border border-[#E0E4EA] hover:bg-gray-100">
            <MdChevronRight size={16} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-[#5D6675]">Show 1 to 8 of 50 entries</p>
          <div className="relative">
            <Button
              variant="secondary"
              size="sm"
              className="text-[#343942] font-mulish py-2 text-xs"
              rightIcon={<MdOutlineKeyboardArrowDown size={16} />}
              onClick={() => setIsPickerOpen(!isPickerOpen)}
            >
              Show 8
            </Button>
            {isPickerOpen && (
              <div className="absolute right-0 -left-14 -top-10 h-24 w-full bg-[#f4f5f7] rounded-md">
                <div className="border border-border h-full rounded-md overflow-auto text-dark">
                  <p className="py-1 px-3 transition-all duration-300 ease-linear hover:bg-active/50">
                    Show 8
                  </p>
                  <p className="py-1 px-3 transition-all duration-300 ease-linear hover:bg-active/50">
                    Show 16
                  </p>
                  <p className="py-1 px-3 transition-all duration-300 ease-linear hover:bg-active/50">
                    Show 24
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

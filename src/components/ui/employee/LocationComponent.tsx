import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Button } from '../button/Button';

interface Location {
  id: string;
  name: string;
}

const locations: Location[] = [
  { id: 'lagos', name: 'Lagos State' },
  { id: 'akwa-ibom', name: 'Akwa Ibom State' },
  { id: 'edo', name: 'Edo State' },
  { id: 'rivers', name: 'Rivers State' },
];

const LocationDropdown = () => {
  const [isOpen, setIsOpen] = useState(true); // Starting open to match the image
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <Button
        variant="outline"
        size="sm"
        rightIcon={<MdOutlineKeyboardArrowDown size={16} />}
        className="font-mulish text-sm font-normal text-dark-text py-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700 text-sm">
          {selectedLocation ? selectedLocation.name : 'Location'}
        </span>
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-48 top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-50">
          <div className="">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationSelect(location)}
                className="w-full px-4 py-2.5 text-left text-gray-700 text-sm hover:bg-light-text transition-all duration-150 ease-linear cursor-pointer"
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default LocationDropdown;

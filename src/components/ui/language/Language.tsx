import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{selectedLanguage.flag}</span>
          <span className="text-gray-900 font-medium">
            {selectedLanguage.name}
          </span>
        </div>
        <MdOutlineKeyboardArrowDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-44 top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-50">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-500 font-medium border-b border-gray-100">
              Select Language
            </div>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className="w-full px-4 py-2.5 flex items-center justify-between transition-all duration-150 ease-linear hover:bg-light-text text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-gray-900 font-medium">
                    {language ? language.name : 'Select Language'}
                  </span>
                </div>
                {selectedLanguage.code === language.code && (
                  <FaCheck className="text-active" size={14} />
                )}
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

export default LanguageDropdown;

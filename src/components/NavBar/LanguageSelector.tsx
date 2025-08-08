import React, { useState, useRef, useEffect } from 'react';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-2 text-black text-2xl font-normal max-md:text-xl max-sm:text-lg hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-sm"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Language selector, currently ${selectedLanguage}`}
      >
        <span>{selectedLanguage}</span>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`dropdown-icon transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          style={{ width: '24px', height: '24px', aspectRatio: '1/1' }}
          aria-hidden="true"
        >
          <g clipPath="url(#clip0_1_176)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0584 15.707C12.8708 15.8945 12.6165 15.9998 12.3514 15.9998C12.0862 15.9998 11.8319 15.8945 11.6444 15.707L5.98736 10.05C5.89185 9.95775 5.81566 9.84741 5.76325 9.7254C5.71085 9.6034 5.68326 9.47218 5.68211 9.3394C5.68095 9.20662 5.70625 9.07494 5.75653 8.95205C5.80682 8.82915 5.88107 8.7175 5.97496 8.6236C6.06885 8.52971 6.18051 8.45546 6.3034 8.40518C6.4263 8.3549 6.55798 8.3296 6.69076 8.33075C6.82354 8.3319 6.95476 8.35949 7.07676 8.4119C7.19876 8.46431 7.30911 8.54049 7.40136 8.636L12.3514 13.586L17.3014 8.636C17.49 8.45384 17.7426 8.35305 18.0048 8.35533C18.267 8.3576 18.5178 8.46277 18.7032 8.64818C18.8886 8.83359 18.9938 9.0844 18.996 9.3466C18.9983 9.6088 18.8975 9.8614 18.7154 10.05L13.0584 15.707Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_176">
              <rect width="24" height="24" fill="white" transform="translate(0.351379)" />
            </clipPath>
          </defs>
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white border border-black rounded-md shadow-lg z-50 min-w-[120px]"
          role="listbox"
          aria-label="Language options"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className={`w-full text-left px-4 py-2 text-lg hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${
                selectedLanguage === language.code ? 'bg-gray-50 font-semibold' : ''
              }`}
              role="option"
              aria-selected={selectedLanguage === language.code}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

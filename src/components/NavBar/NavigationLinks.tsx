import React from 'react';

interface NavigationLinksProps {
  className?: string;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ className = "" }) => {
  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  return (
    <nav className={`flex items-center gap-[39px] relative max-md:gap-[25px] ${className}`} role="navigation" aria-label="Main navigation">
      <button
        onClick={() => handleNavClick('about')}
        className="text-black text-2xl font-normal relative max-md:text-xl max-sm:text-lg hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-sm"
        aria-label="Navigate to About section"
      >
        About
      </button>
      <button
        onClick={() => handleNavClick('contact')}
        className="text-black text-2xl font-normal relative max-md:text-xl max-sm:text-lg hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-sm"
        aria-label="Navigate to Contact section"
      >
        Contact
      </button>
    </nav>
  );
};

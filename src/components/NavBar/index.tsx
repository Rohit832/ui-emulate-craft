import React from 'react';
import { Logo } from './Logo';
import { NavigationLinks } from './NavigationLinks';
import { LanguageSelector } from './LanguageSelector';
import { AuthSection } from './AuthSection';

interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className = "" }) => {
  return (
    <header
      className={`flex w-full flex-col items-center gap-[33px] h-[122px] pt-[35px] ${className}`}
      role="banner"
    >
      <div className="flex items-center gap-[335px] relative w-full max-w-[1512px] justify-between max-md:gap-[200px] max-md:px-5 max-md:py-0 max-sm:flex-col max-sm:gap-5 max-sm:px-4 max-sm:py-0">
        <Logo />
        
        <div className="flex items-center gap-[61px] relative max-md:gap-10 max-sm:flex-col max-sm:gap-5">
          <div className="flex items-center gap-[46px] relative max-md:gap-[30px] max-sm:hidden">
            <NavigationLinks />
            <div 
              className="w-[3px] h-[54px] opacity-50 relative bg-black" 
              role="separator" 
              aria-hidden="true"
            />
            <LanguageSelector />
          </div>
          <AuthSection />
        </div>
      </div>
      
      <hr 
        className="w-full max-w-[1512px] h-0.5 relative bg-black border-0" 
        role="separator"
        aria-label="Navigation separator"
      />
    </header>
  );
};

export default NavBar;

import React from 'react';
import { Logo } from './Logo';
import { NavigationLinks } from './NavigationLinks';
import { LanguageSelector } from './LanguageSelector';
import { AuthSection } from './AuthSection';
import { MobileMenu } from './MobileMenu';
interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className = "" }) => {
  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b ${className}`}
      role="banner"
    >
      <div className="mx-auto w-full max-w-[1512px] px-4 sm:px-6 lg:px-8">
        <div className="h-[72px] flex items-center justify-between">
          <Logo />

          {/* Desktop navigation */}
          <div className="hidden sm:flex items-center gap-8">
            <NavigationLinks />
            <div className="w-px h-8 bg-border" role="separator" aria-hidden="true" />
            <LanguageSelector />
            <AuthSection />
          </div>

          {/* Mobile menu */}
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

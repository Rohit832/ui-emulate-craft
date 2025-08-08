import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { NavigationLinks } from './NavigationLinks';
import { LanguageSelector } from './LanguageSelector';
import { AuthSection } from './AuthSection';

export const MobileMenu: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <nav className="mt-8 space-y-6" aria-label="Mobile navigation">
          <NavigationLinks className="flex flex-col items-start gap-4 text-lg" />
          <LanguageSelector />
          <AuthSection className="w-full" />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

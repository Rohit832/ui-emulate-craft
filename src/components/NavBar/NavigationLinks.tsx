import React from 'react';

interface NavigationLinksProps {
  className?: string;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ className = "" }) => {
  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  return (
    <nav className={`flex items-center gap-10 relative ${className}`} role="navigation" aria-label="Main navigation">
      <button
        onClick={() => handleNavClick('about')}
        className="text-foreground text-lg sm:text-xl font-medium hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm"
        aria-label="Navigate to About section"
      >
        About
      </button>
      <button
        onClick={() => handleNavClick('contact')}
        className="text-foreground text-lg sm:text-xl font-medium hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-sm"
        aria-label="Navigate to Contact section"
      >
        Contact
      </button>
    </nav>
  );
};

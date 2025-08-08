import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/9396b4e641d9967cfc3c0fd3a7adec88b7a7859a?width=405"
        alt="Company Logo"
        className="w-[203px] h-[50px] relative max-sm:w-[150px] max-sm:h-[37px]"
        loading="eager"
      />
    </div>
  );
};

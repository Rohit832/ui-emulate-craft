import React, { useState } from 'react';

interface AuthSectionProps {
  className?: string;
}

export const AuthSection: React.FC<AuthSectionProps> = ({ className = "" }) => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isBookingDemo, setIsBookingDemo] = useState(false);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    try {
      console.log('Initiating sign in process...');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Sign in completed');
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleBookDemo = async () => {
    setIsBookingDemo(true);
    try {
      console.log('Booking demo...');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Demo booking completed');
    } catch (error) {
      console.error('Demo booking failed:', error);
    } finally {
      setIsBookingDemo(false);
    }
  };

  return (
    <section className={`flex items-center gap-[34px] relative max-md:gap-[25px] max-sm:flex-col max-sm:gap-[15px] ${className}`} aria-label="Authentication and demo booking">
      <button
        onClick={handleSignIn}
        disabled={isSigningIn}
        className="text-black text-2xl font-bold relative max-md:text-xl max-sm:text-lg hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Sign in to your account"
      >
        {isSigningIn ? 'Signing In...' : 'Sign In'}
      </button>
      
      <button
        onClick={handleBookDemo}
        disabled={isBookingDemo}
        className="flex justify-center items-center border shadow-[3px_4px_0_0_#000] relative h-auto rounded-[5px] border-solid border-black bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Book a demo session"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cd2b83026c5fff077b874c6c4171be5d483efa9b?width=316"
          alt={isBookingDemo ? "Booking Demo..." : "Book Demo"}
          className="block"
          loading="lazy"
        />
      </button>
    </section>
  );
};

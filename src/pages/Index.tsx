import React from 'react';
import { NavBar } from '@/components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main className="flex items-center justify-center min-h-[calc(100vh-122px)] bg-gray-50" role="main">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Welcome to Your Navigation App
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Experience our modern, responsive navigation system with semantic HTML structure, 
            accessibility features, and interactive UI components. Built with React, TypeScript, 
            and Tailwind CSS for optimal performance and user experience.
          </p>
          
          <section className="grid md:grid-cols-3 gap-8 mt-12" aria-label="Features">
            <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Responsive Design</h2>
              <p className="text-gray-600">
                Fully responsive navigation that adapts seamlessly to all device sizes, 
                from desktop to mobile.
              </p>
            </article>
            
            <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Accessibility First</h2>
              <p className="text-gray-600">
                Built with semantic HTML, ARIA attributes, and keyboard navigation 
                support for inclusive user experience.
              </p>
            </article>
            
            <article className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interactive Components</h2>
              <p className="text-gray-600">
                Dynamic language selector, interactive buttons, and smooth transitions 
                for enhanced user engagement.
              </p>
            </article>
          </section>
          
          <section className="mt-12 p-8 bg-white rounded-lg shadow-md border border-gray-200" aria-label="Call to action">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Explore our navigation features and see how they can enhance your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={() => console.log('Learn more clicked')}
              >
                Learn More
              </button>
              <button 
                className="px-8 py-3 border-2 border-black text-black rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={() => console.log('View documentation clicked')}
              >
                View Documentation
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;

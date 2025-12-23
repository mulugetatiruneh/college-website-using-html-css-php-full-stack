
import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>HSU</span>
          </div>
          
          <div className={`hidden md:flex space-x-8 font-medium ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#academics" className="hover:text-blue-500 transition-colors">Academics</a>
            <a href="#admissions" className="hover:text-blue-500 transition-colors">Admissions</a>
            <a href="#news" className="hover:text-blue-500 transition-colors">News</a>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105">
            Portal Login
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-white text-xl font-bold mb-6">Horizon State</h3>
              <p className="text-slate-400 leading-relaxed">
                Empowering minds and shaping futures through excellence in education, research, and innovation since 1954.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Academics</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Undergraduate</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Graduate Programs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Online Education</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Course Catalog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Admissions</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Apply Now</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Tuition & Fees</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Financial Aid</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Visit Campus</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <p className="mb-2">123 University Ave</p>
              <p className="mb-2">Silicon Valley, CA 94025</p>
              <p className="mb-4">info@hsu.edu</p>
              <div className="flex space-x-4">
                {/* Icons placeholder */}
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">f</div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">t</div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">in</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
            © 2024 Horizon State University. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;


import React from 'react';
import Layout from './components/Layout';
import Chatbot from './components/Chatbot';
import { DEPARTMENTS, NEWS } from './constants';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/college/1920/1080" 
            alt="University Campus" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            Elevate Your Future <br />
            <span className="text-blue-400">At Horizon State</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Ranked top 10 for Innovation and Research. Join a community of over 20,000 students redefining the boundaries of knowledge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-1">
              Apply for Fall 2024
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1">
              Virtual Tour
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Quick Look */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-1">98%</div>
              <div className="text-slate-500 font-medium">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-1">120+</div>
              <div className="text-slate-500 font-medium">Global Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-1">15:1</div>
              <div className="text-slate-500 font-medium">Faculty Ratio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-1">$20M</div>
              <div className="text-slate-500 font-medium">Scholarships</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/library/800/600" 
                  alt="Library" 
                  className="rounded-3xl shadow-2xl z-10 relative"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Legacy</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">A Tradition of Excellence, <br /> A Future of Discovery</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Founded in 1954, Horizon State University has grown from a local technical college to a world-renowned institution of higher learning. We believe in the power of curiosity and the necessity of rigour.
              </p>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Our campus is a melting pot of cultures, ideas, and ambitions. Here, students don't just learn theories; they build prototypes, lead organizations, and solve real-world problems.
              </p>
              <button className="text-blue-600 font-bold flex items-center group">
                Learn more about our mission 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academics - Departments */}
      <section id="academics" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">World-Class Academics</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Choose from over 150 majors and specializations across our four premier colleges.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DEPARTMENTS.map(dept => (
              <div key={dept.id} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">{dept.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{dept.name}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{dept.description}</p>
                <div className="space-y-2 mb-8">
                  {dept.courses.map(course => (
                    <div key={course} className="text-xs font-medium text-slate-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div> {course}
                    </div>
                  ))}
                </div>
                <button className="text-blue-600 text-sm font-bold uppercase tracking-wider hover:underline">Explore Department</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 skew-x-12 transform translate-x-24 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold mb-6">Ready to start your journey?</h2>
              <p className="text-blue-100 text-xl mb-0">Admissions for the 2024 Academic Year are now open. Find out about requirements, deadlines, and scholarships.</p>
            </div>
            <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-center hover:bg-blue-50 transition-colors shadow-lg">Start Application</button>
              <button className="bg-blue-700/50 backdrop-blur-md border border-blue-400/30 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-blue-700 transition-colors">Request Info</button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Campus News & Events</h2>
              <p className="text-slate-500">Stay updated with the latest from the Horizon State community.</p>
            </div>
            <button className="hidden md:block text-blue-600 font-bold border-b-2 border-blue-600">View All Stories</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {NEWS.map(item => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-slate-400 text-xs mb-3 font-medium">{item.date}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.summary}
                  </p>
                  <button className="text-slate-900 font-bold text-sm flex items-center group-hover:text-blue-600 transition-colors">
                    Read Full Story
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <Chatbot />
    </Layout>
  );
};

export default App;

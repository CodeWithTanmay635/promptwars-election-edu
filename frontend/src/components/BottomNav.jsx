import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] px-4 py-2 flex justify-around items-center z-50 md:hidden">
      <Link to="/" className={`flex flex-col items-center gap-1 ${location.pathname === '/' ? 'text-teal-primary' : 'text-outline hover:text-teal-primary'} transition-colors`}>
        <span className="material-symbols-outlined">home</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
      </Link>
      <Link to="/" onClick={() => window.scrollTo({ top: document.getElementById('topics-section')?.offsetTop || 0, behavior: 'smooth' })} className={`flex flex-col items-center gap-1 text-outline hover:text-teal-primary transition-colors`}>
        <span className="material-symbols-outlined">grid_view</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Topics</span>
      </Link>
      <Link to="/" onClick={() => window.scrollTo({ top: document.getElementById('timeline-section')?.offsetTop || 0, behavior: 'smooth' })} className={`flex flex-col items-center gap-1 text-outline hover:text-teal-primary transition-colors`}>
        <span className="material-symbols-outlined">timeline</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Timeline</span>
      </Link>
      <Link to="/quiz" className={`flex flex-col items-center gap-1 ${location.pathname === '/quiz' ? 'text-teal-primary' : 'text-outline hover:text-teal-primary'} transition-colors`}>
        <span className="material-symbols-outlined">extension</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Quiz</span>
      </Link>
    </nav>
  );
};

export default BottomNav;

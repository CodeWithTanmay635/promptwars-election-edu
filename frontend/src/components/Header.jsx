import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 h-16 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-decoration-none">
          <span className="material-symbols-outlined text-[#1D9E75] text-2xl">how_to_vote</span>
          <span className="font-['DM_SANS'] font-black text-xl text-[#1D9E75] tracking-tight">CivicGuide</span>
        </Link>
        <div className="cursor-pointer active:opacity-80">
          <span className="material-symbols-outlined text-slate-600">account_circle</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

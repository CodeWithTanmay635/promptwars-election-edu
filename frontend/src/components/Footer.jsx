import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-light border-t border-[#E2E8F0] w-full mt-auto">
      <div className="w-full py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-bold text-[#1D9E75]">
            <span className="material-symbols-outlined">how_to_vote</span>
            <span>CivicGuide</span>
          </div>
          <p className="font-['DM_SANS'] text-sm text-slate-600">© 2024 Election Process Education. Institutional Transparency Initiative.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-sm text-slate-600 hover:text-[#1D9E75] hover:underline transition-all" href="#">Election Commission</a>
          <a className="text-sm text-slate-600 hover:text-[#1D9E75] hover:underline transition-all" href="#">Privacy Policy</a>
          <a className="text-sm text-slate-600 hover:text-[#1D9E75] hover:underline transition-all" href="#">Terms of Service</a>
          <a className="text-sm text-slate-600 hover:text-[#1D9E75] hover:underline transition-all" href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

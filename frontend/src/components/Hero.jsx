import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="py-xl md:py-24 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="font-h1 text-h1 text-on-background mb-md">Understand Your Vote</h1>
        <p className="font-body-lg text-body-lg text-outline mb-lg max-w-2xl">
            Empowering citizens with transparent, accessible, and comprehensive information about the democratic process. Learn how every vote shapes our collective future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => window.scrollTo({ top: document.getElementById('topics-section')?.offsetTop || 0, behavior: 'smooth' })} className="bg-[#1D9E75] text-white px-lg py-md rounded-lg font-button hover:bg-[#0F6E56] transition-colors">Start Learning</button>
          <button onClick={() => window.scrollTo({ top: document.getElementById('timeline-section')?.offsetTop || 0, behavior: 'smooth' })} className="border border-[#1D9E75] text-[#1D9E75] px-lg py-md rounded-lg font-button hover:bg-teal-light transition-colors">View Timeline</button>
        </div>
      </div>
      <div className="flex-1 w-full max-w-lg">
        <div className="aspect-video bg-surface-container rounded-xl overflow-hidden relative">
          <img alt="Democratic Process" className="w-full h-full object-cover" src="/hero-image.png"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;

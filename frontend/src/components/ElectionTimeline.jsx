import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ElectionTimeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    api.get('/api/timeline')
      .then(res => setTimeline(res.data))
      .catch(err => console.error(err));
  }, []);

  if (timeline.length === 0) return null;

  return (
    <section id="timeline-section" className="py-xl">
      <div className="mb-xl text-center">
        <h2 className="font-h2 text-h2 mb-sm">The Election Lifecycle</h2>
        <p className="font-body-md text-outline">Tracking the journey from announcement to results</p>
      </div>
      <div className="max-w-3xl mx-auto relative pl-12 space-y-lg">
        <div className="timeline-line" style={{ position: 'absolute', left: '19px', top: 0, bottom: 0, width: '2px', background: '#E1F5EE', zIndex: 0 }}></div>
        {timeline.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <div key={index} className="relative group cursor-pointer" onClick={() => setActiveStep(index)}>
              <div className={`timeline-node ${isActive || index <= activeStep ? 'active' : ''}`} style={{ position: 'absolute', left: '-39px', top: 0 }}>
                <span className="font-bold">{step.step}</span>
              </div>
              <div className={`educational-card ${isActive ? 'active-card' : 'group-hover:border-[#E2E8F0]'}`}>
                <div className="flex justify-between items-start mb-sm flex-wrap gap-2">
                  <h3 className={`font-h3 text-xl ${isActive ? 'text-teal-primary' : ''}`}>{step.title}</h3>
                  <span className={`px-md py-1 ${isActive ? 'bg-teal-light text-teal-primary' : 'bg-surface-container text-outline'} text-xs font-bold rounded-full whitespace-nowrap`}>
                    {step.duration}
                  </span>
                </div>
                <p className="font-body-sm text-outline">{step.description}</p>
                {isActive && <p className="text-xs text-teal-primary mt-2 font-bold">Phase: {step.phase}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ElectionTimeline;

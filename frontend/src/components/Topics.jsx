import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/api/topics')
      .then(res => setTopics(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="topics-section" className="py-xl">
      <div className="mb-xl text-center">
        <h2 className="font-h2 text-h2 mb-sm">Key Election Topics</h2>
        <p className="font-body-md text-outline">Explore the fundamental pillars of our electoral system</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {topics.map(topic => (
          <div key={topic.id} className="educational-card group hover:border-[#1D9E75]">
            <span className="material-symbols-outlined text-teal-primary text-3xl mb-md">
              {topic.title.includes('Registration') ? 'person_check' : 
               topic.title.includes('Polling') ? 'stadium' : 
               topic.title.includes('EVM') ? 'fingerprint' : 
               topic.title.includes('Code of Conduct') ? 'gavel' : 
               topic.title.includes('Counting') ? 'analytics' : 'security'}
            </span>
            <h3 className="font-h3 text-h3 mb-sm">{topic.title}</h3>
            <p className="font-body-sm text-outline mb-md">{topic.description}</p>
            <button onClick={() => navigate(`/topic/${topic.id}`)} className="text-teal-primary font-button flex items-center gap-2 group-hover:underline">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        ))}
        
        {/* Civic Literacy Quiz */}
        <div className="educational-card group hover:border-[#1D9E75] bg-teal-light border-teal-primary">
          <span className="material-symbols-outlined text-teal-primary text-3xl mb-md">quiz</span>
          <h3 className="font-h3 text-h3 mb-sm">Civic Literacy Quiz</h3>
          <p className="font-body-sm text-outline mb-md">Test your knowledge of the democratic process and earn your civic badge.</p>
          <button onClick={() => navigate('/quiz')} className="bg-teal-primary text-white px-md py-2 rounded-lg font-button flex items-center gap-2 hover:bg-[#0F6E56] transition-all">
              Start Quiz <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Chat Assistant */}
        <div className="educational-card group hover:border-[#1D9E75]">
          <span className="material-symbols-outlined text-teal-primary text-3xl mb-md">support_agent</span>
          <h3 className="font-h3 text-h3 mb-sm">Civic Assistant</h3>
          <p className="font-body-sm text-outline mb-md">Have questions? Talk to our AI-powered assistant for clear, unbiased answers.</p>
          <button onClick={() => navigate('/chat')} className="text-teal-primary font-button flex items-center gap-2 group-hover:underline">
              Open Assistant <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Topics;

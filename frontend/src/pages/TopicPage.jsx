/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const TopicPage = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopicData = async () => {
      try {
        setLoading(true);
        // Fetch all topics to get basic info
        const topicsRes = await api.get('/api/topics');
        const currentTopic = topicsRes.data.find(t => t.id === id);
        setTopic(currentTopic);

        if (currentTopic) {
          // Fetch AI summary for this topic
          const summaryRes = await api.get(`/api/topics/${id}/summary`);
          setSummary(summaryRes.data.reply);
        }
      } catch (error) {
        console.error("Failed to fetch topic data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopicData();
    window.scrollTo(0, 0); // scroll to top on load
  }, [id]);

  if (loading) {
    return (
      <div className="py-xl text-center">
        <div className="inline-flex items-center gap-2 text-teal-primary text-xl font-bold">
          <span className="material-symbols-outlined animate-spin">refresh</span> Loading Topic Details...
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="py-xl text-center">
        <h2 className="font-h2 text-h2 mb-md text-on-background">Topic not found</h2>
        <Link to="/" className="text-teal-primary font-button hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="py-xl max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-teal-primary hover:underline mb-lg font-button">
        <span className="material-symbols-outlined mr-2">arrow_back</span> Back to Home
      </Link>
      
      <div className="educational-card p-xl">
        <div className="flex items-center gap-4 mb-lg pb-lg border-b border-[#E2E8F0]">
          <span className="material-symbols-outlined text-teal-primary text-5xl">
            {topic.title.includes('Registration') ? 'person_check' : 
             topic.title.includes('Polling') ? 'stadium' : 
             topic.title.includes('EVM') ? 'fingerprint' : 
             topic.title.includes('Code of Conduct') ? 'gavel' : 
             topic.title.includes('Counting') ? 'analytics' : 'school'}
          </span>
          <div>
            <h1 className="font-h1 text-h2 text-on-background">{topic.title}</h1>
            <p className="font-body-md text-outline mt-2">{topic.description}</p>
          </div>
        </div>
        
        <div className="prose prose-teal max-w-none font-body-lg text-on-background leading-relaxed">
          {summary ? (
            <div style={{ whiteSpace: 'pre-wrap' }}>{summary}</div>
          ) : (
            <p className="text-outline italic">Could not load the detailed summary at this time.</p>
          )}
        </div>
        
        {topic.keywords && (
          <div className="mt-xl pt-lg border-t border-[#E2E8F0]">
            <h4 className="font-button text-on-background mb-3">Key Terms</h4>
            <div className="flex flex-wrap gap-2">
              {topic.keywords.map((kw, i) => (
                <span key={i} className="px-3 py-1 bg-surface-container text-teal-primary rounded-full text-xs font-bold uppercase tracking-wider">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicPage;

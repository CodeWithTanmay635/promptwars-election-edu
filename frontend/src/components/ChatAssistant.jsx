/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import api from '../services/api';

const quickReplies = [
  "Who can vote?",
  "What is EVM?",
  "How is counting done?",
  "What is NOTA?"
];

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { 
      role: 'model', 
      content: 'Hello! I\'m your Civic Assistant. I can help you understand the voting process, find registration info, or clarify election rules. How can I assist you today?',
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef(null);

  const handleSend = async (textOverride = null) => {
    const textToSend = typeof textOverride === 'string' ? textOverride : inputText;
    if (!textToSend.trim()) return;

    const userMessage = { role: 'user', content: textToSend };
    const newHistory = [...messages, userMessage];
    
    setMessages(newHistory);
    setInputText('');
    setIsLoading(true);

    try {
      const formattedHistory = messages.map(m => ({ role: m.role, parts: [{ text: m.content }] }));
      const response = await api.post('/api/chat', {
        message: textToSend,
        history: formattedHistory
      });
      setMessages([...newHistory, { role: 'model', content: response.data.reply }]);
    } catch (error) {
      setMessages([...newHistory, { role: 'model', content: "Sorry, I'm having trouble connecting to my knowledge base right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="py-xl">
      <div className="max-w-4xl mx-auto educational-card overflow-hidden !p-0 shadow-sm">
        {/* Chat Header */}
        <div className="bg-white border-b border-[#E2E8F0] p-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#1D9E75] flex items-center justify-center text-2xl">🗳️</div>
            <div>
              <h3 className="font-button text-on-background">Civic Assistant</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-primary"></span>
                <span className="text-[10px] text-outline font-label-caps uppercase">Online</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-teal-primary">refresh</span>
            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-teal-primary">more_vert</span>
          </div>
        </div>

        {/* Chat Body */}
        <div className="h-[500px] flex flex-col bg-surface-container-lowest">
          
          {/* Shortcuts */}
          <div className="p-md flex gap-2 overflow-x-auto border-b border-[#E2E8F0] scrollbar-hide">
            <button onClick={() => handleSend("Voter Info")} className="flex items-center gap-2 px-md py-xs bg-white border border-[#E2E8F0] rounded-full whitespace-nowrap text-sm hover:border-[#1D9E75] hover:bg-teal-light transition-all">
              <span className="material-symbols-outlined text-sm">fact_check</span> Voter Info
            </button>
            <button onClick={() => handleSend("Find Booth")} className="flex items-center gap-2 px-md py-xs bg-white border border-[#E2E8F0] rounded-full whitespace-nowrap text-sm hover:border-[#1D9E75] hover:bg-teal-light transition-all">
              <span className="material-symbols-outlined text-sm">map</span> Find Booth
            </button>
            <button onClick={() => handleSend("Form 6")} className="flex items-center gap-2 px-md py-xs bg-white border border-[#E2E8F0] rounded-full whitespace-nowrap text-sm hover:border-[#1D9E75] hover:bg-teal-light transition-all">
              <span className="material-symbols-outlined text-sm">assignment</span> Form 6
            </button>
            <button onClick={() => handleSend("Rules")} className="flex items-center gap-2 px-md py-xs bg-white border border-[#E2E8F0] rounded-full whitespace-nowrap text-sm hover:border-[#1D9E75] hover:bg-teal-light transition-all">
              <span className="material-symbols-outlined text-sm">policy</span> Rules
            </button>
            <button onClick={() => handleSend("Results")} className="flex items-center gap-2 px-md py-xs bg-white border border-[#E2E8F0] rounded-full whitespace-nowrap text-sm hover:border-[#1D9E75] hover:bg-teal-light transition-all">
              <span className="material-symbols-outlined text-sm">history_edu</span> Results
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-lg space-y-lg flex flex-col">
            {messages.map((msg, idx) => {
              const isUser = msg.role === 'user';
              if (isUser) {
                return (
                  <div key={idx} className="chat-bubble-user p-md max-w-[80%] self-end">
                    {msg.content}
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="chat-bubble-bot p-md max-w-[80%] self-start" style={{ whiteSpace: 'pre-wrap' }}>
                    {msg.content}
                  </div>
                );
              }
            })}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-center gap-1 p-xs opacity-50 ml-2 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline animate-pulse delay-75"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline animate-pulse delay-150"></span>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-lg pb-md flex flex-wrap gap-2">
            {quickReplies.map((reply, idx) => (
              <span key={idx} onClick={() => handleSend(reply)} className="px-md py-1 border border-teal-primary text-teal-primary rounded-full text-xs cursor-pointer hover:bg-teal-primary hover:text-white transition-colors">
                {reply}
              </span>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-md border-t border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-2">
              <input 
                className="flex-1 border-none focus:ring-0 text-body-md placeholder:text-outline-variant outline-none" 
                placeholder="Type your question here..." 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <button onClick={() => handleSend()} disabled={isLoading || !inputText.trim()} className="w-10 h-10 bg-teal-primary text-white rounded-lg flex items-center justify-center hover:bg-[#0F6E56] transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatAssistant;

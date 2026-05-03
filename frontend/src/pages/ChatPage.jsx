import React from 'react';
import ChatAssistant from '../components/ChatAssistant';
import { Link } from 'react-router-dom';

const ChatPage = () => {
  return (
    <div className="py-xl">
      <Link to="/" className="inline-flex items-center text-teal-primary hover:underline mb-lg font-button">
        <span className="material-symbols-outlined mr-2">arrow_back</span> Back to Home
      </Link>
      <ChatAssistant />
    </div>
  );
};

export default ChatPage;

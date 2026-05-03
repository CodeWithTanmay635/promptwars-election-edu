import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import TopicPage from './pages/TopicPage.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import BottomNav from './components/BottomNav.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="text-on-background pb-16 min-h-screen flex flex-col">
        <Header />
        <main className="max-w-7xl mx-auto px-4 md:px-gutter flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topic/:id" element={<TopicPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularRoutes from './components/PopularRoutes';
import BookingSteps from './components/BookingSteps';
import VoiceAgent from './components/VoiceAgent';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white">
      <Hero />
      <Features />
      <PopularRoutes />
      <BookingSteps />
      <VoiceAgent />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;

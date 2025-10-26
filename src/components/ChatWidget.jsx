import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m your booking bot. Ask me about routes, prices, or seat availability.' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    // Simulated bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: "Got it! I can help you book. This is a demo — connect your API to go live." }]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 md:px-5"
        aria-label="Open chat"
      >
        <MessageCircle className="h-5 w-5" />
        Chat
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/20 p-4 sm:items-center">
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/60 px-4 py-3">
              <div className="flex items-center gap-2 text-white">
                <Bot className="h-5 w-5 text-fuchsia-300" />
                <span className="text-sm font-medium">Booking Bot</span>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-md p-1 text-zinc-400 hover:bg-white/5 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[50vh] min-h-[40vh] w-full space-y-3 overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(151,71,255,0.06),transparent_55%)] p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${m.role === 'user' ? 'bg-fuchsia-500 text-white' : 'bg-white/10 text-zinc-200'} max-w-[80%] rounded-2xl px-3 py-2 text-sm ring-1 ${m.role === 'user' ? 'ring-fuchsia-400/30' : 'ring-white/10'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="flex items-center gap-2 border-t border-white/10 bg-zinc-900/60 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask about routes or prices..."
                className="flex-1 rounded-xl border border-white/10 bg-zinc-800/60 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/30"
              />
              <button onClick={send} className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-500 px-3 py-2 text-sm font-medium text-white shadow shadow-fuchsia-500/20 transition hover:brightness-110">
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

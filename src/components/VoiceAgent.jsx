import React, { useState } from 'react';
import { Mic, Waves, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VoiceAgent = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-zinc-900 to-zinc-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(251,146,60,0.10),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Talk to your booking assistant</h2>
            <p className="mt-3 text-zinc-400">
              Speak naturally to search routes, pick seats, and confirm — our AI guides you through every step with a friendly voice.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-zinc-400">
              <Waves className="h-4 w-4" />
              Realistic voice responses
              <Sparkles className="ml-4 h-4 w-4" />
              Smart intent detection
            </div>
            <button
              onClick={() => setActive(v => !v)}
              className={`mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ring-1 transition ${active ? 'bg-emerald-500/15 text-emerald-300 ring-emerald-400/30' : 'bg-white/10 text-white ring-white/20 hover:bg-white/20'}`}
            >
              <Mic className="h-4 w-4" /> {active ? 'Listening…' : 'Start voice demo'}
            </button>
            <p className="mt-3 text-xs text-zinc-500">Demo UI only. Hook up your preferred voice API for production.</p>
          </div>

          <div className="relative h-[360px] w-full">
            <motion.div
              animate={active ? { scale: [1, 1.06, 1], boxShadow: ['0 0 0 0 rgba(168,85,247,0.2)', '0 0 0 24px rgba(56,189,248,0.08)', '0 0 0 0 rgba(168,85,247,0.2)'] } : {}}
              transition={{ duration: 2.2, repeat: active ? Infinity : 0, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(168,85,247,0.5),rgba(56,189,248,0.5),rgba(251,146,60,0.5),rgba(168,85,247,0.5))] p-[2px]"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-950">
                <div className="relative h-60 w-60 overflow-hidden rounded-full">
                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(168,85,247,0.35),rgba(56,189,248,0.35),rgba(251,146,60,0.35),rgba(168,85,247,0.35))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_30px_8px_rgba(16,185,129,0.5)]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAgent;

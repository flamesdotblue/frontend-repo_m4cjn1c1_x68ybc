import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(151,71,255,0.25),rgba(0,0,0,0))]"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,220,255,0.15),rgba(0,0,0,0))]"></div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full md:w-[48%]"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            Live bus booking with AI voice assistant
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Book Your Next Bus Seamlessly
            <span className="block bg-gradient-to-r from-fuchsia-400 via-sky-400 to-amber-300 bg-clip-text text-transparent">with Voice + Bot</span>
          </h1>
          <p className="mt-5 max-w-xl text-zinc-300">
            A futuristic, responsive, and animated experience for discovering routes, comparing prices, and confirming seats in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#steps"
              className="group inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
            >
              Book now
              <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-800 px-5 py-3 text-sm font-medium text-zinc-200 ring-1 ring-zinc-700 transition hover:bg-zinc-700 hover:text-white"
            >
              Explore features
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-[52%]"
          style={{ minHeight: '420px', height: '60vh' }}
        >
          <div className="absolute inset-0 rounded-xl border border-white/10 bg-zinc-900/40" />
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

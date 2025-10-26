import React from 'react';
import { motion } from 'framer-motion';

const routes = [
  { from: 'San Francisco', to: 'Los Angeles', price: 49, duration: '7h 30m' },
  { from: 'New York', to: 'Boston', price: 29, duration: '4h 10m' },
  { from: 'Austin', to: 'Dallas', price: 19, duration: '3h 00m' },
  { from: 'Seattle', to: 'Portland', price: 25, duration: '3h 30m' },
  { from: 'Chicago', to: 'Detroit', price: 32, duration: '5h 45m' },
  { from: 'Miami', to: 'Orlando', price: 22, duration: '4h 20m' }
];

const PopularRoutes = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-zinc-950 to-zinc-900 py-20 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Popular routes</h2>
            <p className="mt-2 text-zinc-400">Hand-picked trips people love, with great timing and value.</p>
          </div>
          <a href="#" className="hidden rounded-lg bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/20 md:inline-flex">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r, i) => (
            <motion.div
              key={`${r.from}-${r.to}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur transition hover:border-white/20 hover:bg-zinc-900/80"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">From</p>
                  <p className="text-lg font-medium">{r.from}</p>
                </div>
                <svg className="h-6 w-6 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <div className="text-right">
                  <p className="text-sm text-zinc-400">To</p>
                  <p className="text-lg font-medium">{r.to}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <div className="text-zinc-400">Duration: <span className="text-zinc-200">{r.duration}</span></div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/30">${r.price}</div>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.12),transparent)] opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;

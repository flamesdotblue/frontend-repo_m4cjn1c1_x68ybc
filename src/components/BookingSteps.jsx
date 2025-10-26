import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Choose your route',
    desc: 'Pick where you’re headed and your travel date.'
  },
  {
    title: 'Select seats & timing',
    desc: 'Compare operators, timings, and seat maps in real-time.'
  },
  {
    title: 'Checkout securely',
    desc: 'Confirm in one tap and get instant e-ticket access.'
  }
];

const BookingSteps = () => {
  return (
    <section id="steps" className="relative w-full bg-zinc-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Three easy steps</h2>
          <p className="mt-3 text-zinc-400">From search to seat confirmation — the flow is fast and delightful.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold ring-1 ring-white/20">{i + 1}</div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;

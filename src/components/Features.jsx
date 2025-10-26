import React from 'react';
import { Shield, Clock, CreditCard, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: MapPin,
    title: 'Smart Route Discovery',
    desc: 'Find the fastest routes, live availability, and best prices in seconds.'
  },
  {
    icon: Shield,
    title: 'Secure & Trusted',
    desc: 'Protected payments and verified operators keep your trip safe.'
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    desc: 'Track delays, boarding time, and arrival ETAs as they happen.'
  },
  {
    icon: CreditCard,
    title: 'One-tap Checkout',
    desc: 'Pay with cards and wallets seamlessly with instant confirmations.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-zinc-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(151,71,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Designed for effortless booking</h2>
          <p className="mt-3 text-zinc-400">Everything you need to plan and confirm your journey, wrapped in a sleek dark interface.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur transition hover:border-white/20 hover:bg-zinc-900/80"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <f.icon className="h-6 w-6 text-zinc-200" />
                </div>
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent)] opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

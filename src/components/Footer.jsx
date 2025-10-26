import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-zinc-950 py-10 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs">© {new Date().getFullYear()} SwiftBus — All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#steps" className="hover:text-white">How it works</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

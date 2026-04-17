"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, User, ChevronRight, Coins } from "lucide-react";
import { useAccess, usePoints } from "@/lib/access";
import { SearchModal } from "./SearchModal";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isLoggedIn, isWithinGracePeriod, daysRemaining } = useAccess();
  const { points } = usePoints();

  const navLinks = [
    { name: "Browse", href: "/browse" },
    { name: "Upload", href: "/upload" },
    { name: "Community", href: "/community" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-3xl px-6 py-3 relative z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
            S
          </div>
          <span className="text-xl font-bold font-sans tracking-tight hidden sm:block">
            StudentDocs<span className="text-indigo-600">Hub</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-indigo-600 transition-colors uppercase tracking-widest text-[11px] font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Points Display */}
          {(isLoggedIn || isWithinGracePeriod) && (
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50 rounded-xl">
              <Coins className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">{points} pts</span>
            </div>
          )}

          <motion.button
            onClick={() => setIsSearchOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all hidden sm:flex"
          >
            <Search className="w-5 h-5" />
          </motion.button>
          
          <Link href="/hub">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-2xl text-sm font-bold hover:bg-indigo-700 transition-all hidden sm:flex items-center gap-2 shadow-lg shadow-indigo-500/10"
            >
              <User className="w-4 h-4" />
              <span>{isLoggedIn ? "Dashboard" : "Enter Hub"}</span>
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass rounded-3xl p-6 md:hidden z-40 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => { setIsOpen(false); setIsSearchOpen(true); }}
                className="flex items-center justify-between p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600"
              >
                <span className="font-bold">Instant Search</span>
                <Search className="w-5 h-5" />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                >
                  <span className="font-semibold text-lg">{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </Link>
              ))}
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
              <Link
                href="/hub"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white p-4 rounded-2xl font-bold"
              >
                <User className="w-5 h-5" />
                {isLoggedIn ? "My Profile" : "Login / Signup"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
};

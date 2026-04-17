"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Leaderboard } from "@/components/Leaderboard";
import { SearchModal } from "@/components/SearchModal";
import { motion } from "framer-motion";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero with Search Trigger */}
        <section className="relative">
          <Hero />
          {/* Internal Search Button Connection happens via Navbar state or by passing it to Hero */}
          {/* For now, we'll keep it simple and just make the Hero button open search via the same logic as Navbar if we refactor, but here I'll just add the modal at the root */}
        </section>

        <Features />

        {/* Leaderboard Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">
                Join the <span className="gradient-text">Top Contributors</span> of Bangladesh
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
                Our community is built by students like you. Share your notes, earn points, and climb the leaderboard to gain recognition as a top student resource provider.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <span className="font-bold">50</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Points per Upload</h4>
                    <p className="text-sm text-slate-500">Earn points for every valid document you share.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <Leaderboard />
          </div>
        </section>
      </main>
      
      <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="font-bold font-sans tracking-tight">
              StudentDocs<span className="text-indigo-600">Hub</span>
            </span>
          </div>
          
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Student Docs Hub BD. Empowering Bangladeshi students through knowledge sharing.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

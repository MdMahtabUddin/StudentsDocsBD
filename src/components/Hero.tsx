"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide mb-6">
            WELCOME TO THE FUTURE OF STUDYING
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            The Ultimate <span className="gradient-text">Document Hub</span> <br />
            For Bangladeshi Students
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Access thousands of academic resources, lecture notes, and assignments shared by students across Bangladesh. Simple, secure, and always free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-indigo-200 dark:shadow-none transition-all hover:bg-indigo-700"
            >
              Explore Documents
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Share Your Notes
            </motion.button>
          </div>
        </motion.div>

        {/* Stats / Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">10K+</span>
            <span className="text-sm text-slate-500">Documents</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">50+</span>
            <span className="text-sm text-slate-500">Universities</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">25K+</span>
            <span className="text-sm text-slate-500">Active Students</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">Free</span>
            <span className="text-sm text-slate-500">Always</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

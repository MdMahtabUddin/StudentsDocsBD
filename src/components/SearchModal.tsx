"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, FileText, School, User, Lock, ArrowRight } from "lucide-react";
import { searchDocs, Document } from "@/lib/docs";
import { useAccess } from "@/lib/access";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Document[]>([]);
  const { isWithinGracePeriod, isLoggedIn } = useAccess();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    setResults(searchDocs(query));
  }, [query]);

  // Handle Close on Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-6 md:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl overflow-hidden relative"
          >
            {/* Search Input */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <Search className="w-6 h-6 text-indigo-600" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search by title, university, or contributor..."
                className="flex-1 bg-transparent text-xl font-medium outline-none placeholder:text-slate-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              {query.length === 0 ? (
                <div className="py-20 text-center opacity-50">
                  <p className="text-lg">Start typing to find documents instantly ✨</p>
                </div>
              ) : results.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {results.map((doc) => (
                    <div
                      key={doc.id}
                      className="group p-5 rounded-2xl border border-slate-50 dark:border-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-100 dark:hover:border-indigo-800/50 transition-all cursor-pointer relative"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                              {doc.type}
                            </span>
                            {doc.isPremium && (
                              <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/30 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                                <Lock className="w-2.5 h-2.5" />
                                Premium
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                            {doc.title}
                          </h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                            <div className="flex items-center gap-1.5">
                              <School className="w-3.5 h-3.5" />
                              {doc.institution}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5" />
                              {doc.contributor}
                            </div>
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                          {!doc.isPremium || isLoggedIn || isWithinGracePeriod ? (
                            <button className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              <ArrowRight className="w-5 h-5" />
                            </button>
                          ) : (
                            <div className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-lg text-xs font-bold">
                              {doc.points} pts
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center opacity-50">
                  <p className="text-lg text-slate-500">No documents found matching "{query}"</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                Tip: Type university or subject for better results
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

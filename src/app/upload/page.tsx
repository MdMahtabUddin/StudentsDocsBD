"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Upload as UploadIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function UploadPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    docName: "",
    institution: "",
    personName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate upload
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className="flex flex-col items-center mb-10 text-center">
                  <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6">
                    <UploadIcon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h1 className="text-3xl font-bold mb-2 tracking-tight">Express Upload</h1>
                  <p className="text-slate-500">Share your document. No login required.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 px-1">
                      Document Name*
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-medium"
                      placeholder="e.g. Mechanical Engineering Midterm 1"
                      value={formData.docName}
                      onChange={(e) => setFormData({ ...formData, docName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 px-1">
                        Institution*
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-medium"
                        placeholder="e.g. BUET"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 px-1">
                        Contributor Name*
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-medium"
                        placeholder="e.g. Rahat Khan"
                        value={formData.personName}
                        onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-5 rounded-[24px] font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 dark:shadow-none active:scale-[0.98]"
                    >
                      Start Upload
                    </button>
                    <p className="text-[10px] text-center mt-6 text-slate-400 font-bold uppercase tracking-widest">
                      By uploading, you agree to our community guidelines
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-slate-800 p-12 text-center shadow-2xl"
              >
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Upload Successful!</h2>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.personName}</span>! Your document for <span className="font-bold text-slate-900 dark:text-white">{formData.institution}</span> will be processed soon.
                </p>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-5 rounded-3xl font-bold"
                  >
                    Upload Another
                  </button>
                  <Link href="/browse">
                    <button className="w-full flex items-center justify-center gap-2 group text-indigo-600 font-bold py-2">
                      Browse all documents
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

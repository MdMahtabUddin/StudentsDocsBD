"use client";

import { motion } from "framer-motion";
import { Search, Share2, Shield, Bookmark, Sparkles, Cloud } from "lucide-react";

const features = [
  {
    title: "Instant Search",
    description: "Find exactly what you need with our AI-powered document search engine.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    title: "Secure Sharing",
    description: "Your documents are encrypted and protected. Share with confidence.",
    icon: Shield,
    color: "bg-emerald-500",
  },
  {
    title: "Cloud Access",
    description: "Access your saved notes and materials from any device, anywhere.",
    icon: Cloud,
    color: "bg-indigo-500",
  },
  {
    title: "Easy Collaboration",
    description: "Collaborate with peers through comments and shared collections.",
    icon: Share2,
    color: "bg-purple-500",
  },
  {
    title: "Smart Organization",
    description: "Automatically organize documents by university, faculty, and subject.",
    icon: Bookmark,
    color: "bg-orange-500",
  },
  {
    title: "Verified Content",
    description: "Community-rated materials ensure you get the most accurate resources.",
    icon: Sparkles,
    color: "bg-amber-500",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Success</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to excel in your academic journey, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl dark:hover:shadow-indigo-500/10"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

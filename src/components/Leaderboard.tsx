"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star } from "lucide-react";

const topContributors = [
  { name: "Rahat Khan", institution: "BUET", points: 1250, uploads: 24, rank: 1 },
  { name: "Samiul Islam", institution: "DU", points: 980, uploads: 18, rank: 2 },
  { name: "Afsana Mimi", institution: "NSU", points: 840, uploads: 15, rank: 3 },
  { name: "Farhan Ahmed", institution: "JU", points: 620, uploads: 12, rank: 4 },
  { name: "Sumaiya Akter", institution: "RU", points: 590, uploads: 11, rank: 5 },
];

export const Leaderboard = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-2xl">
          <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Top Contributors</h2>
          <p className="text-slate-500 text-sm">Recognizing our most helpful students</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {topContributors.map((user, index) => (
          <motion.div
            key={user.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-5 rounded-3xl border ${
              index === 0 
                ? "bg-indigo-600 text-white border-transparent" 
                : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
            } shadow-sm group hover:scale-[1.02] transition-all`}
          >
            <div className="flex items-center gap-5">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${
                index === 0 ? "bg-white/20" : "bg-slate-100 dark:bg-slate-800"
              }`}>
                {index === 0 && <Award className="w-6 h-6 text-amber-300" />}
                {index === 1 && <Medal className="w-6 h-6 text-slate-400" />}
                {index === 2 && <Medal className="w-6 h-6 text-amber-600" />}
                {index > 2 && index + 1}
              </div>
              <div>
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className={`text-sm ${index === 0 ? "text-white/70" : "text-slate-500"}`}>
                  {user.institution} • {user.uploads} uploads
                </p>
              </div>
            </div>
            <div className={`text-right ${index === 0 ? "text-white" : "text-indigo-600"}`}>
              <div className="text-2xl font-black">{user.points}</div>
              <div className={`text-[10px] font-bold uppercase tracking-widest ${
                index === 0 ? "text-white/60" : "text-slate-400"
              }`}>Points</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-[32px] bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 h flex items-center justify-between gap-6">
        <div className="flex-1">
          <h4 className="font-bold mb-1">Upload and earn!</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
            Each document you share gives you 50 points and helps your peers.
          </p>
        </div>
        <button className="whitespace-nowrap bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-colors">
          Share Now
        </button>
      </div>
    </div>
  );
};

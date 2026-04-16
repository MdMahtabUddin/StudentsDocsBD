import { Navbar } from "@/components/Navbar";

export default function HubPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-white text-4xl font-bold mb-8 shadow-2xl shadow-indigo-500/20">
            S
          </div>
          <h1 className="text-5xl font-bold mb-6">Welcome to the Hub</h1>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-xl mb-12">
            Your personal workspace for documents, groups, and academic success.
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold">Login</button>
            <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-bold">Sign Up</button>
          </div>
        </div>
      </main>
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { Upload as UploadIcon } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 px-6 text-center">
        <div className="max-w-3xl mx-auto py-20 px-10 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[40px] bg-slate-50/50 dark:bg-slate-900/30">
          <div className="w-20 h-20 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <UploadIcon className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Share Your Resources</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
            Select a file to upload. Your contribution helps thousands of students!
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors">
            Select Files
          </button>
        </div>
      </main>
    </div>
  );
}

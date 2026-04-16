import { Navbar } from "@/components/Navbar";

export default function BrowsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Browse Documents</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            This section is under construction. Soon you will be able to browse all shared academic materials.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-slate-100 dark:bg-slate-800 rounded-3xl animate-pulse" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

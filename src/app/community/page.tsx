import { Navbar } from "@/components/Navbar";

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Student Community</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Join the conversation! Discuss subjects, share tips, and connect with students from all over Bangladesh.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-indigo-600 text-white text-left">
              <h2 className="text-2xl font-bold mb-4">University Groups</h2>
              <p className="opacity-90">Find students from your specific university and faculty.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 text-white text-left text-white">
              <h2 className="text-2xl font-bold mb-4">Help & Support</h2>
              <p className="opacity-90">Ask questions and get help with your studies.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

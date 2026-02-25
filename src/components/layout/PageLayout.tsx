// src/components/layout/PageLayout.tsx
import Navbar from "./Navbar";
import Footer from "./Footer";

// We have to tell TypeScript that 'children' is a React node!
type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-50 font-sans text-slate-900">
      {/* Apple Glass Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-300/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[60rem] h-[60rem] bg-sky-200/50 rounded-full blur-[120px] mix-blend-multiply opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: '20s' }}></div>
      <div className="absolute top-[30%] right-[20%] w-[40rem] h-[40rem] bg-rose-200/30 rounded-full blur-[100px] mix-blend-multiply opacity-60 pointer-events-none animate-pulse" style={{ animationDuration: '18s' }}></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
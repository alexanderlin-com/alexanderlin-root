// src/components/layout/PageLayout.tsx
import Navbar from "./Navbar";
import Footer from "./Footer";

// We have to tell TypeScript that 'children' is a React node!
type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
import PageLayout from "../components/layout/PageLayout";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <PageLayout>

      <motion.main
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-serif text-4xl font-semibold">
          Software Engineer
        </h1>

        <p className="font-sans text-gray-600">
          Alexander Lin
        </p>

        <p className="font-sans text-gray-500 max-w-xl text-center">
          I build reliable, well-structured systems with modern tools and a focus on clarity.
        </p>
      </motion.main>


    </PageLayout>
  );
}

import PageLayout from "../components/layout/PageLayout";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <PageLayout>
        <motion.main
        className="min-h-screen flex flex-col items-center justify-center gap-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <h1 className="text-4xl font-bold">Alexander Lin</h1>
        <p className="text-gray-500">Software Engineer</p>
        </motion.main>


    </PageLayout>
  );
}

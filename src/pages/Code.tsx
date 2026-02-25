import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

type GithubRepo = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    language: string;
    stargazers_count: number;
    fork: boolean;
};

export default function Code() {
    const [projects, setProjects] = useState<GithubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/alexanderlin-com/repos?sort=updated&per_page=100");
                if (!response.ok) throw new Error("Failed to fetch");

                const data: GithubRepo[] = await response.json();

                // Filter out forks and un-named repositories, sort by stars (optional, or rely on 'updated' sort)
                const validRepos = data
                    .filter(repo => !repo.fork && repo.name !== "alexanderlin-com") // Exclude the profile README repo itself
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);

                setProjects(validRepos);
            } catch (error) {
                console.error("Error fetching GitHub repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-6xl mx-auto px-6 py-20 lg:py-24 grid grid-cols-1 gap-12 lg:gap-16 relative z-10 w-full min-h-[90vh]"
        >
            <div className="pb-8 mb-4 border-b border-slate-200/50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 text-center lg:text-left"
                >
                    <h1 className="font-sans text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight">
                        Code
                    </h1>
                    <p className="text-slate-600 max-w-2xl text-lg font-light leading-relaxed mx-auto lg:mx-0">
                        A real-time feed of my public repositories pulled directly from GitHub!
                    </p>
                </motion.div>
            </div>

            <div className="w-full flex flex-col gap-24">
                {loading ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-full h-80 bg-slate-200/50 rounded-[2rem] border border-white/60 animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Featured Projects Section */}
                        {projects.some(repo => repo.topics?.includes("featured")) && (
                            <div className="space-y-10">
                                <h2 className="text-2xl font-bold font-sans text-slate-900 border-b border-slate-200/50 pb-4">
                                    Featured Work
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
                                    {projects
                                        .filter(repo => repo.topics?.includes("featured"))
                                        .map((repo, index) => renderProjectCard(repo, index))}
                                </div>
                            </div>
                        )}

                        {/* Open Source Section */}
                        {projects.some(repo => !repo.topics?.includes("featured")) && (
                            <div className="space-y-10">
                                <h2 className="text-2xl font-bold font-sans text-slate-900 border-b border-slate-200/50 pb-4">
                                    Other Projects
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
                                    {projects
                                        .filter(repo => !repo.topics?.includes("featured") && repo.topics?.includes("portfolio"))
                                        .map((repo, index) => renderProjectCard(repo, index))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </motion.div>
    );
}

// Helper function to render a ProjectCard from a repo
function renderProjectCard(repo: GithubRepo, index: number) {
    // Create a formatted title (e.g., "my-repo-name" -> "My Repo Name")
    const formattedTitle = repo.name
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

    // Compile tags from topics + the primary language
    const tags = [...(repo.topics || [])];
    if (repo.language && !tags.includes(repo.language.toLowerCase())) {
        tags.push(repo.language);
    }

    // Add a star tag if it has stars
    if (repo.stargazers_count > 0) {
        tags.unshift(`⭐ ${repo.stargazers_count}`);
    }

    return (
        <ProjectCard
            key={repo.id}
            title={formattedTitle}
            description={repo.description || "No description provided."}
            tags={tags.length > 0 ? tags : ["Code"]}
            link={repo.html_url}
            delay={Math.min(index * 0.1, 0.4)} // Cap delay so the bottom ones don't take forever to appear
        />
    );
}

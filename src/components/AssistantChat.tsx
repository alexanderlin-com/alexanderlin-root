import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    role: "user" | "assistant";
    content: string;
};

interface AssistantChatProps {
    className?: string;
}

export default function AssistantChat({ className = "h-[500px] lg:h-[600px]" }: AssistantChatProps) {
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm an AI assistant trained on Alexander's resume, work experience, and tech stack. Ask me anything!" }
    ]);

    // Quick prompts for users to select
    const SUGGESTION_PROMPTS = [
        "Who is Alexander?",
        "What has Alexander built?",
        "What is Alexander's tech stack?",
        "What is he looking for next?"
    ];
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat without scrolling the entire window
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const submitMessage = async (userMessage: string) => {
        if (!userMessage.trim() || isLoading) return;

        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            // Append an empty assistant message to stream into
            setMessages(prev => [...prev, { role: "assistant", content: "" }]);

            const response = await fetch("https://assistant-resume-241479584971.us-central1.run.app/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) throw new Error("Network response was not ok");

            const reader = response.body?.getReader();
            if (!reader) throw new Error("No reader available");

            const decoder = new TextDecoder();
            let accumulatedContent = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                accumulatedContent += decoder.decode(value, { stream: true });

                // Update the last message (the assistant's response) with new tokens
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = accumulatedContent;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error fetching chat response:", error);
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = "Sorry, I encountered an error connecting to my servers. Please try again later.";
                return newMessages;
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        submitMessage(input);
    };

    return (
        <div className={`w-full bg-white/90 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white flex flex-col overflow-hidden relative z-10 ${className}`}>
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-sm font-bold text-slate-800 tracking-tight">About Me</span>
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-2 py-1 bg-white rounded-md border border-slate-100 shadow-sm">
                    Online
                </div>
            </div>

            {/* Messages Area */}
            <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-6"
            >
                <AnimatePresence>
                    {messages.map((msg, index) => {
                        // If it's the loading state (an empty assistant message at the very end), show the bubble animation
                        if (isLoading && index === messages.length - 1 && msg.role === "assistant" && msg.content === "") {
                            return (
                                <motion.div
                                    key="loading-bubble"
                                    initial={{ opacity: 0, scale: 0.8, originX: 0, originY: 1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1 w-max h-[44px]">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                    </div>
                                </motion.div>
                            );
                        }

                        // Otherwise render normal message text
                        return msg.content ? (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl ${msg.role === "user"
                                        ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-tr-sm shadow-md"
                                        : "bg-white border border-slate-100 text-slate-700 rounded-tl-sm shadow-sm"
                                        }`}
                                >
                                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-light text-left">
                                        {msg.content}
                                    </p>
                                </div>
                            </motion.div>
                        ) : null;
                    })}
                </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/50 backdrop-blur-md border-t border-slate-100 flex flex-col gap-3">
                {/* Suggestions */}
                {messages.length === 1 && (
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {SUGGESTION_PROMPTS.map((prompt, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.preventDefault();
                                    submitMessage(prompt);
                                }}
                                disabled={isLoading}
                                className="text-xs sm:text-sm px-3 py-1.5 bg-slate-100/50 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 border border-slate-200 rounded-full transition-all text-left whitespace-nowrap disabled:opacity-50"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2 bg-white rounded-full border border-slate-200 p-1.5 shadow-inner focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-300 transition-all duration-300"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about his tech stack, experience, etc..."
                        className="flex-1 bg-transparent px-4 py-2 text-slate-700 text-sm focus:outline-none w-full"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="p-2 sm:px-5 sm:py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-full font-medium text-sm transition-colors shadow-sm disabled:shadow-none flex items-center justify-center"
                    >
                        <span className="hidden sm:inline">Send</span>
                        <svg className="w-4 h-4 sm:hidden md:block sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </form>
            </div>
        </div>
    );
}

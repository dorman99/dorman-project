import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    role: string;
    description: string;
    techStack: string[];
    image?: string;
    links?: {
        github?: string;
        demo?: string;
    };
}

const ProjectCard = ({ title, role, description, techStack, image, links }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl dark:hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
        >
            {/* Thumbnail or Gradient Placeholder */}
            <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                        <span className="text-slate-400 dark:text-slate-600 font-medium">No Image Available</span>
                    </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {links?.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                            aria-label="View Source Code"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {links?.demo && (
                        <a
                            href={links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                            aria-label="View Live Demo"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <span className="text-xs font-semibold tracking-wider text-primary uppercase mb-1 block">
                        {role}
                    </span>
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        {links?.demo && (
                            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                <ArrowUpRight size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium group-hover:bg-primary/5 group-hover:text-primary transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

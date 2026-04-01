import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Flash Coffee POS System",
            role: "Tech Lead",
            description: "Led the development of an in-house Point of Sale system MVP within 6 months. Collaborated with multiple teams to define requirements and built backend services using NestJS and AWS Lambda.",
            techStack: ["NestJS", "AWS Lambda", "PostgreSQL", "React", "Microservices"],
            links: {
                demo: "https://flash-coffee.com" // Placeholder link
            }
        },
        {
            title: "Sunday Direct Retail Platform",
            role: "Senior Engineer",
            description: "Direct retail insurance platform allowing users to purchase policies online. Handled backend development, microservices architecture, and payment integration.",
            techStack: ["Node.js", "TypeScript", "Microservices", "Redis"],
            links: {
                demo: "https://sundayins.co.id" // Placeholder link
            }
        },
        {
            title: "Inspigo Search Service",
            role: "Backend Engineer",
            description: "Designed and implemented a high-performance search service using Elasticsearch for an audio learning platform, significantly improving content discovery for users.",
            techStack: ["Node.js", "Elasticsearch", "AWS", "Rest API"],
            links: {
                demo: "https://inspigo.id"
            }
        },
        {
            title: "Best Of Beauty Award 2021 API",
            role: "Backend Engineer",
            description: "Developed API services for a major beauty awards event. Handled high traffic and data consistency using Go and NestJS, deployed on Kubernetes.",
            techStack: ["Go", "NestJS", "Kubernetes", "PostgreSQL"],
            links: {}
        },
        {
            title: "COD Payment Integration",
            role: "Backend Engineer",
            description: "Integrated Cash On Delivery payment gateway for e-commerce transactions. Included secure callback handling and order status synchronization.",
            techStack: ["Node.js", "Serverless", "MySQL", "SNS/SQS"],
            links: {}
        },
        {
            title: "Seekmi Vendor App",
            role: "Software Engineer",
            description: "Revamped legacy Laravel code to Node.js and maintained the mobile vendor application built with Ionic framework.",
            techStack: ["Ionic", "Node.js", "RabbitMQ", "Laravel"],
            links: {}
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A selection of projects I've worked on, ranging from large-scale enterprise platforms to innovative MVP solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/mh-abdillahh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-white dark:hover:bg-slate-800 hover:border-primary transition-all"
                    >
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "PT Sunday Ins Indonesia",
            role: "Senior Software Engineer",
            period: "June 2023 - Present",
            description: "Leading development for direct retail platform and back office systems.",
            techStack: ["Node.js", "TypeScript", "Microservices"],
            achievements: [
                "Maintain and develop Sunday's Direct Retail Platform",
                "Maintain and develop Sunday's Retail Back Office"
            ]
        },
        {
            company: "PT Sembilan Puluh Enam Derajat (FlashCoffee)",
            role: "Senior Software Engineer / Technical Lead",
            period: "Sep 2022 - May 2023",
            description: "Led the In-House POS Project, finishing the first MVP in 6 months.",
            techStack: ["NestJS", "AWS Lambda", "PostgreSQL", "React"],
            achievements: [
                "Lead Flash Coffee's In House POS Project (2 BE, 2 FE, 2 QA)",
                "Gather and collaborate to compile project requirement with Products, QA, Ops, and Data teams",
                "Develop Services for POS on backend side"
            ]
        },
        {
            company: "PT Sembilan Puluh Enam Derajat (FlashCoffee)",
            role: "Backend Engineer",
            period: "Dec 2021 - Sep 2022",
            description: "Focused on integration and serverless architecture for payment squads.",
            techStack: ["Node.js", "AWS Lambda", "MySQL", "SNS/SQS"],
            achievements: [
                "Create integration with COD Payment (HK's Payment Gateway)",
                "Develop Services on Payment Squad using NestJs, Serverless",
                "Updated code quality on PAY squad with coverage up to 85% using jest",
                "Create Technical Docs"
            ]
        },
        {
            company: "PT Daily Dinamika Kreasi",
            role: "Backend Engineer",
            period: "Aug 2021 - Nov 2021",
            description: "Short-term contract developing API services.",
            techStack: ["NestJS", "Go", "Elasticsearch", "PGSQL"],
            achievements: [
                "Develop Best Of Beauty Award 2021 API Services using Nest Js and Go",
                "Setting Application Configuration using Kubernetes, helm, and istio"
            ]
        },
        {
            company: "PT Inspigo Inovasi Indonesia",
            role: "Backend Engineer",
            period: "Dec 2018 - Aug 2021",
            description: "Developed features and maintained legacy code for the platform.",
            techStack: ["Node.js", "Elasticsearch", "AWS"],
            achievements: [
                "Create Search Service Using Elasticsearch for In App and CMS usage",
                "Working with AWS Cloud Services ex: S3, Lambda, Elasticsearch and EC2",
                "Creating Unit Testing Using Mocha Chai and Test Double"
            ]
        },
        {
            company: "PT Seekmi Indonesia",
            role: "Software Engineer",
            period: "May 2018 - Nov 2018",
            description: "Full-stack development for vendor apps.",
            techStack: ["Ionic", "Node.js", "Laravel"],
            achievements: [
                "Develop Feature and Maintain Legacy Code for Vendor Apps using Ionic",
                "Revamp Code From Laravel to Nodejs",
                "Creating RabbitMq Service for Handling Concurrent Logic Business"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Career Path</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                            Work <span className="text-primary">Experience</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-800 top-0 bottom-0 md:block hidden"></div>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}>

                                    {/* Timeline Dot (Desktop) */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-slate-950 z-10 md:flex items-center justify-center hidden">
                                        <Briefcase size={14} className="text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className={`p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-left' // Keep text align left for readability
                                            }`}>
                                            <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                                    <p className="text-primary font-medium">{exp.company}</p>
                                                </div>
                                                <div className="flex items-center text-slate-500 text-sm bg-white dark:bg-slate-800 px-3 py-1 rounded-full w-fit h-fit border border-slate-200 dark:border-slate-700">
                                                    <Calendar size={14} className="mr-2" />
                                                    {exp.period}
                                                </div>
                                            </div>

                                            <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                                                {exp.description}
                                            </p>

                                            <ul className="space-y-2 mb-6">
                                                {exp.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                                                        <CheckCircle2 size={16} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                                                {exp.techStack.map((tech) => (
                                                    <span key={tech} className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty space for the other side of timeline */}
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;

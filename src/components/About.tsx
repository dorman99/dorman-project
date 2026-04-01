import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Terminal, GraduationCap, Award } from 'lucide-react';

const About = () => {
    // Calculate years of experience from first job (May 2018)
    const startDate = new Date('2018-05-01');
    const currentDate = new Date();
    const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

    const skills = [
        { category: "Languages", items: ["Node.js", "TypeScript", "Golang", "JavaScript", "SQL"] },
        { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"] },
        { category: "Cloud & Ops", items: ["AWS (S3, Lambda, EC2, SQS)", "Kubernetes", "Helm", "Istio", "RabbitMQ"] },
        { category: "Testing", items: ["Mocha", "Chai", "Jest", "Test Double"] },
    ];

    const education = [
        {
            school: "Bina Nusantara University",
            degree: "Bachelor of Computer Science",
            year: "2018 - 2020",
            gpa: "3.52"
        },
        {
            school: "Hacktiv8 Indonesia",
            degree: "Fullstack JavaScript Immersive",
            year: "Nov 2017 - Mar 2018",
            gpa: null
        },
        {
            school: "State Polytechnic of Jakarta",
            degree: "Diploma of Electrical Engineering",
            year: "2014 - 2017",
            gpa: "3.17"
        }
    ];

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Bio & Education */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                                    <Terminal className="text-primary" size={24} />
                                    Professional Summary
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                    I am an experienced software engineer with a passion for creating innovative and efficient software solutions.
                                    I have been working in the industry for over {yearsOfExperience} years, honing my skills and gaining valuable experience along the way.
                                    Currently serving as a Senior Software Engineer at PT Sunday Ins Indonesia.
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">Experience</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{yearsOfExperience}+ Years in Software Engineering</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                                    <GraduationCap className="text-primary" size={24} />
                                    Education
                                </h3>
                                <div className="space-y-4">
                                    {education.map((edu, index) => (
                                        <div key={index} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                                            <div className="absolute top-1.5 left-[-9px] w-4 h-4 bg-primary rounded-full border-4 border-slate-50 dark:border-slate-900"></div>
                                            <h4 className="font-bold text-slate-900 dark:text-white">{edu.school}</h4>
                                            <p className="text-slate-600 dark:text-slate-300 text-sm">{edu.degree}</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="text-xs text-slate-500">{edu.year}</span>
                                                {edu.gpa && <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">GPA: {edu.gpa}</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                                <Code className="text-primary" size={24} />
                                Technical Skills
                            </h3>

                            <div className="space-y-6">
                                {skills.map((skillGroup, index) => (
                                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors">
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-md font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

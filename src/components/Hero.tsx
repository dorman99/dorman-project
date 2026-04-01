import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    // Calculate years of experience from first job (May 2018)
    const startDate = new Date('2018-05-01');
    const currentDate = new Date();
    const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

    return (
        <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                            Software Engineer Lead
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                                Hafizh Abdillah.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
                            I build scalable, high-performance backend systems and full-stack solutions.
                            With over {yearsOfExperience}+ years of experience creating innovative digital products in Jakarta.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#experience"
                                className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1"
                            >
                                View My Work
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all transform hover:-translate-y-1"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual / Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square relative flex items-center justify-center">
                            {/* Abstract decorative circles */}
                            <div className="absolute w-[80%] h-[80%] border-2 border-slate-200 dark:border-slate-800 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute w-[60%] h-[60%] border-2 border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                            {/* Image Placeholder - To be replaced with real image */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-950 shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-400">
                                    <img
                                        src={profileImg}
                                        alt="Hafizh Abdillah"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>

                            {/* Stats / Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -bottom-4 -right-4 md:bottom-10 md:right-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                                        <Download size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Experience</p>
                                        <p className="font-bold text-slate-900 dark:text-white">{yearsOfExperience}+ Years</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

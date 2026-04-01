import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start text-slate-600 dark:text-slate-400">
                        <span className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                            Hafizh Abdillah
                        </span>
                        <p className="text-sm">
                            Software Engineer Lead • Building digital experiences
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/mh-abdillahh" // Assuming GitHub URL, can be updated later
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/mh-abdillahh" // Assuming LinkedIn URL, can be updated later
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:Hafizh.abdillahh@gmail.com"
                            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-sm text-slate-500 dark:text-slate-500">
                    <p>© {currentYear} Hafizh Abdillah. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

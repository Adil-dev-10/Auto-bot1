
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import GradientText from '../components/GlitchText';

import { FIVERR_PROFILE_URL } from '../constants';
import botVideo from '../bot.mp4';

const HireMe: React.FC = () => {


    return (
        <div className="pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fb7b3] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4fb7b3]"></span>
                    </span>
                    <span className="text-[#4fb7b3] font-mono text-sm tracking-widest uppercase">Open for Work</span>
                </div>
                <GradientText
                    text="START A PROJECT"
                    as="h1"
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-center"
                />
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Ready to automate your business? Fill out the form below or book a direct consultation.
                    I typically respond within 2 hours.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

                {/* Contact Form */}
                {/* Bot Video */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-3xl relative overflow-hidden flex items-center justify-center"
                >
                    <video
                        src={botVideo}
                        controls
                        className="w-full h-auto rounded-2xl shadow-2xl"
                        style={{ maxHeight: '600px' }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                {/* Direct Links */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-6"
                >
                    <div className="bg-[#4fb7b3]/10 border border-[#4fb7b3]/30 p-8 rounded-3xl">
                        <h3 className="text-2xl font-heading font-bold mb-2">Instant Order via Fiverr</h3>
                        <p className="text-gray-300 mb-6">Preferred for secure payments and defined project scopes. Choose a package and start today.</p>
                        <a
                            href={FIVERR_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full bg-[#4fb7b3] text-black px-6 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white transition-colors"
                        >
                            <span>Visit Fiverr Profile</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex-1 flex flex-col justify-center">
                        <h3 className="text-xl font-heading font-bold mb-6">Other Ways to Connect</h3>
                        <div className="space-y-4">
                            <a href="mailto:jidanrock997@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[#a8fbd3]" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest">Email</div>
                                    <div className="font-mono">jidanrock997@gmail.com</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default HireMe;


import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Ticket, Globe, Zap, MessageSquare, Bot, Database, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import GradientText from '../components/GlitchText';
import ServiceCard from '../components/ArtistCard';
import { ServiceItem } from '../types';
import { SERVICES, FIVERR_LINK, PROFILE_IMAGE_URL } from '../constants';

const Home: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

    // Handle keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedService) return;
            if (e.key === 'ArrowLeft') navigateService('prev');
            if (e.key === 'ArrowRight') navigateService('next');
            if (e.key === 'Escape') setSelectedService(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedService]);

    const navigateService = (direction: 'next' | 'prev') => {
        if (!selectedService) return;
        const currentIndex = SERVICES.findIndex(a => a.id === selectedService.id);
        let nextIndex;
        if (direction === 'next') {
            nextIndex = (currentIndex + 1) % SERVICES.length;
        } else {
            nextIndex = (currentIndex - 1 + SERVICES.length) % SERVICES.length;
        }
        setSelectedService(SERVICES[nextIndex]);
    };

    return (
        <>
            {/* HERO SECTION */}
            <header className="relative h-[100svh] min-h-[550px] flex flex-col items-center justify-center overflow-hidden px-4 pt-16 md:pt-0">
                {/* Background Video */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute w-full h-full object-cover"
                    >
                        <source src="/AI_Agent_Showcase_Video_Generated.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <motion.div
                    style={{ y, opacity }}
                    className="z-10 text-center flex flex-col items-center w-full max-w-6xl pb-16 md:pb-20"
                >
                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex items-center gap-2 md:gap-6 text-[10px] sm:text-xs md:text-base font-mono text-[#a8fbd3] tracking-[0.15em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 bg-black/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm border border-white/5"
                    >
                        <span className="whitespace-nowrap">Available 24/7</span>
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#4fb7b3] rounded-full animate-pulse shrink-0" />
                        <span className="whitespace-nowrap">Fast Delivery</span>
                    </motion.div>

                    {/* Main Title */}
                    <div className="relative w-full flex justify-center items-center">
                        <GradientText
                            text="AUTO BOT"
                            as="h1"
                            className="text-[12vw] md:text-[13vw] leading-[0.9] font-black tracking-tighter text-center"
                        />
                        {/* Optimized Orb */}
                        <motion.div
                            className="absolute -z-20 w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] bg-white/5 blur-[40px] md:blur-[60px] rounded-full pointer-events-none will-change-transform"
                            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            style={{ transform: 'translateZ(0)' }}
                        />
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="w-24 md:w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mt-5 md:mt-8 mb-6 md:mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-sm sm:text-lg md:text-2xl font-light max-w-xs sm:max-w-2xl mx-auto text-white/90 leading-relaxed drop-shadow-lg px-2"
                    >
                        I will build a 24 hour AI bot for your business automation.
                    </motion.p>
                </motion.div>
            </header>

            {/* SERVICES SECTION */}
            <section id="services" className="relative z-10 py-20 md:py-32">
                <div className="max-w-[1600px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 px-4">
                        <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase leading-[0.9] drop-shadow-lg break-words w-full md:w-auto">
                            My <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8fbd3] to-[#4fb7b3]">Services</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 bg-black/20 backdrop-blur-sm">
                        {SERVICES.map((service) => (
                            <ServiceCard key={service.id} item={service} onClick={() => setSelectedService(service)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY ME SECTION */}
            <section id="why-me" className="relative z-10 py-20 md:py-32 bg-black/20 backdrop-blur-sm border-t border-white/10 overflow-hidden">
                {/* Decorative blurred circle */}
                <div className="absolute top-1/2 right-[-20%] w-[50vw] h-[50vw] bg-[#4fb7b3]/20 rounded-full blur-[40px] pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }} />

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1">
                            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-6 md:mb-8 leading-tight">
                                Why Choose <br /> <GradientText text="ME?" className="text-5xl md:text-8xl" />
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-12 font-light leading-relaxed drop-shadow-md">
                                Stop losing customers due to delayed replies! I build smart AI Chatbots that work nonstop to engage visitors and automate your sales process.
                            </p>

                            <div className="space-y-6 md:space-y-8">
                                {[
                                    { icon: Bot, title: '24/7 Support', desc: 'Instant replies to common questions while you sleep.' },
                                    { icon: Database, title: 'Lead Collection', desc: 'Collect names, emails, and numbers automatically.' },
                                    { icon: Zap, title: 'Smart Integration', desc: 'Works with Website, WhatsApp, Telegram, or Messenger.' },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-6"
                                    >
                                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5">
                                            <feature.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 font-heading">{feature.title}</h4>
                                            <p className="text-sm text-gray-300">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-6 relative h-[400px] md:h-[600px] w-full order-1 lg:order-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#637ab9] to-[#4fb7b3] rounded-3xl rotate-3 opacity-30 blur-xl" />
                            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                                <img
                                    src={PROFILE_IMAGE_URL}
                                    alt="Adil Ahmmed - AI Expert"
                                    className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 will-change-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                                    <div className="text-5xl md:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 opacity-50">
                                        100%
                                    </div>
                                    <div className="text-lg md:text-xl font-bold tracking-widest uppercase mt-2 text-white">
                                        Response Rate
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple FAQ Mini Section */}
                    <div className="mt-20 pt-10 border-t border-white/10">
                        <h3 className="text-2xl font-heading font-bold mb-8">Frequently Asked Questions</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-[#a8fbd3] mb-2">Which platforms can you integrate with?</h4>
                                <p className="text-gray-300 text-sm">WordPress, Shopify, Facebook Messenger, Instagram, WhatsApp, and Telegram.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#a8fbd3] mb-2">Do I need to pay monthly fees?</h4>
                                <p className="text-gray-300 text-sm">My gig covers development. However, tools like ManyChat or OpenAI API may have their own separate subscription fees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PACKAGES SECTION */}
            <section id="packages" className="relative z-10 py-20 md:py-32 px-4 md:px-6 bg-black/30 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-5xl md:text-9xl font-heading font-bold opacity-20 text-white">
                            PRICING
                        </h2>
                        <p className="text-[#a8fbd3] font-mono uppercase tracking-widest -mt-3 md:-mt-8 relative z-10 text-sm md:text-base">
                            Invest in Automation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'Basic',
                                sub: 'Starter AI Assistant',
                                desc: 'Simple FAQ or Customer Support Chatbot to answer common questions.',
                                delivery: '2 Days Delivery',
                                features: ['Simple flow (5 Q/A)', '1 Platform Setup', 'Welcome Message'],
                                color: 'white',
                                accent: 'bg-white/5'
                            },
                            {
                                name: 'Standard',
                                sub: 'Pro Business Auto',
                                desc: 'Smart AI chatbot with custom flows, lead gen & database connection.',
                                delivery: '4 Days Delivery',
                                features: ['Advanced Logic (15 Q/A)', 'Lead Collection', '2 Platforms', 'OpenAI Integration'],
                                color: 'teal',
                                accent: 'bg-[#4fb7b3]/10 border-[#4fb7b3]/50'
                            },
                            {
                                name: 'Premium',
                                sub: 'Ultimate AI Agent',
                                desc: 'Fully automated AI system tailored for your business.',
                                delivery: '7 Days Delivery',
                                features: ['Unlimited Logic', 'Full API Integration', '30 Days Support', 'Admin Dashboard'],
                                color: 'periwinkle',
                                accent: 'bg-[#637ab9]/10 border-[#637ab9]/50'
                            },
                        ].map((pkg, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -20 }}
                                className={`relative p-8 md:p-10 border border-white/10 backdrop-blur-md flex flex-col min-h-[500px] transition-colors duration-300 ${pkg.accent} will-change-transform`}
                                data-hover="true"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white">{pkg.name}</h3>
                                    <div className={`text-lg font-bold mb-4 tracking-tight ${pkg.color === 'white' ? 'text-gray-400' : pkg.color === 'teal' ? 'text-[#a8fbd3]' : 'text-[#637ab9]'}`}>
                                        {pkg.sub}
                                    </div>
                                    <p className="text-sm text-gray-300 mb-6 italic">{pkg.desc}</p>

                                    <div className="text-xs font-mono mb-6 bg-black/20 p-2 inline-block rounded">{pkg.delivery}</div>

                                    <ul className="space-y-4 md:space-y-6 text-sm text-gray-200">
                                        {pkg.features.map((f, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Check className={`w-4 h-4 mt-1 ${pkg.color === 'teal' ? 'text-[#4fb7b3]' : 'text-gray-400'}`} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href={FIVERR_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-4 text-center text-sm font-bold uppercase tracking-[0.2em] border border-white/20 transition-all duration-300 mt-8 group overflow-hidden relative text-white cursor-pointer hover:bg-white hover:text-black block decoration-0`}
                                >
                                    <span className="relative z-10">Select Package</span>
                                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out -z-0" />
                                </a>
                            </motion.div>
                        )
                        )}
                    </div>
                </div>
            </section>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md cursor-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-[#1a1b3b] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-[#4fb7b3]/10 group/modal"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                                data-hover="true"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Navigation Buttons */}
                            <button
                                onClick={(e) => { e.stopPropagation(); navigateService('prev'); }}
                                className="absolute left-4 bottom-4 translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors border border-white/10 backdrop-blur-sm"
                                data-hover="true"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); navigateService('next'); }}
                                className="absolute right-4 bottom-4 translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors border border-white/10 backdrop-blur-sm md:right-8"
                                data-hover="true"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={selectedService.id}
                                        src={selectedService.image}
                                        alt={selectedService.name}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b3b] via-transparent to-transparent md:bg-gradient-to-r" />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 p-8 pb-24 md:p-12 flex flex-col justify-center relative">
                                <motion.div
                                    key={selectedService.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <div className="flex items-center gap-3 text-[#4fb7b3] mb-4">
                                        <MessageSquare className="w-4 h-4" />
                                        <span className="font-mono text-sm tracking-widest uppercase">{selectedService.tag}</span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase leading-none mb-2 text-white">
                                        {selectedService.name}
                                    </h3>

                                    <p className="text-lg text-[#a8fbd3] font-medium tracking-widest uppercase mb-6">
                                        {selectedService.category}
                                    </p>

                                    <div className="h-px w-20 bg-white/20 mb-6" />

                                    <p className="text-gray-300 leading-relaxed text-lg font-light mb-8">
                                        {selectedService.description}
                                    </p>

                                    <a href={FIVERR_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#a8fbd3] transition-colors w-fit">
                                        Order This Service
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Home;

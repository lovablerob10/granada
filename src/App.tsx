import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Trophy,
    Ticket,
    ShieldCheck,
    ChevronRight,
    Instagram,
    Twitter,
    Facebook,
    Menu,
    X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { History } from './components/History';
import { FavelasChampion } from './components/FavelasChampion';
import { MatchSchedule } from './components/MatchSchedule';
import { SupportSections } from './components/SupportSections';
import { Squad } from './components/Squad';
import { plans, sponsors } from './data/plans';

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    return (
        <div className="min-h-screen bg-granada-black">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                    <div className="flex items-center overflow-visible">
                        <img src="/logo-completo.png" alt="Club Granada" className="h-[55px] sm:h-[75px] w-auto drop-shadow-lg" />
                    </div>
                    <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
                        <a href="#historia" className="hover:text-granada-red transition-colors">História</a>
                        <a href="#planos" className="hover:text-granada-red transition-colors">Planos</a>
                        <a href="#loja" className="hover:text-granada-red transition-colors">Loja</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to="/dashboard" className="btn-premium py-2 px-4 sm:px-6 rounded-none text-xs flex items-center justify-center">Login</Link>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden text-white p-1"
                            aria-label="Abrir menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-5 right-5 text-white"
                            aria-label="Fechar menu"
                        >
                            <X size={28} />
                        </button>
                        <img src="/icone-granada.png" alt="Granada" className="w-16 h-16 mb-4" />
                        {[
                            { label: 'História', href: '#historia' },
                            { label: 'Planos', href: '#planos' },
                            { label: 'Loja', href: '#loja' },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white font-bebas text-4xl tracking-[0.3em] uppercase hover:text-granada-red transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Link
                            to="/dashboard"
                            onClick={() => setMobileMenuOpen(false)}
                            className="btn-premium py-3 px-12 rounded-none text-sm mt-8"
                        >
                            ACESSAR DASHBOARD
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative h-[100dvh] w-screen overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 bg-black overflow-hidden">
                    {isLoaded && (
                        <>
                            {/* Mobile Video */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-80 block md:hidden"
                                src="/Video_explosao_mobile.mp4"
                            />
                            {/* Desktop Video */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-80 hidden md:block"
                                src="/Video_Explosão.mp4"
                            />
                        </>
                    )}
                </div>
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                {/* Content Overlay - Positioned to avoid logo overlap */}
                <div className="relative z-10 h-full flex flex-col justify-end items-center pb-16 sm:pb-24 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="text-center mb-8"
                    >
                        <p className="text-xl sm:text-2xl md:text-5xl max-w-4xl mx-auto font-bebas tracking-[0.1em] sm:tracking-[0.2em] uppercase leading-tight drop-shadow-[0_0_20px_rgba(212,17,17,0.5)] animate-text-shimmer">
                            A emoção de Campinas em sua forma mais explosiva.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3, duration: 0.5 }}
                    >
                        <button className="btn-premium text-sm sm:text-lg px-8 sm:px-16 py-4 sm:py-5 rounded-none animate-shine shadow-[0_0_30px_rgba(212,17,17,0.4)]">
                            Seja Sócio Granada
                        </button>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-granada-dark to-transparent" />
            </section>

            {/* History Section */}
            <History />

            {/* Taça das Favelas Section */}
            <FavelasChampion />

            {/* Match Schedule Section */}
            <MatchSchedule />

            {/* Squad Carousel Section */}
            <Squad />

            {/* Support and Shop Sections */}
            <SupportSections />

            {/* Plans Section */}
            <section id="planos" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-black">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-granada-red/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl mb-4 text-white uppercase">FAÇA PARTE DA <span className="text-granada-red">EXPLOSÃO</span></h2>
                        <p className="text-gray-500 uppercase tracking-widest text-xs sm:text-sm">Planos pensados para os verdadeiros apaixonados pelo Granada.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {plans.map((plan, i) => {
                            const icons = [<Ticket key="t" />, <Trophy key="tr" />, <ShieldCheck key="s" />];
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className={`card-premium p-6 sm:p-8 relative overflow-hidden ${plan.featured ? 'border-granada-red' : ''}`}
                                >
                                    {plan.featured && (
                                        <div className="absolute top-0 right-0 bg-granada-red text-white px-4 py-1 font-bold text-xs uppercase">
                                            RECOMENDADO
                                        </div>
                                    )}
                                    <div className="text-white mb-6 opacity-80">{icons[i]}</div>
                                    <h3 className="text-3xl sm:text-4xl mb-2 text-white">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-8 text-white">
                                        <span className="text-sm">R$</span>
                                        <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
                                        <span className="text-gray-500 text-sm">/mês</span>
                                    </div>
                                    <ul className="space-y-4 mb-10 text-gray-400 text-sm border-t border-white/5 pt-8">
                                        {plan.benefits.map((benefit, j) => (
                                            <li key={j} className="flex gap-2"><ChevronRight size={16} className="text-granada-red flex-shrink-0 mt-0.5" /> {benefit}</li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-4 rounded-none font-bold transition-all ${plan.featured ? 'bg-granada-red text-white' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}>
                                        ASSINAR AGORA
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sponsors Section */}
            <section className="py-12 bg-black border-t border-white/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="flex animate-scroll-x whitespace-nowrap gap-10 sm:gap-20">
                    {[...sponsors, ...sponsors].map((sponsor, i) => (
                        <div
                            key={i}
                            className={`sponsor-item flex-shrink-0 font-bebas text-2xl sm:text-3xl md:text-5xl ${sponsor.red ? 'text-granada-red' : 'text-white'} tracking-[0.1em] sm:tracking-[0.2em] px-4 sm:px-10`}
                        >
                            {sponsor.name}
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-center overflow-hidden relative border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[600px] bg-granada-red/10 rounded-full blur-[150px] pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-8xl mb-6 sm:mb-8 text-white uppercase tracking-tighter">SINTA A EMOÇÃO, <span className="text-granada-red">VIVA A EXPLOSÃO</span></h2>
                    <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-12 uppercase tracking-wide">Junte-se ao Clube Granada e faça história.</p>
                    <button className="btn-premium text-base sm:text-xl px-10 sm:px-16 py-4 sm:py-5 rounded-none">
                        SEJA SÓCIO AGORA
                    </button>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-8 sm:py-12 border-t border-white/10 px-4 sm:px-6 bg-black">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-2xl font-bebas text-white tracking-widest">CLUB GRANADA</span>
                        <p className="text-xs text-gray-600 mt-2 uppercase tracking-tighter">© 2026 Club Granada de Futebol. Tradição e Força.</p>
                    </div>
                    <div className="flex gap-6">
                        <Instagram className="text-gray-500 hover:text-white cursor-pointer" />
                        <Twitter className="text-gray-500 hover:text-white cursor-pointer" />
                        <Facebook className="text-gray-500 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;

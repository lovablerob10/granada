import React, { useState, useEffect } from 'react';
import { Player } from '@remotion/player';
import { HeroVideo } from './remotion/HeroVideo';
import {
    Trophy,
    Ticket,
    ShieldCheck,
    ChevronRight,
    Instagram,
    Twitter,
    Facebook
} from 'lucide-react';
import { motion } from 'framer-motion';
import { History } from './components/History';
import { MatchSchedule } from './components/MatchSchedule';
import { SupportSections } from './components/SupportSections';

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-granada-black">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-granada-black/60 backdrop-blur-lg border-b border-granada-gold/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-granada-red rounded-full flex items-center justify-center border border-granada-gold">
                            <span className="text-white font-bold">G</span>
                        </div>
                        <span className="text-2xl font-bebas text-granada-gold">CLUB GRANADA</span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
                        <a href="#historia" className="hover:text-granada-gold transition-colors">História</a>
                        <a href="#planos" className="hover:text-granada-gold transition-colors">Planos</a>
                        <a href="#loja" className="hover:text-granada-gold transition-colors">Loja</a>
                    </div>
                    <button className="btn-premium py-2 px-6 rounded-full text-xs">Login</button>
                </div>
            </nav>

            {/* Hero Section with Remotion */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {isLoaded && (
                        <Player
                            component={HeroVideo}
                            durationInFrames={150}
                            compositionWidth={1920}
                            compositionHeight={1080}
                            fps={30}
                            loop
                            autoPlay
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    )}
                </div>

                <div className="relative z-10 text-center px-4 mt-40">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="text-6xl md:text-9xl font-bebas text-white drop-shadow-2xl"
                    >
                        PAIXÃO QUE <span className="text-granada-gold">DETONA!</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mt-4 font-light tracking-wide"
                    >
                        Faça parte da elite torcedora e garanta benefícios exclusivos dentro e fora do estádio.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3, duration: 0.5 }}
                        className="mt-10"
                    >
                        <button className="btn-premium text-lg px-12 py-4 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            Quero ser Sócio
                        </button>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-granada-black to-transparent" />
            </section>

            {/* History Section */}
            <History />

            {/* Match Schedule Section */}
            <MatchSchedule />

            {/* Support and Shop Sections */}
            <SupportSections />

            {/* Plans Section */}
            <section id="planos" className="py-24 px-6 bg-granada-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl mb-4">ESCOLHA SEU <span className="text-granada-gold">ESQUADRÃO</span></h2>
                        <p className="text-gray-400">Planos pensados para quem vive o Granada 24h por dia.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'DETONA', price: '29,90', icon: <Ticket /> },
                            { name: 'EXPLOSÃO', price: '59,90', icon: <Trophy />, featured: true },
                            { name: 'LENDÁRIO', price: '149,90', icon: <ShieldCheck /> }
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`card-premium p-8 relative overflow-hidden ${plan.featured ? 'border-granada-gold scale-105 z-10' : ''}`}
                            >
                                {plan.featured && (
                                    <div className="absolute top-0 right-0 bg-granada-gold text-granada-black px-4 py-1 font-bold text-xs">
                                        MAIS POPULAR
                                    </div>
                                )}
                                <div className="text-granada-gold mb-6">{plan.icon}</div>
                                <h3 className="text-4xl mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-sm">R$</span>
                                    <span className="text-5xl font-bold">{plan.price}</span>
                                    <span className="text-gray-500 text-sm">/mês</span>
                                </div>
                                <ul className="space-y-4 mb-10 text-gray-300 text-sm">
                                    <li className="flex gap-2"><ChevronRight size={16} className="text-granada-gold" /> Acesso prioritário a ingressos</li>
                                    <li className="flex gap-2"><ChevronRight size={16} className="text-granada-gold" /> Desconto na loja oficial</li>
                                    <li className="flex gap-2"><ChevronRight size={16} className="text-granada-gold" /> Conteúdo exclusivo no app</li>
                                </ul>
                                <button className={`w-full py-4 rounded-lg font-bold transition-all ${plan.featured ? 'bg-granada-gold text-granada-black' : 'border border-granada-gold text-granada-gold hover:bg-granada-gold hover:text-granada-black'}`}>
                                    ASSINAR AGORA
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsors Section */}
            <section className="py-16 px-6 bg-granada-black border-t border-granada-gold/5">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <div className="font-bebas text-2xl tracking-widest text-white">SPONSOR A</div>
                    <div className="font-bebas text-2xl tracking-widest text-white">PARTNER B</div>
                    <div className="font-bebas text-2xl tracking-widest text-white">LOGO C</div>
                    <div className="font-bebas text-2xl tracking-widest text-white">BRAND D</div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-granada-black to-granada-dark text-center overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-8xl mb-8">O FUTURO É <span className="text-granada-gold">VERMELHO</span></h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">Não perca o próximo capítulo dessa história. O Clube Granada espera por você.</p>
                    <button className="btn-premium text-xl px-16 py-5 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                        SEJA SÓCIO AGORA
                    </button>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-granada-gold/10 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-2xl font-bebas text-granada-gold">CLUB GRANADA</span>
                        <p className="text-xs text-gray-500 mt-2">© 2026 Club Granada de Futebol. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex gap-6">
                        <Instagram className="text-gray-400 hover:text-granada-gold cursor-pointer" />
                        <Twitter className="text-gray-400 hover:text-granada-gold cursor-pointer" />
                        <Facebook className="text-gray-400 hover:text-granada-gold cursor-pointer" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;

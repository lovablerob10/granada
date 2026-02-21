import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SmokeParticle: React.FC = () => {
    const randomX = Math.random() * 200 - 100;
    const randomDuration = 3 + Math.random() * 4;
    const randomDelay = Math.random() * 5;

    return (
        <motion.div
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
            animate={{
                opacity: [0, 0.2, 0],
                y: -500,
                x: randomX,
                scale: [0.5, 3, 4],
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeOut"
            }}
            className="absolute rounded-full bg-white/5 blur-3xl"
            style={{
                width: 150 + Math.random() * 150,
                height: 150 + Math.random() * 150,
                left: '50%',
                top: '100%',
                pointerEvents: 'none'
            }}
        />
    );
};

export const FavelasChampion: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-24">
            {/* Background Image with Parallax & Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000"
                        alt="Stadium Atmosphere"
                        className="w-full h-[120%] object-cover opacity-60 grayscale"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
                <div className="absolute inset-0 bg-granada-red/10 mix-blend-overlay z-10" />
            </div>

            {/* Ambient Smoke */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <SmokeParticle key={i} />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-granada-red font-bebas text-2xl sm:text-4xl md:text-6xl tracking-[0.15em] sm:tracking-[0.3em] mb-4">
                        BICAMPEÃO 2024 • 2025
                    </h2>
                    <h1 className="text-white font-bebas text-5xl sm:text-7xl md:text-9xl tracking-tighter leading-none mb-8 sm:mb-12">
                        TAÇA DAS <span className="text-granada-red">FAVELAS</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-10 text-left relative overflow-hidden group hover:border-granada-red/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,17,17,0.2)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="font-bebas text-5xl sm:text-8xl text-white">2024</span>
                        </div>
                        <h4 className="text-granada-red font-bold mb-2 uppercase tracking-widest">O Primeiro Passo</h4>
                        <h3 className="text-3xl text-white font-bold mb-4 uppercase">GLÓRIA NO BRINCO</h3>
                        <p className="text-gray-400 uppercase text-sm leading-relaxed">
                            Vila Bela & Granada conquistam o título inédito ao bater o São Cristóvão por 1 a 0 no estádio do Guarani. A favela em festa.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-granada-red p-10 border border-white/10 text-left relative overflow-hidden group hover:bg-granada-red/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,17,17,0.3)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="font-bebas text-5xl sm:text-8xl text-black">2025</span>
                        </div>
                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest">A Consolidação</h4>
                        <h3 className="text-3xl text-white font-bold mb-4 uppercase">BICAMPEÃO DO POVO</h3>
                        <p className="text-white/80 uppercase text-sm leading-relaxed font-medium">
                            A parceria de ouro se repete. Vitória heróica contra o Padre Anchieta por 3 a 2. O interior paulista é vermelho e preto.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20"
                >
                    <p className="text-gray-500 font-bebas text-lg sm:text-2xl tracking-[0.3em] sm:tracking-[0.5em] uppercase">Vila Bela & Granada FC Campinas</p>
                </motion.div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-granada-red shadow-[0_0_50px_#d41111] z-40" />
        </section>
    );
};

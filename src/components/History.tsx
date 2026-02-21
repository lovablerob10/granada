import React from 'react';
import { motion } from 'framer-motion';
import { historyEvents } from '../data/history';

const SmokeParticle: React.FC = () => {
    const randomX = Math.random() * 200 - 100;
    const randomDuration = 2 + Math.random() * 3;
    const randomDelay = Math.random() * 5;

    return (
        <motion.div
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
            animate={{
                opacity: [0, 0.3, 0],
                y: -400,
                x: randomX,
                scale: [0.5, 2, 3],
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeOut"
            }}
            className="absolute rounded-full bg-white/10 blur-2xl"
            style={{
                width: 100 + Math.random() * 100,
                height: 100 + Math.random() * 100,
                left: '50%',
                top: '100%',
                pointerEvents: 'none'
            }}
        />
    );
};

export const History: React.FC = () => {
    const events = historyEvents;

    return (
        <section id="historia" className="py-32 bg-black px-6 relative overflow-hidden">
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-granada-gold/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-granada-red/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
            {/* Ambient Smoke Effect */}
            <div className="absolute inset-x-0 bottom-0 h-[600px] pointer-events-none opacity-40">
                {Array.from({ length: 15 }).map((_, i) => (
                    <SmokeParticle key={i} />
                ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl mb-4 text-white uppercase"
                    >
                        A EXPLOSÃO DE <span className="text-granada-red">CAMPINAS</span>
                    </motion.h2>
                    <p className="text-gray-500 uppercase tracking-widest text-sm">A história do clube que incendiou o interior paulista.</p>
                </div>

                <div className="space-y-40 relative">
                    {/* Central Vertical Line with Glow */}
                    <div className="absolute left-1/2 -ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-granada-red via-granada-red/20 to-transparent" />

                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`flex items-center w-full ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
                        >
                            {/* Content Side */}
                            <div className="w-1/2 px-12 text-right">
                                <div className={i % 2 === 0 ? 'text-left' : 'text-right'}>
                                    <span className="text-granada-red font-bebas text-5xl md:text-6xl tracking-tighter mb-2 block">
                                        {event.year}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg uppercase tracking-wide leading-relaxed max-w-md ml-auto mr-0">
                                        {i % 2 === 0 ? (
                                            <span style={{ marginLeft: 0 }}>{event.description}</span>
                                        ) : (
                                            <span>{event.description}</span>
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Node Side */}
                            <div className="relative z-10 flex items-center justify-center">
                                <motion.div
                                    whileInView={{
                                        scale: [1, 1.5, 1],
                                        boxShadow: ["0 0 0px #d41111", "0 0 40px #d41111", "0 0 10px #d41111"]
                                    }}
                                    viewport={{ once: true }}
                                    className="w-6 h-6 bg-granada-red rounded-none rotate-45 border-2 border-white"
                                />
                            </div>

                            {/* Spacer Side */}
                            <div className="w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    );
};

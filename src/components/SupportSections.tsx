import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';

const SmokeParticle: React.FC = () => {
    const randomX = Math.random() * 200 - 100;
    const randomDuration = 3 + Math.random() * 4;
    const randomDelay = Math.random() * 5;

    return (
        <motion.div
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
            animate={{
                opacity: [0, 0.2, 0],
                y: -600,
                x: randomX,
                scale: [1, 2, 4],
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear"
            }}
            className="absolute rounded-full bg-granada-red/10 blur-3xl"
            style={{
                width: 200 + Math.random() * 200,
                height: 200 + Math.random() * 200,
                left: '50%',
                top: '100%',
                pointerEvents: 'none'
            }}
        />
    );
};

export const SupportSections: React.FC = () => {
    return (
        <section className="bg-black relative overflow-hidden">
            {/* Red Smoke Background */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                    <SmokeParticle key={i} />
                ))}
            </div>
            {/* Fan Highlights */}
            <div className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl md:text-7xl mb-4 text-white">VOZ DA <span className="text-granada-red">ARQUIBANCADA</span></h2>
                            <p className="text-gray-500 uppercase tracking-widest text-sm">Onde o coração do clube bate mais forte.</p>
                        </div>
                        <button className="btn-premium px-10 py-4 text-sm rounded-none">Enviar meu vídeo</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: 'photo-1517457373958-b7bdd4587205', title: 'A FESTA' },
                            { id: 'photo-1551958219-acbc608c6377', title: 'O TEMPLO' },
                            { id: 'photo-1543326727-cf6c39e8f84c', title: 'UNIÃO' },
                            { id: 'photo-1574629810360-7efbbe195018', title: 'LIGAÇÃO' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="aspect-[3/4] glass-panel relative group overflow-hidden border border-white/10 hover:border-granada-red/50 hover:shadow-[0_0_30px_rgba(212,17,17,0.2)] transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-granada-red/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                                <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <h3 className="text-2xl font-bebas text-white tracking-widest">{item.title}</h3>
                                    <div className="flex items-center gap-2 text-white/70 text-xs mt-2">
                                        <Heart className="w-3 h-3 fill-white" />
                                        <span>CAMPINAS EXPLODE</span>
                                    </div>
                                </div>
                                <img
                                    src={`https://images.unsplash.com/${item.id}?auto=format&fit=crop&q=80&w=800`}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Store Highlights */}
            <div id="loja" className="py-24 px-6 bg-white/5 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-8xl text-white">MANTO <span className="text-granada-red">SAGRADO</span></h2>
                        <p className="text-gray-500 uppercase tracking-widest mt-4">Veste a tua história.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: 'CAMISA I - MANTO FRENTE', price: '299,90', img: '/manto-frente.png' },
                            { name: 'CAMISA I - MANTO VERSO', price: '299,90', img: '/manto-verso.png' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative glass-panel overflow-hidden transition-all duration-500 hover:border-granada-red/50 hover:shadow-[0_10px_30px_rgba(212,17,17,0.1)] hover:-translate-y-2"
                            >
                                <div className="aspect-square overflow-hidden bg-[#f3f3f3]">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                    />
                                </div>
                                <div className="p-8 flex justify-between items-center bg-black/80 backdrop-blur-sm relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-bebas text-white tracking-widest mb-1">{item.name}</h3>
                                        <p className="text-granada-red font-bold">R$ {item.price}</p>
                                    </div>
                                    <button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-granada-red hover:border-granada-red text-white transition-all duration-300 shadow-[0_0_15px_rgba(212,17,17,0)] hover:shadow-[0_0_15px_rgba(212,17,17,0.5)]">
                                        <ShoppingBag size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

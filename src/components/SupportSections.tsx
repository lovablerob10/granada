import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Play } from 'lucide-react';

export const SupportSections: React.FC = () => {
    return (
        <>
            {/* Torcida Section */}
            <section className="py-24 px-6 bg-granada-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-7xl mb-16 text-right">A MAIOR <span className="text-granada-gold">DO MUNDO</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-video rounded-2xl overflow-hidden border border-granada-gold/20 group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-granada-red/20 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-granada-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="text-granada-black fill-current translate-x-0.5" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-2xl font-bebas tracking-wide">O GRITO DA ARQUIBANCADA</p>
                                <p className="text-xs text-granada-gold">Documentário Centenário</p>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            {[1, 2].map((i) => (
                                <div key={i} className="card-premium p-6 flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-granada-dark shrink-0" />
                                    <div>
                                        <div className="flex text-granada-gold mb-2"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                                        <p className="text-sm italic text-gray-400">"Ser Granada é um sentimento que não se explica. O plano Detona facilitou muito minha vida no estádio!"</p>
                                        <p className="mt-2 text-xs font-bold">— Torcedor Fiel {i}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Loja Section */}
            <section id="loja" className="py-24 px-6 bg-granada-dark/20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-5xl md:text-7xl">LOJA <span className="text-granada-gold">OFICIAL</span></h2>
                            <p className="text-gray-400">O manto sagrado com 20% OFF para sócios.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-granada-gold font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                            Ver Coleção Completa <ShoppingBag size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'CAMISA I 26/27', price: '299,90' },
                            { name: 'CAMISA II 26/27', price: '299,90' },
                            { name: 'JAQUETA TREINO', price: '349,90' },
                            { name: 'BONÉ CLASSIC', price: '89,90' },
                        ].map((item, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="group">
                                <div className="aspect-[4/5] bg-granada-black rounded-xl border border-granada-gold/10 overflow-hidden relative mb-4">
                                    <div className="absolute inset-0 bg-granada-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 font-bebas text-4xl transform -rotate-12">GRANADA</div>
                                </div>
                                <h4 className="text-sm font-bold tracking-wide">{item.name}</h4>
                                <p className="text-granada-gold font-bold">R$ {item.price}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

import React from 'react';
import { motion } from 'framer-motion';

const historyData = [
    { year: '1924', title: 'A Fundação', description: 'O Club Granada surge no coração do bairro operário, fundado por mineiros apaixonados.' },
    { year: '1950', title: 'O Estádio Granada', description: 'Inauguração do nosso caldeirão, palco de glórias inesquecíveis.' },
    { year: '1995', title: 'A Era de Ouro', description: 'Conquista do tricampeonato nacional e reconhecimento continental.' },
    { year: '2024', title: 'Centenário', description: '100 anos de uma paixão que explode em cada jogo.' },
];

export const History: React.FC = () => {
    return (
        <section id="historia" className="py-24 bg-granada-black/50 border-y border-granada-gold/5">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl mb-20 text-center">NOSSA <span className="text-granada-gold">HISTÓRIA</span></h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-granada-gold/20" />

                    <div className="space-y-24">
                        {historyData.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex items-center justify-between w-full ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className={`w-[45%] ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <span className="text-4xl md:text-6xl font-bebas text-granada-gold block mb-2">{item.year}</span>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-granada-gold shadow-[0_0_10px_#d4af37]" />

                                <div className="w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

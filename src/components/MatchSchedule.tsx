import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const matches = [
    { opponent: 'Dragões FC', date: '22 FEV', time: '21:30', location: 'Estádio Granada', type: 'COPA' },
    { opponent: 'Santarém', date: '01 MAR', time: '16:00', location: 'Arena Sul', type: 'LIGA' },
    { opponent: 'Titãs', date: '08 MAR', time: '19:00', location: 'Estádio Granada', type: 'LIGA' },
];

export const MatchSchedule: React.FC = () => {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl mb-16">PRÓXIMOS <span className="text-granada-gold">COMBATES</span></h2>

                <div className="flex flex-col md:flex-row gap-6">
                    {matches.map((match, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="flex-1 card-premium p-1 border-granada-gold/10"
                        >
                            <div className="bg-granada-black p-6 rounded-lg">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-3 py-1 bg-granada-dark text-[10px] font-bold tracking-tighter rounded border border-granada-gold/30">
                                        {match.type}
                                    </span>
                                    <div className="text-right">
                                        <p className="text-granada-gold font-bold">{match.date}</p>
                                        <p className="text-xs text-gray-400">{match.time}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 font-bebas text-xl">VS</div>
                                    <h3 className="text-2xl font-bebas tracking-wide">{match.opponent}</h3>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <MapPin size={14} />
                                    <span>{match.location}</span>
                                </div>

                                <button className="w-full mt-6 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-widest transition-colors rounded">
                                    Comprar Ingressos
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

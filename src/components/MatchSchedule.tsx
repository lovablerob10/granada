import React from 'react';
import { MapPin, Calendar, Trophy, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { upcomingMatches } from '../data/matches';

export const MatchSchedule: React.FC = () => {
    const matches = upcomingMatches;

    return (
        <section className="py-24 bg-granada-black border-t border-white/5 px-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-granada-gold/5 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <p className="text-granada-red uppercase tracking-[0.3em] text-xs font-bold mb-2">Próximos Confrontos</p>
                        <h2 className="text-4xl md:text-6xl text-white uppercase">OS PRÓXIMOS <span className="underline decoration-granada-red underline-offset-8">DESAFIOS</span></h2>
                    </div>
                    <button className="text-white hover:text-granada-red transition-colors flex items-center gap-2 uppercase tracking-widest text-xs font-bold">
                        Ver Agenda Completa <ChevronRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {matches.map((match, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="glass-panel p-8 relative group overflow-hidden transition-all duration-500 hover:border-granada-red/50 hover:shadow-[0_10px_30px_rgba(212,17,17,0.1)]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Trophy size={40} className="text-white" />
                            </div>
                            <p className="text-gray-500 uppercase tracking-widest mt-4">Veste o orgulho de Campinas.</p>
                            <h3 className="text-2xl font-bebas text-white mb-6 uppercase tracking-wider">{match.opponent}</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <Calendar size={14} className="text-granada-red" />
                                    <span>{match.date}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                    <MapPin size={14} className="text-granada-red" />
                                    <span>{match.venue}</span>
                                </div>
                            </div>
                            <button className="mt-8 w-full py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all font-bold text-xs uppercase tracking-widest">
                                Comprar Ingresso
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

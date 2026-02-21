import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Ticket, ChevronRight, Filter } from 'lucide-react';

const matches = [
    { id: 1, opponent: 'Ponte Preta', date: '15 Out', time: '15:00', stadium: 'Brinco de Ouro', comp: 'Série Ouro Amador', type: 'Derby' },
    { id: 2, opponent: 'Guarani', date: '22 Out', time: '10:00', stadium: 'Moisés Lucarelli', comp: 'Série Ouro Amador', type: 'Oficial' },
    { id: 3, opponent: 'Vila Bela', date: '29 Out', time: '16:00', stadium: 'Arena Granada', comp: 'Amistoso Luxo', type: 'Tradicional' },
    { id: 4, opponent: 'São Cristóvão', date: '05 Nov', time: '15:30', stadium: 'Brinco de Ouro', comp: 'Taça das Favelas', type: 'Decisivo' },
];

export const Agenda: React.FC = () => {
    return (
        <DashboardLayout title="Agenda de Jogos">
            {/* Featured Match */}
            <div className="mb-12">
                <div className="bg-white/5 border border-white/10 p-1">
                    <div className="relative aspect-[21/9] md:aspect-[21/5] bg-black overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-granada-red/40 to-transparent z-10" />
                        <div className="relative z-20 flex flex-col md:flex-row items-center gap-12 px-12 w-full justify-between">
                            <div className="text-center md:text-left">
                                <span className="bg-granada-red text-white px-3 py-1 font-bold text-[10px] uppercase tracking-widest mb-4 inline-block">PRÓXIMO CONFRONTO</span>
                                <h2 className="text-5xl md:text-7xl font-bebas text-white tracking-[0.1em] leading-none mb-2">
                                    GRANADA <span className="text-gray-600">VS</span> {matches[0].opponent}
                                </h2>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider">
                                    <span className="flex items-center gap-2"><CalendarIcon size={14} className="text-granada-red" /> {matches[0].date} • {matches[0].time}</span>
                                    <span className="flex items-center gap-2"><MapPin size={14} className="text-granada-red" /> {matches[0].stadium}</span>
                                </div>
                            </div>
                            <button className="btn-premium px-12 py-4 flex items-center gap-2 whitespace-nowrap">
                                <Ticket size={18} /> GARANTIR LUGAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                <div className="flex gap-4">
                    {['Todos', 'Série Ouro', 'Taça das Favelas', 'Amistosos'].map(f => (
                        <button key={f} className="text-[10px] text-gray-500 hover:text-white font-bold uppercase tracking-widest transition-colors py-2 border-b-2 border-transparent hover:border-granada-red">
                            {f}
                        </button>
                    ))}
                </div>
                <button className="flex items-center gap-2 text-[10px] text-white font-bold uppercase tracking-widest bg-white/5 px-4 py-2 border border-white/10">
                    <Filter size={14} /> FILTRAR DATA
                </button>
            </div>

            {/* Match List */}
            <div className="grid grid-cols-1 gap-4">
                {matches.map((match, i) => (
                    <motion.div
                        key={match.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/20 transition-all cursor-default"
                    >
                        <div className="flex items-center gap-8 flex-1">
                            <div className="text-center min-w-[80px] border-r border-white/10 pr-8">
                                <p className="text-3xl font-bebas text-white leading-none">{match.date.split(' ')[0]}</p>
                                <p className="text-[10px] text-granada-red font-bold uppercase">{match.date.split(' ')[1]}</p>
                            </div>
                            <div>
                                <h4 className="text-xl text-white font-bebas tracking-widest flex items-center gap-3 italic">
                                    GRANADA FC <span className="text-xs text-gray-600 not-italic">X</span> {match.opponent}
                                </h4>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">{match.comp} • {match.stadium}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-[10px] text-gray-600 font-bold uppercase px-3 py-1 border border-white/10">{match.type}</span>
                            <div className="h-10 w-px bg-white/5" />
                            <button className="text-white hover:text-granada-red transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 duration-300">
                                COMPRAR <ChevronRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </DashboardLayout>
    );
};

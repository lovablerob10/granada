import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Plus, Edit2, Ticket } from 'lucide-react';

const matches = [
    { id: 1, opponent: 'Ponte Preta', date: '15 Out 2024', stadium: 'Brinco de Ouro', tickets: '1.200/1.200', status: 'Esgotado' },
    { id: 2, opponent: 'Guarani', date: '22 Out 2024', stadium: 'Moisés Lucarelli', tickets: '450/1.000', status: 'Vendas Abertas' },
    { id: 3, opponent: 'Vila Bela', date: '29 Out 2024', stadium: 'Arena Granada', tickets: '0/800', status: 'Em Breve' },
];

export const Matches: React.FC = () => {
    return (
        <DashboardLayout title="Gestão de Confrontos">
            <div className="flex justify-between items-center mb-12">
                <div className="flex gap-8">
                    <div>
                        <p className="text-3xl font-bebas text-white tracking-widest">03</p>
                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">JOGOS AGENDADOS</p>
                    </div>
                </div>
                <button className="btn-premium px-8 py-4 flex items-center gap-2">
                    <Plus size={18} /> AGENDAR NOVO JOGO
                </button>
            </div>

            <div className="space-y-6">
                {matches.map((m, i) => (
                    <motion.div
                        key={m.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-white/30 transition-all"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-10 flex-1">
                            <div className="text-center md:text-left min-w-[120px]">
                                <Calendar className="text-granada-red mb-2 mx-auto md:mx-0" size={24} />
                                <p className="text-white font-bold uppercase text-[10px] tracking-widest">{m.date}</p>
                            </div>

                            <div className="flex-1">
                                <h4 className="text-2xl text-white font-bebas tracking-widest mb-1 group-hover:text-granada-red transition-colors">GRANADA FC vs {m.opponent}</h4>
                                <p className="text-xs text-gray-500 uppercase flex items-center gap-2 tracking-tighter">
                                    <MapPin size={12} /> {m.stadium}
                                </p>
                            </div>

                            <div className="text-center md:text-left">
                                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1 italic">Ingressos Vendidos</p>
                                <div className="flex items-center gap-4">
                                    <p className="text-xl text-white font-bebas tracking-widest">{m.tickets}</p>
                                    <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-granada-red" style={{ width: m.id === 1 ? '100%' : '45%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <span className={`text-[10px] font-bold uppercase px-4 py-2 border ${m.status === 'Esgotado' ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500'}`}>
                                {m.status}
                            </span>
                            <div className="flex gap-2">
                                <button className="p-3 bg-white/5 text-white hover:bg-white/10 transition-all border border-white/5">
                                    <Edit2 size={16} />
                                </button>
                                <button className="p-3 bg-white/5 text-white hover:bg-white/10 transition-all border border-white/5">
                                    <Ticket size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 p-12 bg-gradient-to-b from-white/5 to-transparent border border-white/5 text-center">
                <Users className="text-gray-700 mx-auto mb-6" size={48} />
                <h5 className="text-white font-bebas text-3xl tracking-widest mb-4">CONFIGURAÇÃO DE SETORES</h5>
                <p className="text-xs text-gray-500 uppercase max-w-lg mx-auto mb-8">Gerencie a carga de ingressos por setor (Arquibancada, Cadeira, VIP) e defina a prioridade de compra por nível de sócio.</p>
                <button className="text-[10px] text-white font-bold uppercase underline tracking-widest hover:text-granada-red">EDITAR MAPA DO ESTÁDIO</button>
            </div>
        </DashboardLayout>
    );
};

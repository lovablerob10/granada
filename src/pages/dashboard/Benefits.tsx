import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { Gift, Zap, Star, ShieldCheck, Copy, ExternalLink, Users } from 'lucide-react';

const benefits = [
    { id: 1, title: '30% OFF na Loja Oficial', code: 'EXPLOSAO30', category: 'Ecommerce', icon: Gift, color: 'granada-red' },
    { id: 2, title: 'Check-in Prioritário', code: 'RANK: LENDÁRIO', category: 'Estádio', icon: Zap, color: 'granada-gold' },
    { id: 3, title: 'Evento: Churrasco da Diretoria', code: 'DATA: 20/11', category: 'Exclusivo', icon: Users, color: 'white' },
    { id: 4, title: 'Desconto Academia Force', code: 'PARCEIRO: AFC20', category: 'Saúde', icon: ShieldCheck, color: 'gray-500' },
];

export const Benefits: React.FC = () => {
    return (
        <DashboardLayout title="Meus Benefícios">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-granada-red to-black p-10 relative overflow-hidden group">
                    <Star className="absolute right-[-20px] top-[-20px] w-48 h-48 opacity-10 text-white" />
                    <div className="relative z-10">
                        <span className="text-white/60 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">LEVEL: LENDÁRIO</span>
                        <h2 className="text-5xl font-bebas text-white tracking-widest mb-4">VOCÊ TEM TODOS OS ACESSOS</h2>
                        <p className="text-white/80 text-xs uppercase tracking-tight max-w-sm mb-8">
                            Seu plano atual desbloqueia 100% dos benefícios disponíveis, incluindo eventos VIP e prioridade máxima na compra de ingressos.
                        </p>
                        <button className="bg-white text-black font-bold py-3 px-8 text-xs uppercase hover:bg-black hover:text-white transition-all">VER GUIA DO SÓCIO</button>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 flex flex-col justify-center gap-6">
                    <h4 className="text-white font-bebas text-3xl tracking-widest border-l-4 border-granada-gold pl-6">MEUS PONTOS</h4>
                    <div className="flex items-center gap-12">
                        <div>
                            <p className="text-5xl font-bebas text-white tracking-widest">12.450</p>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">PONTOS ACUMULADOS</p>
                        </div>
                        <div className="h-12 w-px bg-white/10" />
                        <div>
                            <p className="text-lg text-granada-gold font-bold uppercase tracking-tighter">PRÓXIMO RESGATE</p>
                            <p className="text-xs text-white">Camisa Retrô Autografada (15.000 pts)</p>
                        </div>
                    </div>
                    <div className="h-2 bg-white/5 w-full mt-4">
                        <div className="h-full bg-granada-gold" style={{ width: '83%' }} />
                    </div>
                </div>
            </div>

            <h3 className="text-white font-bebas text-3xl tracking-widest mb-8 uppercase">Cupons e Parcerias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, i) => (
                    <motion.div
                        key={benefit.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 border border-white/10 p-8 group hover:border-white/30 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className={`text-${benefit.color} mb-6`}>
                                <benefit.icon size={32} />
                            </div>
                            <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2 block">{benefit.category}</span>
                            <h5 className="text-white font-bold uppercase text-sm mb-4 leading-snug">{benefit.title}</h5>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-[10px] text-gray-500 uppercase mb-3">Seu código unico:</p>
                            <div className="flex bg-black border border-white/10 px-4 py-3 justify-between items-center group-hover:border-granada-red transition-all cursor-pointer">
                                <span className="font-mono text-white text-xs">{benefit.code}</span>
                                <Copy size={14} className="text-gray-600 group-hover:text-granada-red" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 bg-white/5 border border-white/10 p-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <ExternalLink size={24} className="text-granada-red" />
                    <p className="text-xs text-white uppercase font-bold tracking-widest">Acesse o portal completo de parcerias externas</p>
                </div>
                <button className="text-[10px] text-white underline font-bold uppercase tracking-widest hover:text-granada-red">CLIQUE AQUI</button>
            </div>
        </DashboardLayout>
    );
};

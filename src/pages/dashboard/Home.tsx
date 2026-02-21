import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { TrendingUp, Ticket, ShoppingBag, Zap } from 'lucide-react';
import { recentActivity } from '../../data/admin';

const StatCard: React.FC<{
    title: string;
    value: string;
    subtext: string;
    icon: any;
    color: string;
    delay?: number;
}> = ({ title, value, subtext, icon: Icon, color, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="glass-panel p-5 sm:p-8 relative overflow-hidden group hover:border-granada-red/50 hover:shadow-[0_10px_30px_rgba(212,17,17,0.15)] transition-all duration-500 hover:-translate-y-1"
    >
        <div className={`absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-${color}`}>
            <Icon size={80} />
        </div>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">{title}</p>
        <h3 className="text-2xl sm:text-4xl font-bebas text-white tracking-widest mb-2">{value}</h3>
        <p className="text-xs text-gray-400 uppercase tracking-tighter">{subtext}</p>
        <div className={`absolute bottom-0 left-0 h-1 w-0 bg-${color} group-hover:w-full transition-all duration-700`} />
    </motion.div>
);

export const DashboardHome: React.FC = () => {
    return (
        <DashboardLayout title="Início">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <StatCard
                    title="Próximo Desafio"
                    value="GRANADA VS PONTE"
                    subtext="15 Out • 15:00 • Brinco de Ouro"
                    icon={Ticket}
                    color="granada-red"
                    delay={0.1}
                />
                <StatCard
                    title="Plano Atual"
                    value="LENDÁRIO"
                    subtext="Vencimento: 12/2026"
                    icon={Zap}
                    color="granada-gold"
                    delay={0.2}
                />
                <StatCard
                    title="Pontos Acumulados"
                    value="12.450 PTS"
                    subtext="+850 pts este mês"
                    icon={TrendingUp}
                    color="white"
                    delay={0.3}
                />
                <StatCard
                    title="Último Pedido"
                    value="MANTO 2024"
                    subtext="Em trânsito • Ver detalhes"
                    icon={ShoppingBag}
                    color="gray-500"
                    delay={0.4}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                {/* Ticketing Focus */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-gradient-to-r from-granada-red to-black p-1 bg-opacity-50">
                        <div className="bg-black p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <span className="text-granada-red font-bold text-xs uppercase tracking-[0.4em] mb-4 block">INGRESSOS DISPONÍVEIS</span>
                                <h2 className="text-4xl text-white font-bebas tracking-widest mb-4 leading-none">
                                    GARANTA SEU LUGAR NO <span className="text-granada-red">DERBY AMADOR</span>
                                </h2>
                                <p className="text-gray-400 text-sm uppercase max-w-md">
                                    Sócios Lendários têm 100% de desconto e prioridade 1 na reserva. Aberto agora.
                                </p>
                            </div>
                            <button className="btn-premium whitespace-nowrap px-10">RESERVAR AGORA</button>
                        </div>
                    </div>

                    {/* Feedback/News section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8">
                            <h4 className="text-white font-bold uppercase text-sm mb-6 border-l-2 border-granada-red pl-4">Conteúdo Exclusivo</h4>
                            <div className="aspect-video bg-gray-900 border border-white/10 mb-4 flex items-center justify-center">
                                <span className="text-gray-700 font-bebas text-2xl uppercase">Bastidores: Final Série Ouro</span>
                            </div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Disponível apenas para sócios ativos.</p>
                        </div>
                        <div className="glass-panel p-8">
                            <h4 className="text-white font-bold uppercase text-sm mb-6 border-l-2 border-granada-red pl-4">Benefício do Mês</h4>
                            <div className="bg-granada-gold/10 border border-granada-gold/20 p-6 text-center">
                                <h5 className="text-granada-gold font-bebas text-3xl mb-2">30% OFF NA LOJA</h5>
                                <p className="text-[10px] text-white uppercase tracking-widest mb-4">Código: EXPLOSAO30</p>
                                <button className="text-[10px] text-granada-gold border border-granada-gold px-4 py-2 hover:bg-granada-gold hover:text-black transition-all">COPIAR CÓDIGO</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Feed */}
                <div className="space-y-8">
                    <div className="glass-panel p-8">
                        <h4 className="text-white font-bold uppercase text-sm mb-8">Últimas Atividades</h4>
                        <div className="space-y-6">
                            {recentActivity.map((act, i) => (
                                <div key={i} className="flex gap-4 items-start border-l border-white/10 pl-6 relative">
                                    <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-granada-red" />
                                    <div>
                                        <p className="text-white text-xs font-bold uppercase tracking-tight">{act.title}</p>
                                        <p className="text-[10px] text-gray-500 uppercase">{act.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-granada-red p-8">
                        <h4 className="text-white font-bebas text-3xl mb-2">PRECISA DE AJUDA?</h4>
                        <p className="text-black font-bold text-xs uppercase mb-6 tracking-tighter">Fale direto com a nossa diretoria via WhatsApp.</p>
                        <button className="w-full bg-black text-white py-3 font-bold uppercase text-xs hover:bg-white hover:text-black transition-all">ABRIR CHAT</button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

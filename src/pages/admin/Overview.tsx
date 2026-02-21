import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { Users, ShoppingCart, DollarSign, Package, ExternalLink, MoreVertical } from 'lucide-react';
import { recentOrders, planDistribution, adminStats } from '../../data/admin';

const AdminStat: React.FC<{ title: string; value: string; growth: string; icon: any }> = ({ title, value, growth, icon: Icon }) => (
    <div className="glass-panel p-6 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-granada-red/10 rounded-none border border-granada-red/20 text-granada-red">
                <Icon size={20} />
            </div>
            <span className="text-green-500 text-[10px] font-bold">+{growth}%</span>
        </div>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{title}</p>
        <h3 className="text-3xl font-bebas text-white tracking-widest mt-1">{value}</h3>
    </div>
);

const adminIcons = [Users, ShoppingCart, DollarSign, Package];

export const AdminOverview: React.FC = () => {
    return (
        <DashboardLayout title="Painel Administrativo">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {adminStats.map((stat, i) => (
                    <AdminStat key={i} title={stat.title} value={stat.value} growth={stat.growth} icon={adminIcons[i]} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="glass-panel p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h4 className="text-white font-bold uppercase text-sm border-l-2 border-granada-red pl-4">Últimos Pedidos</h4>
                        <button className="text-[10px] text-gray-500 hover:text-white uppercase tracking-widest">Ver Todos</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-gray-400">
                            <thead>
                                <tr className="border-b border-white/5 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                                    <th className="pb-4">ID</th>
                                    <th className="pb-4">Cliente</th>
                                    <th className="pb-4">Valor</th>
                                    <th className="pb-4">Status</th>
                                    <th className="pb-4">Ação</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentOrders.map((row, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                                        <td className="py-4 font-mono text-white/50">{row.id}</td>
                                        <td className="py-4 text-white font-medium">{row.client}</td>
                                        <td className="py-4 font-bebas text-lg tracking-widest">{row.value}</td>
                                        <td className="py-4">
                                            <span className={`px-2 py-1 rounded-none border border-${row.statusColor}/20 text-${row.statusColor} text-[8px] font-bold uppercase tracking-widest bg-${row.statusColor}/5`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-gray-600 hover:text-white cursor-pointer px-2">
                                            <MoreVertical size={16} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="glass-panel p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h4 className="text-white font-bold uppercase text-sm border-l-2 border-granada-gold pl-4">Distribuição de Planos</h4>
                    </div>
                    {/* Mock Graph Placeholder */}
                    <div className="space-y-6">
                        {planDistribution.map((plano, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-white font-bold uppercase tracking-widest">{plano.name}</span>
                                    <span className="text-gray-500">{plano.count} usuários</span>
                                </div>
                                <div className="h-2 bg-white/5 border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${plano.percent}%` }}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                                        className={`h-full bg-${plano.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 p-6 bg-granada-gold/5 border border-granada-gold/10 text-center">
                        <p className="text-[10px] text-granada-gold font-bold uppercase tracking-[0.2em] mb-2">Meta Financeira Mensal</p>
                        <h5 className="text-4xl text-white font-bebas tracking-widest">R$ 150.000 / <span className="text-granada-gold">R$ 200.000</span></h5>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-white/5">
                        <Package className="text-granada-red" size={32} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider">Gestão de Produtos</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-tighter">12 produtos ativos • 3 reposições pendentes</p>
                    </div>
                </div>
                <button className="btn-premium px-10 flex items-center gap-2">
                    ACESSAR CRUD <ExternalLink size={14} />
                </button>
            </div>
        </DashboardLayout>
    );
};

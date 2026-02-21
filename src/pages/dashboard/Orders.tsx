import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { ShoppingBag, Ticket, Download, ChevronRight, Eye } from 'lucide-react';

const storeOrders = [
    { id: '#8420', date: '12 Ago 2024', item: 'Manto Oficial I - 2024', status: 'Enviado', total: 'R$ 199,90' },
    { id: '#8315', date: '01 Jul 2024', item: 'Boné Granada Gold', status: 'Entregue', total: 'R$ 69,90' },
];

const matchTickets = [
    { id: 'TK-154', match: 'Granada vs Ponte Preta', date: '15 Out 2024', seat: 'Arquibancada Oeste', status: 'Ativo' },
    { id: 'TK-122', match: 'Granada vs Vila Bela', date: '29 Ago 2024', seat: 'Cadeira VIP', status: 'Utilizado' },
];

export const Orders: React.FC = () => {
    return (
        <DashboardLayout title="Pedidos e Ingressos">
            {/* Tickets Section */}
            <div className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-white font-bebas text-3xl tracking-widest flex items-center gap-3">
                        <Ticket className="text-granada-red" /> MEUS INGRESSOS
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {matchTickets.map((tk, i) => (
                        <motion.div
                            key={tk.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 group relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">CÓDIGO: {tk.id}</p>
                                    <h4 className="text-xl text-white font-bold uppercase tracking-tighter leading-tight">{tk.match}</h4>
                                </div>
                                <span className={`px-2 py-1 text-[8px] font-bold uppercase tracking-widest border ${tk.status === 'Ativo' ? 'border-green-500 text-green-500 bg-green-500/5' : 'border-gray-600 text-gray-600 bg-gray-600/5'}`}>
                                    {tk.status}
                                </span>
                            </div>
                            <div className="space-y-2 mb-8">
                                <p className="text-xs text-gray-400 uppercase tracking-wider flex justify-between">
                                    <span>Data/Hora:</span> <span className="text-white">{tk.date}</span>
                                </p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider flex justify-between">
                                    <span>Setor:</span> <span className="text-granada-red">{tk.seat}</span>
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 bg-white text-black font-bold py-3 text-[10px] uppercase hover:bg-granada-red hover:text-white transition-all flex items-center justify-center gap-2">
                                    <Download size={14} /> BAIXAR PDF
                                </button>
                                <button className="px-4 border border-white/10 text-white hover:bg-white/5 transition-all">
                                    <Eye size={16} />
                                </button>
                            </div>
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-5 text-white">
                                <Ticket size={120} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Store Orders Section */}
            <div>
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-white font-bebas text-3xl tracking-widest flex items-center gap-3">
                        <ShoppingBag className="text-granada-red" /> PEDIDOS DA LOJA
                    </h3>
                </div>
                <div className="bg-white/5 border border-white/10 overflow-hidden">
                    <table className="w-full text-left text-xs uppercase tracking-widest text-gray-400">
                        <thead>
                            <tr className="border-b border-white/5 text-[10px] text-gray-500 font-bold">
                                <th className="p-6">Pedido</th>
                                <th className="p-6">Data</th>
                                <th className="p-6">Item Principal</th>
                                <th className="p-6">Total</th>
                                <th className="p-6">Status</th>
                                <th className="p-6 text-right">Ação</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {storeOrders.map((order, i) => (
                                <tr key={i} className="group hover:bg-white/5 transition-colors">
                                    <td className="p-6 font-mono text-white/50">{order.id}</td>
                                    <td className="p-6 text-white">{order.date}</td>
                                    <td className="p-6 text-white font-bold">{order.item}</td>
                                    <td className="p-6 font-bebas text-lg tracking-widest text-white">{order.total}</td>
                                    <td className="p-6">
                                        <span className="text-[10px] font-bold text-granada-red border border-granada-red/10 px-2 py-1 bg-granada-red/5">
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-6 text-right">
                                        <button className="text-gray-500 hover:text-white transition-all flex items-center gap-2 justify-end float-right">
                                            DETALHES <ChevronRight size={14} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
};

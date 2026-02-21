import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { DollarSign, Download, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const transactions = [
    { id: '#O-8422', type: 'Socio', c: 'Ana P.', v: 'R$ 89,90', date: 'Hoje, 10:24', status: 'Pago' },
    { id: '#O-8421', type: 'Loja', c: 'Roberto M.', v: 'R$ 249,90', date: 'Hoje, 09:12', status: 'Pago' },
    { id: '#O-8420', type: 'Ingresso', c: 'Carlos E.', v: 'R$ 40,00', date: 'Ontem, 18:45', status: 'Processando' },
];

export const Sales: React.FC = () => {
    return (
        <DashboardLayout title="Vendas e Financeiro">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/5 border border-white/10 p-8">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">RECEITA HOJE</p>
                    <h3 className="text-4xl text-white font-bebas tracking-widest">R$ 1.842,00</h3>
                    <div className="mt-4 flex items-center gap-2 text-green-500 font-bold text-[10px]">
                        <ArrowUpRight size={14} /> +12% vs ONTEM
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-8">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">CONVERSÃO LOJA</p>
                    <h3 className="text-4xl text-white font-bebas tracking-widest">3.8%</h3>
                    <div className="mt-4 flex items-center gap-2 text-red-500 font-bold text-[10px]">
                        <ArrowDownRight size={14} /> -0.4% vs SEMANA PASSADA
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-8">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">PLAYERS PREVISÃO</p>
                    <h3 className="text-4xl text-white font-bebas tracking-widest text-granada-gold">R$ 145K</h3>
                    <p className="mt-4 text-[10px] text-gray-600 font-bold uppercase tracking-widest">FECHAMENTO ESTIMADO</p>
                </div>
            </div>

            <div className="bg-white/5 border border-white/10">
                <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <h4 className="text-white font-bebas text-2xl tracking-widest">CONSOLIDADO DE TRANSAÇÕES</h4>
                    <div className="flex gap-4 w-full md:w-auto">
                        <button className="flex-1 bg-white/5 border border-white/10 text-white p-3 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                            <Calendar size={14} /> ÚLTIMOS 30 DIAS
                        </button>
                        <button className="flex-1 btn-premium px-6 py-3 flex items-center justify-center gap-2">
                            <Download size={14} /> EXPORTAR
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[10px] uppercase tracking-widest">
                        <thead className="text-gray-600 font-bold border-b border-white/5 bg-black/20">
                            <tr>
                                <th className="p-6">Transação</th>
                                <th className="p-6">Origem</th>
                                <th className="p-6">Cliente</th>
                                <th className="p-6">Data</th>
                                <th className="p-6">Valor</th>
                                <th className="p-6">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300 divide-y divide-white/5">
                            {transactions.map((t, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-all">
                                    <td className="p-6 font-mono text-white/50">{t.id}</td>
                                    <td className="p-6">
                                        <span className={`px-2 py-0.5 border text-[8px] font-bold uppercase tracking-widest ${t.type === 'Socio' ? 'border-granada-gold text-granada-gold' : 'border-gray-600 text-gray-500'}`}>
                                            {t.type}
                                        </span>
                                    </td>
                                    <td className="p-6 text-white font-bold">{t.c}</td>
                                    <td className="p-6">{t.date}</td>
                                    <td className="p-6 font-bebas text-lg text-white tracking-widest">{t.v}</td>
                                    <td className="p-6">
                                        <span className={`px-2 py-1 text-[8px] font-bold ${t.status === 'Pago' ? 'text-green-500' : 'text-yellow-500'}`}>
                                            {t.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-12 bg-black border border-white/5 p-12 text-center">
                <DollarSign className="text-granada-gold mx-auto mb-6" size={48} />
                <h2 className="text-white font-bebas text-5xl tracking-[0.2em] mb-4">REPASSE PRÓXIMO: <span className="text-granada-red">21/11</span></h2>
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-8">O montante total será liquidado diretamente via Gateway Santander.</p>
                <div className="h-2 bg-white/5 max-w-lg mx-auto overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        className="h-full bg-granada-gold"
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

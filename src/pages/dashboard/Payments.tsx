import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Wallet, CreditCard, Receipt, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

const payments = [
    { id: 'INV-2024-09', date: '01 Out 2024', amount: 'R$ 89,90', method: 'PIX', status: 'Pago' },
    { id: 'INV-2024-08', date: '01 Set 2024', amount: 'R$ 89,90', method: 'Boleto', status: 'Pago' },
    { id: 'INV-2024-07', date: '01 Ago 2024', amount: 'R$ 89,90', method: 'Cartão', status: 'Pago' },
];

export const Payments: React.FC = () => {
    return (
        <DashboardLayout title="Pagamentos e Mensalidades">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2 space-y-8">
                    {/* Active Subscription Info */}
                    <div className="bg-white/5 border border-white/10 p-10 flex flex-col md:flex-row gap-12 items-center bg-gradient-to-br from-black to-white/5">
                        <div className="w-32 h-32 border-2 border-granada-gold flex items-center justify-center p-4">
                            <span className="font-bebas text-5xl text-granada-gold">2026</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <span className="text-granada-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-2 block">STATUS: ATIVO</span>
                            <h2 className="text-4xl text-white font-bebas tracking-widest mb-4">PLANO LENDÁRIO</h2>
                            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-xs text-gray-500 font-bold uppercase">
                                <span className="flex items-center gap-2"><Calendar size={14} className="text-granada-red" /> PROXIMO: 01 NOV</span>
                                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> RENOV. AUTOMÁTICA</span>
                            </div>
                        </div>
                        <button className="text-[10px] text-white underline font-bold uppercase tracking-widest hover:text-granada-red">ALTERAR PLANO</button>
                    </div>

                    {/* Payment History */}
                    <div className="bg-white/5 border border-white/10">
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                            <h4 className="text-white font-bebas text-2xl tracking-widest">HISTÓRICO DE MENSALIDADES</h4>
                            <Receipt className="text-gray-700" size={24} />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-[10px] uppercase tracking-widest">
                                <thead className="text-gray-600 font-bold border-b border-white/5">
                                    <tr>
                                        <th className="p-6">Fatura</th>
                                        <th className="p-6">Vencimento</th>
                                        <th className="p-6">Valor</th>
                                        <th className="p-6">Método</th>
                                        <th className="p-6">Status</th>
                                        <th className="p-6 text-right">NF-e</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300 divide-y divide-white/5">
                                    {payments.map((p, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-all">
                                            <td className="p-6 text-white font-bold">{p.id}</td>
                                            <td className="p-6 italic">{p.date}</td>
                                            <td className="p-6 font-bebas text-lg text-white tracking-widest">{p.amount}</td>
                                            <td className="p-6">{p.method}</td>
                                            <td className="p-6">
                                                <span className="text-[8px] border border-green-500/20 text-green-500 bg-green-500/5 px-2 py-1 font-bold">
                                                    {p.status}
                                                </span>
                                            </td>
                                            <td className="p-6 text-right">
                                                <button className="text-gray-600 hover:text-white transition-all"><ExternalLink size={14} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Payment Methods Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 p-8">
                        <h4 className="text-white font-bold uppercase text-xs mb-8 flex items-center gap-3">
                            <CreditCard className="text-granada-red" size={16} /> MEUS MEIOS
                        </h4>
                        <div className="space-y-4">
                            <div className="bg-black border border-granada-red/30 p-6 relative overflow-hidden">
                                <div className="absolute top-[-10px] right-[-10px] opacity-10"><CreditCard size={60} /></div>
                                <p className="text-[10px] text-gray-500 font-bold mb-4 italic">FINAL 4402 (PADRÃO)</p>
                                <p className="text-white font-bold tracking-[0.2em] mb-4">**** **** **** 4402</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-[8px] text-granada-red uppercase font-bold">EXP: 12/28</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-4" alt="Mastercard" />
                                </div>
                            </div>
                            <button className="w-full py-4 border border-white/10 text-gray-500 text-[10px] font-bold uppercase hover:bg-white/5 hover:text-white transition-all">
                                + ADICIONAR NOVO
                            </button>
                        </div>
                    </div>

                    <div className="p-8 border border-white/5 bg-gradient-to-t from-granada-red/10 to-transparent">
                        <Wallet className="text-granada-red mb-6" size={32} />
                        <h5 className="text-white font-bold uppercase text-xs mb-2">QUER PAGAR VIA PIX?</h5>
                        <p className="text-[10px] text-gray-500 uppercase tracking-tighter mb-6">Gere o QR Code agora e ganhe 5% de desconto na mensalidade seguinte.</p>
                        <button className="w-full bg-granada-red text-white py-3 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition-all">GERAR PIX</button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

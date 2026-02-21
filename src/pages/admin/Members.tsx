import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Search, Filter, Mail, Phone, Shield, MoreHorizontal, UserPlus, Users } from 'lucide-react';

const members = [
    { id: '1', name: 'Ricardo Santos', plan: 'Lendário', email: 'ricardo@email.com', phone: '(19) 99822-1020', status: 'Ativo', color: 'green-500' },
    { id: '2', name: 'Ana Paula Lima', plan: 'Explosão', email: 'ana.lima@email.com', phone: '(19) 98765-4321', status: 'Pendente', color: 'yellow-500' },
    { id: '3', name: 'Marcos Vinícius', plan: 'Detona', email: 'marcos.v@email.com', phone: '(19) 91234-5678', status: 'Inadimplente', color: 'red-500' },
    { id: '4', name: 'Juliana Torres', plan: 'Lendário', email: 'j.torres@email.com', phone: '(19) 93344-5566', status: 'Ativo', color: 'green-500' },
    { id: '5', name: 'Bruno Alves', plan: 'Detona', email: 'bruno.a@email.com', phone: '(19) 95566-7788', status: 'Ativo', color: 'green-500' },
];

export const Members: React.FC = () => {
    return (
        <DashboardLayout title="Gestão de Sócios">
            <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-between">
                <div className="relative flex-1 w-full max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="BUSCAR SÓCIO POR NOME, CPF OU E-MAIL..."
                        className="w-full bg-white/5 border border-white/10 p-4 pl-12 text-xs text-white outline-none focus:border-granada-red uppercase tracking-widest"
                    />
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none border border-white/10 text-white p-4 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/5">
                        <Filter size={14} /> FILTRAR
                    </button>
                    <button className="flex-1 md:flex-none btn-premium px-8 py-4 flex items-center justify-center gap-2">
                        <UserPlus size={18} /> ADICIONAR
                    </button>
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs uppercase tracking-widest">
                        <thead className="text-gray-600 font-bold border-b border-white/5">
                            <tr>
                                <th className="p-6">Sócio</th>
                                <th className="p-6">Plano</th>
                                <th className="p-6">Contato</th>
                                <th className="p-6">Status</th>
                                <th className="p-6 text-right">Ação</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300 divide-y divide-white/5">
                            {members.map((member) => (
                                <tr key={member.id} className="hover:bg-white/5 transition-all group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-granada-red/20 border border-granada-red/30 flex items-center justify-center text-granada-red font-bold">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-white font-bold">{member.name}</p>
                                                <p className="text-[9px] text-gray-600">ID: #00{member.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className={`text-[10px] font-bold ${member.plan === 'Lendário' ? 'text-granada-gold' : member.plan === 'Explosão' ? 'text-white' : 'text-granada-red'}`}>
                                            {member.plan}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col gap-1 text-[9px]">
                                            <span className="flex items-center gap-2"><Mail size={12} className="text-gray-600" /> {member.email}</span>
                                            <span className="flex items-center gap-2"><Phone size={12} className="text-gray-600" /> {member.phone}</span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className={`px-2 py-1 text-[8px] font-bold border border-${member.color}/20 text-${member.color} bg-${member.color}/5`}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="p-6 text-right">
                                        <button className="text-gray-600 hover:text-white transition-all">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-white/5 flex justify-between items-center">
                    <p className="text-[10px] text-gray-600 font-bold">MOSTRANDO 5 DE 5.240 SÓCIOS</p>
                    <div className="flex gap-2">
                        <button className="p-2 border border-white/10 text-gray-600 hover:text-white transition-all disabled:opacity-30" disabled>ANTERIOR</button>
                        <button className="p-2 border border-white/10 text-white hover:bg-white/5 transition-all">PRÓXIMO</button>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 flex items-center gap-4">
                    <Shield className="text-granada-gold" size={32} />
                    <div>
                        <p className="text-white font-bebas text-2xl tracking-widest leading-none">950</p>
                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">SÓCIOS LENDÁRIOS</p>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 flex items-center gap-4">
                    <Users className="text-granada-red" size={32} />
                    <div>
                        <p className="text-white font-bebas text-2xl tracking-widest leading-none">1.240</p>
                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">NOVOS ESTE MÊS</p>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 flex items-center gap-4">
                    <div className="text-green-500"><Phone size={32} /></div>
                    <div>
                        <p className="text-white font-bebas text-2xl tracking-widest leading-none">92%</p>
                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">TAXA DE ADERÊNCIA</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Package, Plus, Edit2, Trash2, Tag, AlertTriangle } from 'lucide-react';

const products = [
    { id: 1, name: 'Manto Oficial I 2024', cat: 'Uniformes', price: 'R$ 249,90', stock: 154, socioPrice: 'R$ 199,90' },
    { id: 2, name: 'Manto Oficial II 2024', cat: 'Uniformes', price: 'R$ 249,90', stock: 82, socioPrice: 'R$ 199,90' },
    { id: 3, name: 'Boné Granada Gold', cat: 'Acessórios', price: 'R$ 89,90', stock: 12, socioPrice: 'R$ 69,90' },
    { id: 4, name: 'Jaqueta Bomber Preta', cat: 'Streetwear', price: 'R$ 349,90', stock: 45, socioPrice: 'R$ 279,90' },
];

export const Products: React.FC = () => {
    return (
        <DashboardLayout title="Inventário da Loja">
            <div className="flex justify-between items-center mb-12">
                <div className="flex gap-8">
                    <div>
                        <p className="text-3xl font-bebas text-white tracking-widest">34</p>
                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">PRODUTOS ATIVOS</p>
                    </div>
                    <div className="h-10 w-px bg-white/10" />
                    <div>
                        <p className="text-3xl font-bebas text-granada-red tracking-widest">03</p>
                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">ESTOQUE BAIXO</p>
                    </div>
                </div>
                <button className="btn-premium px-8 py-4 flex items-center gap-2">
                    <Plus size={18} /> CADASTRAR PRODUTO
                </button>
            </div>

            <div className="bg-white/5 border border-white/10 overflow-hidden">
                <table className="w-full text-left text-xs uppercase tracking-widest">
                    <thead className="text-gray-600 font-bold border-b border-white/5">
                        <tr>
                            <th className="p-6">Produto</th>
                            <th className="p-6">Categoria</th>
                            <th className="p-6">Público</th>
                            <th className="p-6">Sócio (20% OFF)</th>
                            <th className="p-6">Estoque</th>
                            <th className="p-6 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300 divide-y divide-white/5">
                        {products.map((p) => (
                            <tr key={p.id} className="hover:bg-white/5 transition-all">
                                <td className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black border border-white/5 flex items-center justify-center">
                                            <Package size={20} className="text-gray-700" />
                                        </div>
                                        <span className="text-white font-bold">{p.name}</span>
                                    </div>
                                </td>
                                <td className="p-6 text-gray-500">{p.cat}</td>
                                <td className="p-6 text-white font-bebas tracking-widest text-lg">{p.price}</td>
                                <td className="p-6 text-granada-gold font-bebas tracking-widest text-lg">{p.socioPrice}</td>
                                <td className="p-6">
                                    <div className="flex items-center gap-2">
                                        <span className={p.stock < 20 ? 'text-granada-red' : 'text-green-500'}>{p.stock}</span>
                                        {p.stock < 20 && <AlertTriangle size={12} className="text-granada-red" />}
                                    </div>
                                </td>
                                <td className="p-6 text-right">
                                    <div className="flex gap-4 justify-end">
                                        <button className="text-gray-600 hover:text-white transition-all"><Edit2 size={16} /></button>
                                        <button className="text-gray-600 hover:text-granada-red transition-all"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-granada-red/10 to-transparent p-10 border border-granada-red/20">
                    <Tag className="text-granada-red mb-6" size={32} />
                    <h4 className="text-white font-bebas text-3xl tracking-widest mb-2">CAMPANHA DE DESCONTO</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-tighter mb-8 leading-relaxed">
                        Administre as regras globais de desconto para o Sócio Torcedor. Atualmente configurado em um padrão de **20% OFF** em todo o catálogo.
                    </p>
                    <button className="text-[10px] text-white font-bold uppercase underline tracking-widest hover:text-granada-red">EDITAR REGRAS GLOBAIS</button>
                </div>
                <div className="bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center text-center">
                    <h4 className="text-white font-bebas text-3xl tracking-widest mb-2">VALE-PRESENTE</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 italic">Gere códigos de bonificação</p>
                    <button className="w-full bg-white text-black py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-granada-red hover:text-white transition-all">GERAR CUPOM</button>
                </div>
            </div>
        </DashboardLayout>
    );
};

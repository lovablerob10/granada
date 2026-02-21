import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import {
    Trash2,
    Plus,
    Minus,
    ArrowRight,
    ShoppingBag,
    ShieldCheck,
    Truck
} from 'lucide-react';

const initialItems = [
    { id: 1, name: 'Manto Oficial I - 2024', price: 249.90, img: 'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?q=80&w=800', cat: 'Mantos', socioPrice: 199.90, size: 'G', qty: 1 },
    { id: 3, name: 'Hoodie Explosão Black', price: 189.90, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800', cat: 'Streetwear', socioPrice: 159.90, size: 'M', qty: 1 },
];

export const Cart: React.FC = () => {
    const [items, setItems] = useState(initialItems);
    const isSocio = true;

    const updateQty = (id: number, delta: number) => {
        setItems(prev => prev.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const removeItem = (id: number) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const socioSubtotal = items.reduce((acc, item) => acc + (item.socioPrice * item.qty), 0);
    const savings = subtotal - socioSubtotal;
    const shipping = 15.00;
    const total = socioSubtotal + shipping;

    if (items.length === 0) {
        return (
            <DashboardLayout title="Carrinho de Compras">
                <div className="py-32 text-center">
                    <ShoppingBag className="mx-auto text-gray-800 mb-6" size={64} />
                    <h2 className="text-white font-bebas text-3xl tracking-widest mb-4">SEU CARRINHO ESTÁ VAZIO</h2>
                    <p className="text-gray-500 uppercase tracking-widest mb-8">QUE TAL EXPLORAR NOSSOS NOVOS MANTOS?</p>
                    <Link to="/loja" className="btn-premium px-12 py-4 text-xs">VOLTAR PARA A LOJA</Link>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout title="Meu Carrinho">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* List of Items */}
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-panel p-6 flex flex-col md:flex-row gap-6 group hover:border-granada-red/50 hover:shadow-[0_10px_30px_rgba(212,17,17,0.15)] hover:-translate-y-1 transition-all duration-500"
                        >
                            <div className="w-full md:w-32 aspect-square overflow-hidden bg-black">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1">
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.cat}</span>
                                <h3 className="text-white font-bebas text-2xl tracking-widest mb-1 group-hover:text-granada-red transition-colors">{item.name}</h3>
                                <div className="flex gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                                    <span>Tamanho: <span className="text-white">{item.size}</span></span>
                                    <span>Unid: <span className="text-white">R$ {item.socioPrice.toFixed(2)}</span></span>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center border border-white/10">
                                        <button onClick={() => updateQty(item.id, -1)} className="p-2 text-white hover:bg-white/5"><Minus size={14} /></button>
                                        <span className="px-4 text-white text-xs font-bold border-x border-white/10">{item.qty}</span>
                                        <button onClick={() => updateQty(item.id, 1)} className="p-2 text-white hover:bg-white/5"><Plus size={14} /></button>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className="text-gray-600 hover:text-granada-red transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="text-right flex flex-col justify-center">
                                <p className="text-gray-600 line-through text-xs font-bebas tracking-widest">R$ {(item.price * item.qty).toFixed(2)}</p>
                                <p className="text-white text-2xl font-bebas tracking-widest">R$ {(item.socioPrice * item.qty).toFixed(2)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                    <div className="glass-panel p-8 sticky top-24">
                        <h4 className="text-white font-bebas text-2xl tracking-widest mb-8 pb-4 border-b border-white/5">RESUMO DO PEDIDO</h4>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <span>Subtotal</span>
                                <span>R$ {subtotal.toFixed(2)}</span>
                            </div>
                            {isSocio && (
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-granada-gold">
                                    <span>Desconto Sócio Torcedor</span>
                                    <span>- R$ {savings.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                <span>Frete</span>
                                <span>R$ {shipping.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 mb-8">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Total</span>
                                <span className="text-4xl text-granada-red font-bebas tracking-widest">R$ {total.toFixed(2)}</span>
                            </div>
                            <p className="text-[9px] text-gray-600 uppercase tracking-widest text-right">ou em até 10x de R$ {(total / 10).toFixed(2)}</p>
                        </div>

                        <Link to="/loja/checkout" className="w-full btn-premium py-5 flex items-center justify-center gap-3 text-xs">
                            FINALIZAR COMPRA <ArrowRight size={16} />
                        </Link>

                        <div className="mt-8 space-y-4 pt-8 border-t border-white/5">
                            <div className="flex items-center gap-3 text-gray-500">
                                <ShieldCheck size={18} className="text-granada-red" />
                                <span className="text-[9px] font-bold uppercase tracking-widest">Compra 100% Segura</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <Truck size={18} className="text-granada-red" />
                                <span className="text-[9px] font-bold uppercase tracking-widest">Entrega Garantida em todo Brasil</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

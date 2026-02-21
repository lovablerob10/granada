import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CreditCard,
    QrCode,
    FileText,
    CheckCircle2,
    Lock,
    Truck,
    MapPin,
    ArrowLeft
} from 'lucide-react';

export const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('pix');

    const handleFinish = () => {
        navigate('/loja/pedido-confirmado');
    };

    return (
        <DashboardLayout title="Checkout Seguro">
            <div className="mb-8">
                <Link to="/loja/carrinho" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} /> VOLTAR AO CARRINHO
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Forms Area */}
                <div className="space-y-12">
                    {/* Step 1: Shipping */}
                    <div className={`transition-all ${step === 1 ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full bg-granada-red flex items-center justify-center text-xs font-bold text-white">1</div>
                            <h3 className="text-white font-bebas text-2xl tracking-widest">DADOS DE ENTREGA</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <label className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">Endereço Completo</label>
                                <input type="text" placeholder="RUA DAS FLORES, 123 - ITAIM" className="w-full bg-white/5 border border-white/10 p-4 text-xs text-white outline-none focus:border-granada-red" />
                            </div>
                            <div>
                                <label className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">CEP</label>
                                <input type="text" placeholder="04533-000" className="w-full bg-white/5 border border-white/10 p-4 text-xs text-white outline-none focus:border-granada-red" />
                            </div>
                            <div>
                                <label className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">Cidade</label>
                                <input type="text" placeholder="SÃO PAULO" className="w-full bg-white/5 border border-white/10 p-4 text-xs text-white outline-none focus:border-granada-red" />
                            </div>
                        </div>

                        {step === 1 && (
                            <button onClick={() => setStep(2)} className="mt-8 btn-premium px-12 py-4 text-[10px]">PROSSEGUIR PARA O PAGAMENTO</button>
                        )}
                    </div>

                    {/* Step 2: Payment */}
                    <div className={`transition-all ${step === 2 ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-8 rounded-full bg-granada-red flex items-center justify-center text-xs font-bold text-white">2</div>
                            <h3 className="text-white font-bebas text-2xl tracking-widest">MÉTODO DE PAGAMENTO</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {[
                                { id: 'pix', label: 'PIX (5% OFF)', icon: <QrCode size={18} /> },
                                { id: 'card', label: 'CARTÃO', icon: <CreditCard size={18} /> },
                                { id: 'boleto', label: 'BOLETO', icon: <FileText size={18} /> }
                            ].map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => setPaymentMethod(m.id)}
                                    className={`p-6 border flex flex-col items-center gap-3 transition-all ${paymentMethod === m.id ? 'bg-granada-red/10 border-granada-red text-white shadow-[0_0_20px_rgba(212,17,17,0.2)]' : 'glass-panel text-gray-500 hover:text-white hover:border-white/30'}`}
                                >
                                    {m.icon}
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-center">{m.label}</span>
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {paymentMethod === 'card' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">Número do Cartão</label>
                                        <div className="relative">
                                            <input type="text" placeholder="**** **** **** ****" className="w-full bg-white/5 border border-white/10 p-4 text-xs text-white outline-none focus:border-granada-red" />
                                            <Lock size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">Validade</label>
                                            <input type="text" placeholder="MM/AA" className="w-full bg-white/5 border border-white/10 p-4 text-xs text-white outline-none focus:border-granada-red" />
                                        </div>
                                        <div>
                                            <label className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">CVV</label>
                                            <input type="text" placeholder="***" className="w-full bg-white/5 border border-white/10 p-4 text-xs text-white outline-none focus:border-granada-red" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {paymentMethod === 'pix' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="p-6 glass-panel border-granada-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] flex items-center gap-6"
                                >
                                    <div className="p-3 bg-white">
                                        <QrCode size={80} className="text-black" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-xs uppercase tracking-widest mb-2">Pague com PIX e ganhe +5% OFF</p>
                                        <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-tighter">O CÓDIGO DO PIX SERÁ GERADO APÓS CLICAR EM "FINALIZAR PEDIDO".</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {step === 2 && (
                            <button onClick={handleFinish} className="mt-12 btn-premium w-full py-6 flex items-center justify-center gap-3 text-sm">
                                <CheckCircle2 size={20} /> FINALIZAR PEDIDO AGORA
                            </button>
                        )}
                    </div>
                </div>

                {/* Sidebar Summary */}
                <div className="lg:col-span-1">
                    <div className="glass-panel p-8">
                        <h4 className="text-white font-bebas text-2xl tracking-widest mb-8 pb-4 border-b border-white/5">RESUMO</h4>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center bg-white/5 p-4 border border-white/5">
                                <span className="text-[9px] text-gray-400 uppercase tracking-widest">2x Manto Oficial 2024</span>
                                <span className="text-white font-bebas text-lg">R$ 399,80</span>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-500 px-4">
                                <span>Frete Express</span>
                                <span className="text-white">R$ 15,00</span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 text-right">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 block">Total a Pagar</span>
                            <span className="text-5xl text-granada-red font-bebas tracking-widest">R$ 414,80</span>
                        </div>

                        <div className="mt-12 space-y-4 pt-12 border-t border-white/5">
                            <div className="flex items-center gap-3 text-gray-500">
                                <Truck size={18} />
                                <span className="text-[9px] font-bold uppercase tracking-widest">ENTREGA ESTIMADA: 3-5 DIAS ÚTEIS</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500">
                                <MapPin size={18} />
                                <span className="text-[9px] font-bold uppercase tracking-widest">SAINDO DE CAMPINAS - SP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

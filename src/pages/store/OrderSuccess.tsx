import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    Truck,
    ArrowRight,
    ShoppingBag,
    LayoutDashboard
} from 'lucide-react';

export const OrderSuccess: React.FC = () => {
    return (
        <DashboardLayout title="Pedido Confirmado">
            <div className="max-w-4xl mx-auto py-20 text-center">
                <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="w-32 h-32 bg-granada-red rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(212,17,17,0.4)]"
                >
                    <CheckCircle size={64} className="text-white" />
                </motion.div>

                <h1 className="text-6xl font-bebas text-white tracking-[0.2em] mb-4">MUITO OBRIGADO!</h1>
                <p className="text-granada-gold font-bold uppercase tracking-widest text-lg mb-12">Seu pedido #GR-88931 foi recebido com sucesso.</p>

                <div className="glass-panel p-12 mb-16 space-y-8 text-left max-w-2xl mx-auto">
                    <div className="flex items-start gap-6">
                        <Truck className="text-granada-red mt-1" size={24} />
                        <div>
                            <h4 className="text-white font-bebas text-2xl tracking-widest mb-2">QUASE LÁ!</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                                JÁ ESTAMOS PREPARANDO SUA ARMADURA. VOCÊ RECEBERÁ O CÓDIGO DE RASTREIO NO E-MAIL CADASTRADO ASSIM QUE O PACOTE FOR ENVIADO.
                            </p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
                        <div>
                            <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest block mb-2">Previsão de Entrega</span>
                            <span className="text-white font-bebas text-xl tracking-widest">24 DE FEVEREIRO</span>
                        </div>
                        <div>
                            <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest block mb-2">Forma de Envio</span>
                            <span className="text-white font-bebas text-xl tracking-widest">SEDEX EXPRESS</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link to="/dashboard" className="flex items-center justify-center gap-3 border border-white/10 text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                        <LayoutDashboard size={18} /> IR PARA MEU DASHBOARD
                    </Link>
                    <Link to="/loja" className="flex items-center justify-center gap-3 bg-granada-red text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        CONTINUAR COMPRANDO <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="mt-20 pt-20 border-t border-white/5 opacity-50 flex items-center justify-center gap-8 grayscale">
                    <ShoppingBag size={40} className="text-gray-700" />
                    <h2 className="text-gray-700 font-bebas text-5xl tracking-[0.5em]">GRANADA STORE</h2>
                </div>
            </div>
        </DashboardLayout>
    );
};

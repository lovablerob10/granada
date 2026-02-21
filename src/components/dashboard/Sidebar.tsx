import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
    Home, Calendar, Gift, ShoppingBag,
    ClipboardList, Wallet, HelpCircle, ShieldCheck,
    LogOut, User, Menu, X
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: 'Início', icon: Home, path: '/dashboard' },
    { name: 'Agenda', icon: Calendar, path: '/dashboard/agenda' },
    { name: 'Benefícios', icon: Gift, path: '/dashboard/beneficios' },
    { name: 'Loja', icon: ShoppingBag, path: '/loja' },
    { name: 'Carrinho', icon: ShoppingBag, path: '/loja/carrinho' },
    { name: 'Pedidos', icon: ClipboardList, path: '/dashboard/pedidos' },
    { name: 'Pagamentos', icon: Wallet, path: '/dashboard/pagamentos' },
    { name: 'Suporte', icon: HelpCircle, path: '/dashboard/suporte' },
];

export const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isAdmin = true; // Placeholder for logic

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-[60] p-2 bg-black/80 backdrop-blur-xl border border-white/10 text-white lg:hidden"
                aria-label="Abrir menu"
            >
                <Menu size={24} />
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "w-72 h-screen bg-black/60 backdrop-blur-2xl border-r border-white/5 shadow-[5px_0_30px_rgba(0,0,0,0.5)] flex flex-col fixed left-0 top-0 z-[70] transition-transform duration-300",
                // Mobile: hidden by default, slides in when open
                isOpen ? "translate-x-0" : "-translate-x-full",
                // Desktop: always visible
                "lg:translate-x-0"
            )}>
                <div className="p-8 border-b border-white/5 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/icone-granada.png" alt="Logo" className="w-10 h-10" />
                        <div>
                            <h2 className="font-bebas text-2xl text-white tracking-widest leading-none">GRANADA FC</h2>
                            <span className="text-[10px] text-granada-red font-bold uppercase tracking-[0.2em]">Dashboard Sócio</span>
                        </div>
                    </Link>
                    {/* Mobile close button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-white lg:hidden"
                        aria-label="Fechar menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/dashboard'}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => cn(
                                "flex items-center gap-4 px-4 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 group rounded-none border border-transparent",
                                isActive
                                    ? "bg-granada-red/10 text-white border-l-granada-red"
                                    : "text-gray-500 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5",
                                "group-hover:scale-110 transition-transform duration-300"
                            )} />
                            {item.name}
                        </NavLink>
                    ))}

                    {isAdmin && (
                        <div className="pt-8 border-t border-white/5 mt-8 space-y-2">
                            <span className="px-4 text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] block mb-4">ADMINISTRATIVO</span>

                            {[
                                { name: 'Dashboard', icon: ShieldCheck, path: '/admin' },
                                { name: 'Gestão Sócios', icon: User, path: '/admin/socios' },
                                { name: 'Inventário Loja', icon: ShoppingBag, path: '/admin/produtos' },
                                { name: 'Vendas & Financeiro', icon: Wallet, path: '/admin/vendas' },
                                { name: 'Gestão de Jogos', icon: Calendar, path: '/admin/agenda' },
                                { name: 'Social Ads', icon: ClipboardList, path: '/admin/criativos' },
                            ].map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.path === '/admin'}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => cn(
                                        "flex items-center gap-4 px-4 py-3 text-xs font-medium uppercase tracking-wider transition-all duration-300 group rounded-none border border-transparent",
                                        isActive
                                            ? "bg-granada-gold/10 text-granada-gold border-r-2 border-granada-gold"
                                            : "text-gray-500 hover:text-granada-gold hover:bg-white/5"
                                    )}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </nav>

                <div className="p-6 border-t border-white/5 bg-white/5">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-none border border-granada-red overflow-hidden bg-black flex items-center justify-center">
                            <User className="text-white w-6 h-6" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-white font-bold text-sm truncate">ROBSON NOBRE</p>
                            <p className="text-[10px] text-granada-gold font-bold uppercase tracking-tight">Sócio Lendário</p>
                        </div>
                        <button className="text-gray-500 hover:text-white transition-colors">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

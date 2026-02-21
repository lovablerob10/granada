import React from 'react';
import { Sidebar } from './Sidebar';
import { motion } from 'framer-motion';

interface DashboardLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
    return (
        <div className="min-h-screen bg-black flex">
            <Sidebar />
            {/* ml-72 only on desktop (lg+), on mobile the sidebar is an overlay */}
            <main className="flex-1 lg:ml-72 relative w-full">
                {/* Background Atmosphere */}
                <div className="fixed inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-granada-red/20 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-granada-red/10 blur-[100px] rounded-full" />
                </div>

                {/* Dashboard Header */}
                <header className="h-16 lg:h-20 border-b border-white/5 flex items-center justify-between px-4 pl-16 lg:pl-12 lg:px-12 bg-black/40 backdrop-blur-xl sticky top-0 z-40">
                    <h1 className="font-bebas text-2xl lg:text-4xl text-white tracking-widest uppercase">
                        {title || 'Dashboard'}
                    </h1>
                    <div className="hidden sm:flex items-center gap-4 lg:gap-6">
                        <div className="text-right">
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Saldo de Pontos</p>
                            <p className="text-lg lg:text-xl text-white font-bebas tracking-wider">12.450 <span className="text-granada-red font-sans text-xs">PTS</span></p>
                        </div>
                        <div className="h-10 w-px bg-white/10" />
                        <div className="flex items-center gap-3 bg-white/5 px-3 lg:px-4 py-2 border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] text-white font-bold uppercase tracking-wider">Plano Ativo</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 sm:p-6 lg:p-12 relative z-10"
                >
                    {children}
                </motion.div>
            </main>
        </div>
    );
};

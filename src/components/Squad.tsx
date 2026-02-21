import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { players } from '../data/players';


export const Squad: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else if (window.innerWidth < 1280) setItemsToShow(3);
            else setItemsToShow(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => {
        if (currentIndex < players.length - itemsToShow) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className="py-24 bg-granada-black relative overflow-hidden border-t border-white/5 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-granada-red/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-6xl text-white uppercase flex items-center gap-4">
                            <span className="w-2 h-12 bg-granada-red block" />
                            GRID DE <span className="text-granada-red">CRAQUES</span>
                        </h2>
                        <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mt-2 pl-6">
                            OS PROTAGONISTAS DA EXPLOSÃO
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            disabled={currentIndex === 0}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-granada-red disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            disabled={currentIndex >= players.length - itemsToShow}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-granada-red disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative" ref={containerRef}>
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: -(currentIndex * (100 / itemsToShow)) + '%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{ width: `${(players.length / itemsToShow) * 100}%` }}
                    >
                        {players.map((player) => (
                            <div
                                key={player.id}
                                style={{ width: `${100 / players.length}%` }}
                                className="relative group aspect-[3/4] overflow-hidden border border-white/10 hover:border-granada-red transition-all duration-500"
                            >
                                <img
                                    src={player.img}
                                    alt={player.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800';
                                    }}
                                />

                                {/* stylized number */}
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="text-4xl font-bebas text-granada-red drop-shadow-[0_0_10px_rgba(212,17,17,0.8)] italic">
                                        {player.num}
                                    </span>
                                </div>

                                {/* content overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80" />
                                    <div className="relative">
                                        <p className="text-granada-red font-bold text-[10px] tracking-[0.2em] mb-1">{player.pos}</p>
                                        <h3 className="text-2xl text-white font-bebas tracking-widest">{player.name}</h3>
                                    </div>
                                </div>

                                {/* card border glow */}
                                <div className="absolute inset-0 border-2 border-granada-red opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

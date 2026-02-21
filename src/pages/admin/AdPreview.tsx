import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { Player } from '@remotion/player';
import { SocialAd } from '../../remotion/SocialAd';
import { Smartphone, Share2, Download, Zap } from 'lucide-react';

export const AdPreview: React.FC = () => {
    return (
        <DashboardLayout title="Preview de Criativos">
            <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
                {/* Mobile Preview Container */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-granada-red to-granada-gold opacity-30 blur group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-black border-[12px] border-[#1a1a1a] rounded-[3rem] overflow-hidden w-[360px] h-[640px] shadow-2xl">
                        <Player
                            component={SocialAd}
                            durationInFrames={180}
                            compositionWidth={1080}
                            compositionHeight={1920}
                            fps={30}
                            loop
                            autoPlay
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                    {/* Device Decorators */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />
                </div>

                {/* Info & Controls */}
                <div className="flex-1 max-w-lg space-y-8">
                    <div className="bg-white/5 border border-white/10 p-8">
                        <span className="text-granada-red font-bold text-[10px] uppercase tracking-[.4em] mb-4 block">MOTION DEV 2026</span>
                        <h2 className="text-4xl font-bebas text-white tracking-widest mb-6">REMOTION SOCIAL AD V.1</h2>
                        <p className="text-xs text-gray-500 uppercase leading-relaxed tracking-tighter mb-8">
                            Um criativo de alto impacto desenvolvido com **Remotion engine**. Focado em engajamento vertical (Instagram/TikTok), utiliza animações baseadas em física (Spring), tipografia cinética e efeitos de glitch cromático.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-white">
                                <Zap size={18} className="text-granada-gold" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">FPS: 30 | Aspect: 9:16</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <Smartphone size={18} className="text-granada-red" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Otimizado para Mobile</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="btn-premium py-4 flex items-center justify-center gap-2 text-xs">
                            <Download size={16} /> DOWNLOAD MP4
                        </button>
                        <button className="border border-white/10 text-white hover:bg-white/5 py-4 flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest">
                            <Share2 size={16} /> COMPARTILHAR
                        </button>
                    </div>

                    <div className="p-6 border-l-4 border-granada-red bg-white/5">
                        <h4 className="text-white text-xs font-bold uppercase mb-2">Dica Pro</h4>
                        <p className="text-[10px] text-gray-500 uppercase tracking-tight">Utilize este criativo com a trilha 'Granada_Explosion_Loop.wav' para máximo engajamento sonoro.</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

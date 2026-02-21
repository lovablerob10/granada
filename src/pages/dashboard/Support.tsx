import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { MessageSquare, ChevronDown, Send, ShieldQuestion } from 'lucide-react';

const faqs = [
    { q: 'Como retiro meu ingresso físico?', a: 'Ingressos podem ser retirados na Arena Granada até 2h antes da partida, apresentando o QR Code digital no app.' },
    { q: 'Posso mudar de plano a qualquer momento?', a: 'Sim, o upgrade é imediato. Para downgrade, a alteração ocorre no próximo ciclo de faturamento.' },
    { q: 'Dependentes têm os mesmos benefícios?', a: 'Depende do plano. O plano Lendário permite até 2 dependentes com 50% de desconto.' },
    { q: 'Quais as formas de pagamento aceitas?', a: 'Aceitamos Cartão de Crédito (renovação automática), PIX e Boleto Bancário.' },
];

export const Support: React.FC = () => {
    return (
        <DashboardLayout title="Suporte e FAQ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h3 className="text-white font-bebas text-3xl tracking-widest mb-8 uppercase flex items-center gap-4">
                        <ShieldQuestion className="text-granada-red" /> PERGUNTAS FREQUENTES
                    </h3>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 group overflow-hidden"
                            >
                                <button className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-all">
                                    <span className="text-xs text-white font-bold uppercase tracking-wider">{f.q}</span>
                                    <ChevronDown size={14} className="text-gray-500 group-hover:text-granada-red group-focus:rotate-180 transition-transform" />
                                </button>
                                <div className="px-6 pb-6 pt-0 text-[11px] text-gray-500 uppercase leading-relaxed tracking-tighter">
                                    {f.a}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white/5 border border-white/10 p-10 relative overflow-hidden group">
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <MessageSquare size={160} />
                        </div>
                        <h4 className="text-white font-bebas text-3xl tracking-widest mb-4">NÃO ACHOU O QUE PROCURAVA?</h4>
                        <p className="text-gray-400 text-xs uppercase mb-8 max-w-md">Envie uma mensagem direta para nossa central de atendimento ao sócio torcedor.</p>
                        <form className="space-y-4 relative z-10 max-w-lg">
                            <input type="text" placeholder="ASSUNTO" className="w-full bg-black border border-white/10 p-4 text-[10px] text-white focus:border-granada-red outline-none uppercase tracking-widest" />
                            <textarea rows={4} placeholder="DESCREVA SUA DÚVIDA..." className="w-full bg-black border border-white/10 p-4 text-[10px] text-white focus:border-granada-red outline-none uppercase tracking-widest"></textarea>
                            <button className="btn-premium px-12 py-3 flex items-center gap-2">
                                ENVIAR MENSAGEM <Send size={14} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-granada-red p-10 text-center flex flex-col items-center">
                        <div className="bg-black p-4 inline-block mb-6">
                            <MessageSquare className="text-granada-red" size={32} />
                        </div>
                        <h5 className="text-white font-bebas text-4xl mb-2 tracking-widest">ATENDIMENTO VIP</h5>
                        <p className="text-black font-bold text-xs uppercase mb-8 tracking-tighter">Fale direto via WhatsApp com um consultor exclusivo para sócios.</p>
                        <button className="w-full bg-black text-white py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                            ABRIR WHATSAPP
                        </button>
                    </div>

                    <div className="border border-white/10 p-10 bg-white/5">
                        <h6 className="text-white font-bold uppercase text-xs mb-6 border-l-2 border-granada-red pl-4">Canais Oficiais</h6>
                        <ul className="space-y-4 text-[10px] text-gray-500 uppercase tracking-widest leading-none font-bold">
                            <li className="flex justify-between"><span>Email:</span> <span className="text-white">contato@granadafc.com</span></li>
                            <li className="flex justify-between"><span>Tel:</span> <span className="text-white">(19) 3232-1921</span></li>
                            <li className="flex justify-between"><span>Endereço:</span> <span className="text-white text-right">Av. Francisco Glicério, Campinas</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

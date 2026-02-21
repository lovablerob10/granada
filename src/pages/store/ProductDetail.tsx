import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import {
    ShoppingBag,
    ArrowLeft,
    ShieldCheck,
    Truck,
    RefreshCw,
    Heart,
    Star,
    CheckCircle2
} from 'lucide-react';

// Mock shared data (ideally this comes from a hook/api)
const products = [
    { id: 1, name: 'Manto Oficial I - 2024', price: 249.90, img: 'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?q=80&w=800', cat: 'Mantos', socioPrice: 199.90, desc: 'O novo Manto Sagrado do Granada FC para a temporada 2024. Criado com tecnologia de alta performance para garantir ventilação máxima no calor do jogo. Design clássico com detalhes em ouro e vermelho vibrante.' },
    { id: 2, name: 'Manto Oficial II - 2024', price: 249.90, img: 'https://images.unsplash.com/photo-1580087444194-03552092cc77?q=80&w=800', cat: 'Mantos', socioPrice: 199.90, desc: 'A armadura reserva para os desafios fora de casa. Com base branca e detalhes texturizados que representam as ruas de Campinas. Elegância e tradição em cada fibra.' },
    { id: 3, name: 'Hoodie Explosão Black', price: 189.90, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800', cat: 'Streetwear', socioPrice: 159.90, desc: 'Conforto e estilo para os dias mais frios. Tecido premium com estampa de alta durabilidade com o logo explosivo do Granada.' },
    { id: 4, name: 'Boné Granada Gold', price: 89.90, img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800', cat: 'Acessórios', socioPrice: 69.90, desc: 'Aba curva e ajuste perfeito. Coroa em preto matte com o escudo bordado em fios dourados especiais.' },
];

export const ProductDetail: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === Number(id)) || products[0];
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product.img);

    const sizes = ['P', 'M', 'G', 'GG', 'XG'];

    return (
        <DashboardLayout title="Detalhes do Produto">
            <div className="mb-8">
                <Link to="/loja" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} /> VOLTAR PARA A LOJA
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Product Gallery */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-square glass-panel overflow-hidden relative group"
                    >
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </motion.div>

                    <div className="grid grid-cols-4 gap-4">
                        {[product.img, product.img, product.img, product.img].map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setMainImage(img)}
                                className={`aspect-square border transition-all ${mainImage === img ? 'border-granada-red' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                            >
                                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-[10px] font-bold text-granada-red uppercase tracking-[0.3em]">{product.cat}</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="fill-granada-gold text-granada-gold" />)}
                            </div>
                        </div>
                        <h1 className="text-5xl font-bebas text-white tracking-widest mb-4">{product.name}</h1>
                        <p className="text-xs text-gray-500 uppercase tracking-tighter leading-relaxed max-w-lg mb-8">
                            {product.desc}
                        </p>
                    </div>

                    {/* Pricing */}
                    <div className="glass-panel p-8 mb-8 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Preço Público</span>
                            <span className="text-xl text-gray-500 line-through font-bebas tracking-widest">R$ {product.price.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-granada-gold font-bold uppercase tracking-widest">Preço Sócio Torcedor</span>
                                <CheckCircle2 size={12} className="text-granada-gold" />
                            </div>
                            <span className="text-4xl text-white font-bebas tracking-widest">R$ {product.socioPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Configuration */}
                    <div className="space-y-8 mb-12">
                        <div>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-4">Escolha seu Tamanho</span>
                            <div className="flex gap-4">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 flex items-center justify-center text-xs font-bold border transition-all ${selectedSize === size
                                            ? 'bg-granada-red border-granada-red text-white'
                                            : 'border-white/10 text-gray-500 hover:border-white hover:text-white'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <div>
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-4">Quantidade</span>
                                <div className="flex items-center border border-white/10">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-white hover:bg-white/5"> - </button>
                                    <span className="px-6 py-2 text-white text-xs font-bold border-x border-white/10">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-white hover:bg-white/5"> + </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <button
                            onClick={() => navigate('/loja/carrinho')}
                            className="flex-1 btn-premium py-6 flex items-center justify-center gap-3 text-sm"
                        >
                            <ShoppingBag size={20} /> ADICIONAR AO CARRINHO
                        </button>
                        <button className="p-6 border border-white/10 text-white hover:bg-white/5 transition-all">
                            <Heart size={20} />
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-white/5">
                        <div className="flex flex-col items-center text-center gap-3">
                            <ShieldCheck className="text-granada-red" size={24} />
                            <span className="text-[8px] text-gray-600 font-bold uppercase tracking-widest">PRODUTO OFICIAL</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <Truck className="text-granada-red" size={24} />
                            <span className="text-[8px] text-gray-600 font-bold uppercase tracking-widest">ENTREGA RÁPIDA</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3">
                            <RefreshCw className="text-granada-red" size={24} />
                            <span className="text-[8px] text-gray-600 font-bold uppercase tracking-widest">TROCA GRÁTIS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-24 pt-24 border-t border-white/5">
                <h4 className="text-white font-bebas text-3xl tracking-[0.2em] mb-12">COMPLEMENTE SEU KIT</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
                        <Link key={p.id} to={`/loja/produto/${p.id}`} className="group glass-panel p-4 hover:border-granada-red/50 hover:-translate-y-1 transition-all duration-500">
                            <div className="aspect-square mb-4 overflow-hidden">
                                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h5 className="text-white font-bebas text-lg tracking-widest mb-1">{p.name}</h5>
                            <p className="text-granada-red font-bebas text-xl tracking-widest">R$ {p.socioPrice.toFixed(2)}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

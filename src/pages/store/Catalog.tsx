import React, { useState } from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products, categories } from '../../data/products';


export const StoreCatalog: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');
    const isSocio = true; // Placeholder for socio status

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeTab === 'Todos' || p.cat === activeTab;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <DashboardLayout title="Loja Oficial">
            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                <div className="flex gap-2 p-1 bg-white/5 border border-white/10 overflow-x-auto w-full md:w-auto no-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === cat ? 'bg-granada-red text-white' : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="BUSCAR PRODUTO..."
                        className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-xs text-white focus:border-granada-red outline-none transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, i) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative glass-panel overflow-hidden hover:border-granada-red/50 hover:shadow-[0_10px_30px_rgba(212,17,17,0.15)] transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Image Container */}
                        <Link to={`/loja/produto/${product.id}`} className="block aspect-[4/5] overflow-hidden relative">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                            />
                            {isSocio && (
                                <div className="absolute top-4 left-4 bg-[#D4AF37] text-black px-4 py-2 font-bold text-[10px] uppercase tracking-widest z-20 shadow-[0_0_20px_rgba(212,175,55,0.6)] border border-black/10">
                                    Sócio Torcedor: -R$ {(product.price - product.socioPrice).toFixed(0)}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                <div className="text-white flex items-center gap-2 border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                                    <Eye size={16} /> VER DETALHES
                                </div>
                            </div>
                        </Link>

                        {/* Details */}
                        <div className="p-6 relative">
                            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{product.cat}</span>
                            <h3 className="text-white font-bebas text-2xl tracking-widest mb-4 group-hover:text-granada-red transition-colors">{product.name}</h3>
                            <div className="flex items-end justify-between">
                                <div className="flex items-end gap-3 font-bebas">
                                    <span className="text-3xl text-white tracking-widest">R$ {product.socioPrice.toFixed(2)}</span>
                                    <span className="text-sm text-gray-600 line-through mb-1 tracking-widest">R$ {product.price.toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={() => navigate('/loja/carrinho')}
                                    className="p-3 bg-white/5 text-white hover:bg-granada-red transition-all border border-white/10"
                                >
                                    <ShoppingBag size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="py-32 text-center">
                    <ShoppingBag className="mx-auto text-gray-800 mb-6" size={64} />
                    <p className="text-gray-500 uppercase tracking-widest">Nenhum produto encontrado nesta categoria.</p>
                </div>
            )}
        </DashboardLayout>
    );
};

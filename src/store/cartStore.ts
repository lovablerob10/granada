import { create } from 'zustand';
import type { Product } from '../data/products';

export interface CartItem extends Product {
    quantity: number;
    size?: string;
}

interface CartState {
    items: CartItem[];
    addItem: (product: Product, quantity?: number, size?: string) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getTotal: () => number;
    getSocioTotal: () => number;
    getItemCount: () => number;
}

/**
 * Global cart store.
 * Manages the shopping cart state across the store pages.
 * When Supabase is connected, cart persistence can be added
 * via Supabase Realtime or a server-side cart table.
 */
export const useCartStore = create<CartState>((set, get) => ({
    items: [],

    addItem: (product, quantity = 1, size) => {
        const existing = get().items.find((i) => i.id === product.id && i.size === size);
        if (existing) {
            set({
                items: get().items.map((i) =>
                    i.id === product.id && i.size === size
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                ),
            });
        } else {
            set({ items: [...get().items, { ...product, quantity, size }] });
        }
    },

    removeItem: (productId) => {
        set({ items: get().items.filter((i) => i.id !== productId) });
    },

    updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
            get().removeItem(productId);
            return;
        }
        set({
            items: get().items.map((i) =>
                i.id === productId ? { ...i, quantity } : i
            ),
        });
    },

    clearCart: () => set({ items: [] }),

    getTotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    getSocioTotal: () => get().items.reduce((sum, i) => sum + i.socioPrice * i.quantity, 0),
    getItemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));

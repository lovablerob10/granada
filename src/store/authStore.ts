import { create } from 'zustand';

export interface User {
    id: string;
    name: string;
    email: string;
    plan: 'detona' | 'explosao' | 'legendario' | null;
    role: 'socio' | 'admin';
    avatarUrl?: string;
}

interface AuthState {
    /** The currently authenticated user, or null if logged out. */
    user: User | null;
    /** Whether the auth state has been initialized (checked on app load). */
    isInitialized: boolean;
    /** Whether an auth operation is in progress. */
    isLoading: boolean;

    // -- Actions --
    /** Sets the authenticated user (called after Supabase login). */
    setUser: (user: User | null) => void;
    /** Logs the user out. */
    logout: () => void;
    /** Marks the auth state as initialized. */
    setInitialized: () => void;
}

/**
 * Global authentication store.
 * When Supabase is connected, the `setUser` action will be called
 * from the Supabase auth listener (onAuthStateChange).
 */
export const useAuthStore = create<AuthState>((set) => ({
    // -- Mock initial state: simulates a logged-in sócio --
    user: {
        id: 'mock-user-001',
        name: 'Robson Nobre',
        email: 'robson@granada.com',
        plan: 'legendario',
        role: 'admin',
    },
    isInitialized: true,
    isLoading: false,

    setUser: (user) => set({ user, isLoading: false }),
    logout: () => set({ user: null }),
    setInitialized: () => set({ isInitialized: true }),
}));

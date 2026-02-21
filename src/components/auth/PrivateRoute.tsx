import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

interface PrivateRouteProps {
    children: React.ReactNode;
    /** Optionally require a specific role to access the route. */
    requiredRole?: 'socio' | 'admin';
}

/**
 * Blocks unauthenticated users from accessing protected routes.
 * When Supabase is connected, the `useAuthStore` will be hydrated
 * from the real auth session instead of mock data.
 */
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredRole }) => {
    const user = useAuthStore((state) => state.user);

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
};

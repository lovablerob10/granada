import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { PrivateRoute } from './components/auth/PrivateRoute';

// -- Dashboard (Sócio) --
import { DashboardHome } from './pages/dashboard/Home';
import { Agenda } from './pages/dashboard/Agenda';
import { Benefits } from './pages/dashboard/Benefits';
import { Orders } from './pages/dashboard/Orders';
import { Payments } from './pages/dashboard/Payments';
import { Support } from './pages/dashboard/Support';

// -- Store (Public) --
import { StoreCatalog } from './pages/store/Catalog';
import { ProductDetail } from './pages/store/ProductDetail';
import { Cart } from './pages/store/Cart';
import { Checkout } from './pages/store/Checkout';
import { OrderSuccess } from './pages/store/OrderSuccess';

// -- Admin --
import { AdminOverview } from './pages/admin/Overview';
import { AdPreview } from './pages/admin/AdPreview';
import { Members } from './pages/admin/Members';
import { Products } from './pages/admin/Products';
import { Sales } from './pages/admin/Sales';
import { Matches } from './pages/admin/Matches';

export const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* ========== PUBLIC ROUTES ========== */}
                <Route path="/" element={<App />} />

                {/* Store (publicly browsable) */}
                <Route path="/loja" element={<StoreCatalog />} />
                <Route path="/loja/produto/:id" element={<ProductDetail />} />
                <Route path="/loja/carrinho" element={<Cart />} />
                <Route path="/loja/checkout" element={<Checkout />} />
                <Route path="/loja/pedido-confirmado" element={<OrderSuccess />} />
                <Route path="/loja/*" element={<StoreCatalog />} />

                {/* ========== PROTECTED: SÓCIO DASHBOARD ========== */}
                <Route path="/dashboard" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
                <Route path="/dashboard/agenda" element={<PrivateRoute><Agenda /></PrivateRoute>} />
                <Route path="/dashboard/beneficios" element={<PrivateRoute><Benefits /></PrivateRoute>} />
                <Route path="/dashboard/pedidos" element={<PrivateRoute><Orders /></PrivateRoute>} />
                <Route path="/dashboard/pagamentos" element={<PrivateRoute><Payments /></PrivateRoute>} />
                <Route path="/dashboard/suporte" element={<PrivateRoute><Support /></PrivateRoute>} />
                <Route path="/dashboard/*" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />

                {/* ========== PROTECTED: ADMIN PORTAL ========== */}
                <Route path="/admin" element={<PrivateRoute requiredRole="admin"><AdminOverview /></PrivateRoute>} />
                <Route path="/admin/socios" element={<PrivateRoute requiredRole="admin"><Members /></PrivateRoute>} />
                <Route path="/admin/produtos" element={<PrivateRoute requiredRole="admin"><Products /></PrivateRoute>} />
                <Route path="/admin/vendas" element={<PrivateRoute requiredRole="admin"><Sales /></PrivateRoute>} />
                <Route path="/admin/agenda" element={<PrivateRoute requiredRole="admin"><Matches /></PrivateRoute>} />
                <Route path="/admin/criativos" element={<PrivateRoute requiredRole="admin"><AdPreview /></PrivateRoute>} />
                <Route path="/admin/*" element={<PrivateRoute requiredRole="admin"><AdminOverview /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export interface AdminOrder {
    id: string;
    client: string;
    value: string;
    status: string;
    statusColor: string;
}

export const recentOrders: AdminOrder[] = [
    { id: '#8420', client: 'Ricardo S.', value: 'R$ 249,90', status: 'Aprovado', statusColor: 'green-500' },
    { id: '#8419', client: 'Ana Paula', value: 'R$ 189,90', status: 'Pendente', statusColor: 'yellow-500' },
    { id: '#8418', client: 'Marcos V.', value: 'R$ 89,90', status: 'Enviado', statusColor: 'blue-500' },
    { id: '#8417', client: 'Carla M.', value: 'R$ 59,90', status: 'Cancelado', statusColor: 'red-500' },
];

export interface PlanDistribution {
    name: string;
    count: string;
    percent: number;
    color: string;
}

export const planDistribution: PlanDistribution[] = [
    { name: 'Detona', count: '2.450', percent: 45, color: 'granada-red' },
    { name: 'Explosão', count: '1.840', percent: 35, color: 'white' },
    { name: 'Lendário', count: '950', percent: 20, color: 'granada-gold' },
];

export interface AdminStatData {
    title: string;
    value: string;
    growth: string;
}

export const adminStats: AdminStatData[] = [
    { title: 'Total Sócios', value: '5.240', growth: '12' },
    { title: 'Pedidos Mês', value: '842', growth: '18' },
    { title: 'Receita Bruta', value: 'R$ 142.500', growth: '24' },
    { title: 'Estoque', value: '2.150', growth: '5' },
];

export interface DashboardActivity {
    title: string;
    date: string;
    subtitle: string;
}

export const recentActivity: DashboardActivity[] = [
    { title: 'Login efetuado', date: 'Hoje, 09:45', subtitle: 'Acesso seguro' },
    { title: 'Renovação Mensalidade', date: '01 Set, 2026', subtitle: 'Processado via PIX' },
    { title: 'Check-in Partida', date: '28 Ago, 2026', subtitle: 'QR Code validado' },
];

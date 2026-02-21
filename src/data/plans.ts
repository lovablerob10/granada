export interface Plan {
    name: string;
    price: string;
    icon: React.ReactNode;
    featured?: boolean;
    benefits: string[];
}

export const plans: Omit<Plan, 'icon'>[] = [
    {
        name: 'DETONA',
        price: '29,90',
        featured: false,
        benefits: [
            'Acesso prioritário a ingressos',
            'Desconto na loja oficial',
            'Conteúdo exclusivo no app',
        ],
    },
    {
        name: 'EXPLOSÃO',
        price: '59,90',
        featured: true,
        benefits: [
            'Acesso prioritário a ingressos',
            'Desconto na loja oficial',
            'Conteúdo exclusivo no app',
        ],
    },
    {
        name: 'LENDÁRIO',
        price: '149,90',
        featured: false,
        benefits: [
            'Acesso prioritário a ingressos',
            'Desconto na loja oficial',
            'Conteúdo exclusivo no app',
        ],
    },
];

export interface Sponsor {
    name: string;
    red: boolean;
}

export const sponsors: Sponsor[] = [
    { name: 'PREFEITURA DE CAMPINAS', red: false },
    { name: 'SÉRIE OURO AMADOR', red: false },
    { name: 'SUPERMERCADOS PAGUE MENOS', red: false },
    { name: 'DUNHA & AMIGOS', red: true },
    { name: 'ESCOLA GRANADA', red: false },
    { name: 'ADIDAS', red: false },
];

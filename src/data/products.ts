export interface Product {
    id: number;
    name: string;
    price: number;
    socioPrice: number;
    img: string;
    cat: string;
    description: string;
}

export const categories = ['Todos', 'Mantos', 'Streetwear', 'Acessórios', 'Sócio Exclusive'];

export const products: Product[] = [
    {
        id: 1,
        name: 'Manto Oficial I - 2024',
        price: 249.90,
        img: 'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?auto=format&fit=crop&q=80&w=800',
        cat: 'Mantos',
        socioPrice: 199.90,
        description: 'O manto oficial número 1 da temporada 2024. Conforto e estilo para o verdadeiro torcedor.',
    },
    {
        id: 2,
        name: 'Manto Oficial II - 2024',
        price: 249.90,
        img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
        cat: 'Mantos',
        socioPrice: 199.90,
        description: 'A segunda opção de manto oficial para 2024. Design inovador e tecido de alta performance.',
    },
    {
        id: 3,
        name: 'Hoodie Explosão Black',
        price: 189.90,
        img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
        cat: 'Streetwear',
        socioPrice: 159.90,
        description: 'Moletom com capuz estilo streetwear, perfeito para o dia a dia. Conforto e atitude.',
    },
    {
        id: 4,
        name: 'Boné Granada Gold',
        price: 89.90,
        img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
        cat: 'Acessórios',
        socioPrice: 69.90,
        description: 'Boné exclusivo com detalhes em dourado. Proteção e estilo para qualquer ocasião.',
    },
    {
        id: 5,
        name: 'Cachecol Tradição',
        price: 59.90,
        img: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800',
        cat: 'Acessórios',
        socioPrice: 45.90,
        description: 'Cachecol que celebra a tradição do clube. Ideal para os dias mais frios no estádio.',
    },
    {
        id: 6,
        name: 'Kit Churrasco Legendário',
        price: 349.90,
        img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
        cat: 'Sócio Exclusive',
        socioPrice: 289.90,
        description: 'Kit completo para o churrasco do torcedor lendário. Exclusivo para sócios.',
    },
];

/** Featured store items for the landing page "Manto Sagrado" section */
export const featuredStoreItems = [
    { name: 'CAMISA I - MANTO FRENTE', price: '299,90', img: '/manto-frente.png' },
    { name: 'CAMISA I - MANTO VERSO', price: '299,90', img: '/manto-verso.png' },
];

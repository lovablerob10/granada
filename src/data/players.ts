export interface Player {
    id: number;
    name: string;
    pos: string;
    num: string;
    img: string;
}

export const players: Player[] = [
    { id: 1, name: 'DUDU', pos: 'GOLEIRO', num: '01', img: '/img/squad/dudu_action.jpg' },
    { id: 2, name: 'TICO', pos: 'ZAGUEIRO', num: '04', img: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=800' },
    { id: 3, name: 'RODRYGO', pos: 'VOLANTE', num: '08', img: '/img/squad/rodrygo_action.jpg' },
    { id: 4, name: 'LUAN', pos: 'MAESTRO', num: '10', img: 'https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?q=80&w=800' },
    { id: 5, name: 'GABIGOL', pos: 'ARTILHEIRO', num: '09', img: '/img/squad/gabigol_action.jpg' },
    { id: 6, name: 'VINI', pos: 'PONTA', num: '11', img: '/img/squad/vini_action.jpg' },
];

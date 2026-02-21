export interface HistoryEvent {
    year: string;
    title: string;
    description: string;
}

export const historyEvents: HistoryEvent[] = [
    { year: '2009', title: 'A FUNDAÇÃO', description: 'Nascido em um quiosque no Campo do Nóbrega, focado na união e garra do futebol de Campinas.' },
    { year: '2018', title: 'PRIMEIRA GLÓRIA', description: 'Conquista da Copa Irdival Frezzato, marcando o início da ascensão no cenário amador.' },
    { year: '2019', title: 'ELITE DE CAMPINAS', description: 'O primeiro título da Série Ouro A do Campeonato Amador, consolidando o poder da explosão.' },
    { year: '2023', title: 'O BICAMPEONATO', description: 'Vitória épica no Moisés Lucarelli para mais de 7 mil torcedores. O topo é nosso.' },
];

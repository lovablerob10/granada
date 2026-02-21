export interface Match {
    opponent: string;
    date: string;
    venue: string;
    competition: string;
}

export const upcomingMatches: Match[] = [
    { opponent: 'Flamengo', date: 'Dom, 16:00', venue: 'Arena Granada', competition: 'Campeonato Brasileiro' },
    { opponent: 'Palmeiras', date: 'Qua, 21:30', venue: 'Allianz Parque', competition: 'Copa do Brasil' },
    { opponent: 'Santos', date: 'Sáb, 18:30', venue: 'Arena Granada', competition: 'Campeonato Brasileiro' },
];

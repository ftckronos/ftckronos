export type AwardEntry = {
  year: number;
  event: string;
  award: string;
};

/** Update after each competition. Source: FIRST team page (public). */
export const awards: AwardEntry[] = [
  { year: 2025, event: 'Santa Clara QT #2', award: 'Connect Award' },
  {
    year: 2023,
    event: 'CA-NorCal Oakland Qualifying Tournament',
    award: 'Connect Award (2nd Place)',
  },
  {
    year: 2023,
    event: 'CA-NorCal Oakland Qualifying Tournament',
    award: 'Finalist Alliance — 1st Team Selected',
  },
  {
    year: 2023,
    event: 'CA-NorCal Oakland Qualifying Tournament',
    award: 'Motivate Award',
  },
  {
    year: 2022,
    event: 'CA-NorCal Piedmont Qualifying Tournament',
    award: 'Control Award (sponsored by Arm, Inc.)',
  },
  {
    year: 2021,
    event: 'CA-Northern Grass Valley Qualifying Tournament',
    award: 'Motivate Award (2nd Place)',
  },
  {
    year: 2021,
    event: 'CA-Northern San Mateo #2 Qualifying Tournament',
    award: 'Think Award (2nd Place)',
  },
];

export const drivers: Driver[] = [
  {
    name: 'Max Mümmelmann',
    location: 'Augsburg',
  },
  {
    name: 'Moritz Bleibtreu',
    location: 'Köln',
  },
  {
    name: 'Josef Haderer',
    location: 'Wien',
  },
  {
    name: 'Justus Jonas',
    location: 'Memmingen',
  },
  {
    name: 'Gustav Gans',
    location: 'Stuttgart',
  },
  {
    name: 'Donald Duck',
    location: 'Entenhausen',
  },
  {
    name: 'Clark Kent',
    location: 'Leipzig',
  },
  {
    name: 'Ralf Zacherl',
    location: 'Berlin',
  },
  {
    name: 'Günther Jauch',
    location: 'Mannheim',
  },
  {
    name: 'Leopold Ansgart',
    location: 'Dortmund',
  },
  {
    name: 'Hans Hein',
    location: 'Nürnberg',
  },
  {
    name: 'Georg Reisbacher',
    location: 'München',
  },
];
export default defineEventHandler(() => {
  return drivers;
});

export const tours: Tour[] = [
  {
    customerName: 'Gartenbau Wiesmann GmbH',
    shipmentDate: '29.08.2023',
    locationFrom: 'Augsburg',
    locationTo: 'Berlin',
    assignedDriver: 'Eberhard Klöpke',
  },
  {
    customerName: 'Blumenhof Müller KG',
    shipmentDate: '15.09.2023',
    locationFrom: 'Berlin',
    locationTo: 'Hamburg',
    assignedDriver: 'Max Schmidt',
  },
  {
    customerName: 'ChemieTech AG',
    shipmentDate: '18.09.2023',
    locationFrom: 'München',
    locationTo: 'Köln',
    assignedDriver: 'Lena Müller',
  },
  {
    customerName: 'Sonnenschein Landwirtschaft e.K.',
    shipmentDate: '22.09.2023',
    locationFrom: 'Frankfurt',
    locationTo: 'Stuttgart',
    assignedDriver: 'Finn Becker',
  },
  {
    customerName: 'Wiesenfrische Lebensmittel AG',
    shipmentDate: '25.09.2023',
    locationFrom: 'Hannover',
    locationTo: 'Düsseldorf',
    assignedDriver: 'Klaus Wagner',
  },
  {
    customerName: 'Globex Corporation',
    shipmentDate: '28.09.2023',
    locationFrom: 'Leipzig',
    locationTo: 'Dortmund',
    assignedDriver: 'Benjamin Müller',
  },
  {
    customerName: 'Blütenparadies Gartenbau UG',
    shipmentDate: '01.10.2023',
    locationFrom: 'Essen',
    locationTo: 'Dresden',
    assignedDriver: 'Robert Klein',
  },
  {
    customerName: 'Goldene Felder AG',
    shipmentDate: '04.10.2023',
    locationFrom: 'Bremen',
    locationTo: 'Nürnberg',
    assignedDriver: 'Elias Richter',
  },
  {
    customerName: 'Berggarten Erzeugnisse GmbH',
    shipmentDate: '07.10.2023',
    locationFrom: 'Duisburg',
    locationTo: 'Bochum',
    assignedDriver: 'Amelia Fischer',
  },
  {
    customerName: 'Talfrisch Landwirtschafts UG',
    shipmentDate: '10.10.2023',
    locationFrom: 'Wuppertal',
    locationTo: 'Bonn',
    assignedDriver: 'Leon Braun',
  },
  {
    customerName: 'Starship Enterprises',
    shipmentDate: '13.10.2023',
    locationFrom: 'Münster',
    locationTo: 'Karlsruhe',
    assignedDriver: 'Kurt Schneider',
  },
];
export default defineEventHandler(() => {
  return tours;
});

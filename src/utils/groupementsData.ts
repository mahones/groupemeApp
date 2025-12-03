

export const groupementsData = [
  {
    id: 1,
    title: 'Groupements 1',
    minimum_participant: '10',
    image: require('../public/assets/images/pexels.jpg'),
    date_cloture: '2026-30-01',
    flagUrl: 'https://flagcdn.com/w320/tg.png',
    pays: 'Togo',
    transport: 'Par avion',
    categorie: 'electronique',
    participant: 6,
    price: '100000',
    etat: 'Collecte',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    title: 'Groupements 2',
    minimum_participant: '17',
    image: require('../public/assets/images/casque.jpg'),
    date_cloture: '2026-01-01',
    flagUrl: 'https://flagcdn.com/w320/tg.png',
    pays: 'Togo',
    transport: 'Par bateau',
    categorie: 'electronique',
    participant: 10,
    price: '80000',
    etat: 'Collecte',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'Groupements 3',
    minimum_participant: '40',
    image: require('../public/assets/images/med.jpg'),
    date_cloture: '2025-11-12',
    flagUrl: 'https://flagcdn.com/w320/ci.png',
    pays: 'Cote d\'Ivoire',
    transport: 'Par camion',
    categorie: 'beaute',
    participant: 14,
    price: '3000',
    etat: 'Collecte',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    title: 'Groupements 4',
    minimum_participant: '5',
    image: require('../public/assets/images/phone.jpg'),
    date_cloture: '2023-12-01',
    flagUrl: 'https://flagcdn.com/w320/ci.png',
    pays: 'Cote d\'Ivoire',
    transport: 'Par avion',
    categorie: 'electronique',
    participant: 27,
    price: '10300',
    etat: 'Terminer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 5,
    title: 'Groupements 5',
    minimum_participant: '20',
    image: require('../public/assets/images/savon.jpg'),
    date_cloture: '2026-01-01',
    flagUrl: 'https://flagcdn.com/w320/gh.png',
    pays:'Ghana',
    transport: 'Par bateau',
    categorie: 'beaute',
    participant: 23,
    price: '3000',
    etat: 'En cours',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 6,
    title: 'Groupements 6',
    minimum_participant: '19',
    image: require('../public/assets/images/soin.jpg'),
    date_cloture: '2023-01-01',
    flagUrl: 'https://flagcdn.com/w320/gh.png',
    pays:'Ghana',
    transport: 'Par bateau',
    categorie: 'beaute',
    participant: 10,
    price: '1000',
    etat: 'Collecte',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

/**
 * Récupère le groupement par son ID
 */
export const getGroupementById = (id: number) => {
  return groupementsData.find(g => g.id === id);
};

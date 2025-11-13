/**
 * groupementsData.ts
 *
 * Données centralisées pour les groupements
 * Permet de partager les images et autres infos entre Dashboard et SingleGroupements
 */

export const groupementsData = [
  {
    id: 1,
    title: 'Groupements 1',
    image: require('../public/assets/images/pexels.jpg'),
  },
  {
    id: 2,
    title: 'Groupements 2',
    image: require('../public/assets/images/casque.jpg'),
  },
  {
    id: 3,
    title: 'Groupements 3',
    image: require('../public/assets/images/med.jpg'),
  },
  {
    id: 4,
    title: 'Groupements 4',
    image: require('../public/assets/images/phone.jpg'),
  },
  {
    id: 5,
    title: 'Groupements 5',
    image: require('../public/assets/images/savon.jpg'),
  },
  {
    id: 6,
    title: 'Groupements 6',
    image: require('../public/assets/images/soin.jpg'),
  },
];

/**
 * Récupère le groupement par son ID
 */
export const getGroupementById = (id: number) => {
  return groupementsData.find(g => g.id === id);
};

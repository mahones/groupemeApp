import { getGroupementById } from "./groupementsData"
export const participationsData =[
    {
        id: 1,
        paticipant_id: 1,
        groupement_id: getGroupementById(1), 
        quantity: 5,
        price: 20000,
    },
    {
        id: 2,
        paticipant_id: 1,
        groupement_id: getGroupementById(3), 
        quantity: 2,
        price: 2000,
    },
    {
        id: 3,
        paticipant_id: 1,
        groupement_id: getGroupementById(6), 
        quantity: 8,
        price: 2000,
    },
    {
        id: 4,
        paticipant_id: 1,
        groupement_id: getGroupementById(4), 
        quantity: 1,
        price: 3000,
    },
    {
        id: 5,
        paticipant_id: 1,
        groupement_id: getGroupementById(2), 
        quantity: 10,
        price: 60000,
    },
    {
        id: 6,
        paticipant_id: 1,
        groupement_id: getGroupementById(5), 
        quantity: 10,
        price: 10000,
    },

]
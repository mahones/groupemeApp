import { StyleSheet } from "react-native";
import { TEXT_STANDARD, PADDING_STANDARD  } from "../../utils/utilitaires";

const DashboardStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: PADDING_STANDARD.small,

    },
    title: {
        fontSize: TEXT_STANDARD.medium,
    },
    search:{
        paddingTop: PADDING_STANDARD.small,
        paddingBottom: PADDING_STANDARD.small,
    },

    groupementList: {
        paddingTop: PADDING_STANDARD.small,
        paddingBottom: PADDING_STANDARD.small,
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },


}); 

export default DashboardStyle;

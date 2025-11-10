import { StyleSheet } from "react-native";
import { PADDING_STANDARD } from "../../utils/utilitaires";

const GroupementsStyle = StyleSheet.create({

    grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  groupementList: {
    paddingTop: PADDING_STANDARD.small,
    paddingBottom: PADDING_STANDARD.small,
  },

});

export default GroupementsStyle;
import { StyleSheet } from "react-native";  
import { PADDING_STANDARD, TEXT_STANDARD } from "../../utils/utilitaires";

const ParticipationsStyle = StyleSheet.create({

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  groupementList: {
    paddingTop: PADDING_STANDARD.small,
    paddingBottom: PADDING_STANDARD.small,
  },
  title: {
    fontSize: TEXT_STANDARD.large,
    fontWeight: 'bold',
    marginBottom: PADDING_STANDARD.medium,
  }
});

export default ParticipationsStyle;
import { StyleSheet } from "react-native";
import {
  TEXT_STANDARD,
  PADDING_STANDARD,
  MARGIN_STANDARD,
} from '../utils/utilitaires';

const hCardStyle = StyleSheet.create({

    categoryList: {
    paddingTop: PADDING_STANDARD.small,
    paddingBottom: PADDING_STANDARD.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

   horizontalItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginRight: MARGIN_STANDARD.medium,
    height: 161,
    width: 162,
    // justifyContent: 'space-between',
  },
  categoryImage: {
    width: '100%',
    height: 113,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: TEXT_STANDARD.medium,
    paddingTop: PADDING_STANDARD.small,
  },

});
export default hCardStyle;
import { StyleSheet } from 'react-native';
import {
  TEXT_STANDARD,
  PADDING_STANDARD,
  // MARGIN_STANDARD,
} from '../../utils/utilitaires';

const DashboardStyle = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingBottom: PADDING_STANDARD.small,
  },
  title: {
    fontSize: TEXT_STANDARD.medium,
  },
  search: {
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

  welcomeText: {
    fontSize: TEXT_STANDARD.xxlarge,
    fontWeight: 'bold',
    paddingBottom: PADDING_STANDARD.small,
  },
  /**
   * Liste horizontale des catégories
   */

  categoryTitle: {
    fontSize: TEXT_STANDARD.large,
    fontWeight: 'bold',
    paddingBottom: PADDING_STANDARD.small,
  },
  categoryList: {
    paddingTop: PADDING_STANDARD.small,
    paddingBottom: PADDING_STANDARD.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // horizontalItem: {
  //   backgroundColor: '#f0f0f0',
  //   borderRadius: 8,
  //   marginRight: MARGIN_STANDARD.medium,
  //   height: 80,
  //   width: 80,
  //   // justifyContent: 'space-between',
  // },
  // categoryImage: {
  //   width: '100%',
  //   height: 80,
  //   borderRadius: 8,
  // },
  // categoryText: {
  //   fontSize: TEXT_STANDARD.medium,
  //   paddingTop: PADDING_STANDARD.small,
  // },
  /** Fin liste horizontale des catégories */

  // iconForIconButton: {
  //   width: 65,
  //   height: 65,
  //   borderRadius: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginRight: MARGIN_STANDARD.medium,
  // },
  
});

export default DashboardStyle;

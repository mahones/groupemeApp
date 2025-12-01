import { StyleSheet } from 'react-native';
import {
  TEXT_STANDARD,
  PADDING_STANDARD,
  // MARGIN_STANDARD,
  COLOR_PALETTE,
} from '../../utils/utilitaires';

const DashboardStyle = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingBottom: PADDING_STANDARD.small,
  },
  listcontainer:{
    paddingBottom:20,
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

  selected:{
    backgroundColor: COLOR_PALETTE.secondary
  },
  nonegroupement:{
    padding : 20,
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nonegroupementImage:{
    marginBottom: 15,
  },
  nonegroupementText:{
    fontSize: TEXT_STANDARD.medium,
    fontWeight: '600'
  }
  
});

export default DashboardStyle;

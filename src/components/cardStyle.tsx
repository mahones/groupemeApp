import { StyleSheet } from 'react-native';
import {
  TEXT_STANDARD,
  PADDING_STANDARD,
  BORDER_RADIUS_STANDARD,
  COLOR_PALETTE,
} from '../utils/utilitaires';

const CardStyle = StyleSheet.create({
  /** #####
   * style des items de la liste des groupements
   * #####
   */
  touchableOpacity: {
    backgroundColor: COLOR_PALETTE.white,
  },
  imagestyle: {
    width: 'auto',
    height: 128,
    borderTopLeftRadius: BORDER_RADIUS_STANDARD.xxlarge,
    borderTopRightRadius: BORDER_RADIUS_STANDARD.xxlarge,
  },
  itemstyles: {
    borderColor: COLOR_PALETTE.green,
    borderWidth: 1,
    backgroundColor: COLOR_PALETTE.white,
    elevation: 4,
    height: 248.51,
    width: 181.32,
    borderRadius: BORDER_RADIUS_STANDARD.xxlarge,
  },
  itemscontainer: {
    padding: PADDING_STANDARD.small,
    marginBottom: PADDING_STANDARD.small,
  },
  titleitem: {
    fontSize: TEXT_STANDARD.big,
    fontWeight: 'bold',
  },
  descriptionitemcontainer: {
    paddingTop: PADDING_STANDARD.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },

  iconstyle: {
    width: 25,
    height: 15,
    borderRadius: 2,
  },
  descriptionitem: {
    fontSize: TEXT_STANDARD.normal,
  },
  priceitem: {
    fontSize: TEXT_STANDARD.big,
    fontWeight: 'bold',
    color: COLOR_PALETTE.primary,
  },
  priceitemcontainer: {
    paddingTop: PADDING_STANDARD.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },

  boutonstyle: {
    backgroundColor: COLOR_PALETTE.primary,
    borderRadius: BORDER_RADIUS_STANDARD.medium,
  },

  /**
   * #####
   * fin style des items de la liste des groupements
   * #####
   */

  // modal button style
  modalButton: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: COLOR_PALETTE.primary,
  },
  popUpTextContainer: {
    width: '100%',
  },
  popUpImageContainer: {
    alignItems: 'center',
  },
  popUpImage: {
    width: 160,
    height: 120,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default CardStyle;

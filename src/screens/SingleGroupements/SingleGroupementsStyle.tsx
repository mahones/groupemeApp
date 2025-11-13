import { StyleSheet } from 'react-native';
import {
  PADDING_GLOBAL,
  TEXT_STANDARD,
  MARGIN_STANDARD,
  COLOR_PALETTE,
} from '../../utils/utilitaires';

const SingleGroupementsStyle = StyleSheet.create({
  container: {
    // flex: 1 pour que le conteneur prenne tout l'espace disponible
    flex: 1,
  },
  flex:{
    flex: 1,
  },
  detailsContainer: {
    marginTop: PADDING_GLOBAL.top15,
    marginLeft: PADDING_GLOBAL.left,
    marginRight: PADDING_GLOBAL.right,
  },
  scrollContainer:{
    marginBottom: 80,
  },
  imageSlider: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    height: 350,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconSize: {
    width: 25,
    height: 25,
    paddingRight: 6,
  },

  imageheart: {
    width: 25,
    height: 25,
  },
  // Groupement title, subtitle & like container
  titleSubtitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //  alignItems: 'center',
    marginBottom: MARGIN_STANDARD.small,
  },
  // end Groupement title, subtitle & like container

  // title container
  titleContainer: {
    fontSize: TEXT_STANDARD.xlarge,
    fontWeight: 'bold',
    alignItems: 'center',
    marginRight: 1,
  },
  // end title container
  textSmall: {
    fontSize: TEXT_STANDARD.small,
    color: COLOR_PALETTE.gray,
  },
  textNormal: {
    fontSize: TEXT_STANDARD.normal,
    color: COLOR_PALETTE.gray,
  },
  textMedium: {
    fontSize: TEXT_STANDARD.medium,
  },
  textMediumBold: {
    fontWeight: 'bold',
  },
  autorName: {
    color: COLOR_PALETTE.gray,
  },
  rowfeature: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 4,
  },
  featureTitle: {
    fontSize: TEXT_STANDARD.big,
    marginLeft: 8,
  },
  featureInfo: {
    fontSize: TEXT_STANDARD.big,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#f6f8fb',
  },
  rowPriceDevise: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  etatgroupement: {
    padding: 1.5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green',
    fontSize: TEXT_STANDARD.normal,
    color: 'green',
    marginRight: 8,
    marginBottom: 8,
  },
  badge: {
    padding: 1.5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR_PALETTE.green,
    fontSize: TEXT_STANDARD.normal,
    color: COLOR_PALETTE.green,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeDanger: {
    padding: 1.5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR_PALETTE.danger,
    fontSize: TEXT_STANDARD.normal,
    color: COLOR_PALETTE.danger,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeSecondary: {
    padding: 1.5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR_PALETTE.danger,
    fontSize: TEXT_STANDARD.normal,
    color: COLOR_PALETTE.danger,
    marginRight: 8,
    marginBottom: 8,
  },
  badgeGray: {
    padding: 1.5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR_PALETTE.gray,
    fontSize: TEXT_STANDARD.normal,
    color: COLOR_PALETTE.gray,
    marginRight: 8,
    marginBottom: 8,
  },
  etatEtDate: {
    marginBottom: 3,
  },
  prix: {
    fontSize: TEXT_STANDARD.xxlarge,
    fontWeight: 'bold',
    color: COLOR_PALETTE.primary,
  },
  devise: {
    fontSize: TEXT_STANDARD.big,
    fontWeight: 'bold',
    color: COLOR_PALETTE.primary,
  },
  descriptionContainer: {
    flex: 1,
    paddingBottom: 14,
    borderColor: 'gray',
    // borderBottomWidth: 0.6,
    marginBottom: 14,
  },
  textWrap: {
    flexWrap: 'wrap',
  },
  nbWrap: {
    width: '60%',
  },
  bottomBorder: {
    // borderBottomWidth: 0.2,
    borderColor: 'gray',
    // paddingBottom: 6,
  },
  descriptionTopborder: {
    // borderTopWidth: 0.2,
    borderColor: 'gray',
    paddingTop: 6,
  },
  // Bouton fixe au bas de l'écran
  fixedButton: {
    position: 'absolute',
    bottom: 50,
    left: PADDING_GLOBAL.left,
    right: PADDING_GLOBAL.right,
    width: 'auto',
  },
});

export default SingleGroupementsStyle;

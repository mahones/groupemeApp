import { StyleSheet } from 'react-native';
import {
  COLOR_PALETTE,
  TEXT_STANDARD,
  PADDING_STANDARD,
} from '../../utils/utilitaires';

const ProfileStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: PADDING_STANDARD.headers,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_PALETTE.green,
  },
  verticalCenter: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headercontainer: {
    justifyContent: 'flex-start',
  },
  namecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nametext: {
    fontSize: TEXT_STANDARD.large,
    fontWeight: 'bold',
    marginRight: 10,
  },

  iconbg: {
    backgroundColor: COLOR_PALETTE.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: PADDING_STANDARD.small,
  },
  logoutcontainer: {
    marginBottom: 50,
  },
  buttonTextStyle: {
    // marginLeft: 90,
  }
});

export default ProfileStyle;

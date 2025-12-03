import { StyleSheet } from 'react-native';
import {
  COLOR_PALETTE,
  TEXT_STANDARD,
  PADDING_STANDARD,
} from '../../utils/utilitaires';

const ProfileStyle = StyleSheet.create({
  profilecontainer:{
    flex: 1,
  },
  container: {
    // flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    // paddingBottom: PADDING_STANDARD.headers,
  },
  setingscontainer:{
    marginLeft: 15,
    marginRight: 15,
    top: -35,
  },
  imagecontainer:{
    height: 160,
    width: '100%',
    backgroundColor: COLOR_PALETTE.secondary,
  },
  image:{
    height: 160,
    width: '100%',
    resizeMode: 'cover',
    opacity: 0.8
  },
  headercontainer: {
    width: '100%',
    paddingHorizontal: 15,
    position: 'relative',
    top: -35,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilImageContainer:{
    height: 80,
    width: 80,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    backgroundColor: COLOR_PALETTE.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  profileditContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingVertical: 9,
    paddingHorizontal: 30,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 30,
  },
  mofifierprofil:{
    marginLeft: 16,
  },
  namecontainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nametext: {
    fontSize: TEXT_STANDARD.large,
    fontWeight: '500',
    paddingBottom: 9,
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

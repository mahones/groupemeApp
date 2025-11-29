import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '../../utils/utilitaires';

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerAndBackLog: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 35,
  },
  iconcontainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'center',
    borderColor: 'gray',
  },
  bodycontainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space20percent: {
    height: 140,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
    
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    paddingBottom: 35,
  },
  ortexte:{
    fontSize: 16,
    paddingBottom: 15,
  },
  inputscontainer:{
    width: '100%',
    marginBottom: 35,
  },
  buttoncontainer:{
    width: '100%',
    marginBottom: 35,
  },
  bgfacebook:{
    backgroundColor: '#7583CA'
  },
  bggoogle:{
    backgroundColor: '#4285f4'
  },
  bgloging:{
    backgroundColor: COLOR_PALETTE.secondary
  },
  forgotpassword:{

  },
  noAccount:{
    color: COLOR_PALETTE.secondary,
    fontWeight: '600'
  },
  noaccountcontainer:{
    flexDirection: 'row',
  },
  forgotpasswordcontainer:{
    marginBottom: 14,
  },
});

const RegisterStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerAndBackLog: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 35,
  },
  iconcontainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'center',
    borderColor: 'gray',
  },
  bodycontainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space20percent: {
    height: 140,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
    
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    paddingBottom: 35,
  },
  ortexte:{
    fontSize: 16,
    paddingBottom: 15,
  },
  inputscontainer:{
    width: '100%',
    marginBottom: 35,
  },
  buttoncontainer:{
    width: '100%',
    marginBottom: 35,
  },
  bgfacebook:{
    backgroundColor: '#7583CA'
  },
  bggoogle:{
    backgroundColor: '#4285f4'
  },
  bgloging:{
    backgroundColor: COLOR_PALETTE.secondary
  },
  forgotpassword:{

  },
  noAccount:{
    color: COLOR_PALETTE.secondary,
    fontWeight: '600'
  },
  noaccountcontainer:{
    flexDirection: 'row',
  },
  forgotpasswordcontainer:{
    marginBottom: 14,
  },
});

const RessetPasswordStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerAndBackLog: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  iconcontainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'center',
    borderColor: 'gray',
  },
});

export { LoginStyle, RegisterStyle, RessetPasswordStyle };

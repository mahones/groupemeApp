import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginStyle } from './authStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButtonLarge from '../../components/iconButtonLarge';
import InputCustom from '../../components/inputCustom';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/routes';

export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onDashboard = () => navigation.navigate('dashboard');
  const onRegister = () => navigation.navigate('register');
  const goToPreviousPage  = () => navigation.goBack();
  
  return (
    <View style={LoginStyle.container}>
      <View style={LoginStyle.headerAndBackLog}>
        <TouchableOpacity style={LoginStyle.iconcontainer} onPress={goToPreviousPage}>
          <Icon name="arrow-back-ios" size={25} color={'#3F414E'} />
        </TouchableOpacity>
      </View>
      <View style={LoginStyle.bodycontainer}>
        <Text style={LoginStyle.title}> Bienvenues </Text>
        <View style={LoginStyle.space20percent}>
          <IconButtonLarge
            text="Se connecter avec Facebook"
            icon2="sc-facebook"
            iconColor="#FFF"
            iconSize={30}
            onPress={() => {}}
            style={LoginStyle.bgfacebook}
          />
          <IconButtonLarge
            text="Se connecter avec Google"
            icon2="sc-google-plus"
            iconColor="#FFF"
            iconSize={30}
            onPress={() => {}}
            style={LoginStyle.bggoogle}
          />
        </View>
        <Text style={LoginStyle.ortexte}>Ou se connecter avec votre email</Text>
        <View style={LoginStyle.inputscontainer}>
          <InputCustom label="Email" iconName="email" placeholder="Email" />
          <InputCustom
            label="Mot de passe"
            iconName="lock"
            placeholder="Mot de passe"
          />
        </View>
        <View style={LoginStyle.buttoncontainer}>
          <IconButtonLarge
            text="Se connecter"
            icon="login"
            iconColor="#FFF"
            iconSize={30}
            onPress={onDashboard}
            style={LoginStyle.bgloging}
          />
        </View>
        <TouchableOpacity onPress={() => {}} style={LoginStyle.forgotpasswordcontainer}>
          <Text style={LoginStyle.forgotpassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <View style={LoginStyle.noaccountcontainer}>
          <Text>Vous n'avez pas de compte ?</Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={LoginStyle.noAccount}> Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

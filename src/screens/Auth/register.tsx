import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { RegisterStyle } from "./authStyle"
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButtonLarge from '../../components/iconButtonLarge';
import InputCustom from '../../components/inputCustom';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "../../navigation/routes";

export default function Register() {
  const navigation =  useNavigation<NavigationProp<RootStackParamList>>();

  const onDashboard = () => navigation.navigate('dashboard');
  const onLogin = () => navigation.navigate('login');
  const goToPreviousPage  = () => navigation.goBack();
    return (
        <View style={RegisterStyle.container}>
      <View style={RegisterStyle.headerAndBackLog}>
        <TouchableOpacity style={RegisterStyle.iconcontainer} onPress={goToPreviousPage}>
          <Icon name="arrow-back-ios" size={25} color={'#3F414E'} />
        </TouchableOpacity>
      </View>
      <View style={RegisterStyle.bodycontainer}>
        <Text style={RegisterStyle.title}> Créer votre compte </Text>
        <View style={RegisterStyle.space20percent}>
          <IconButtonLarge
            text="Se connecter avec Facebook"
            icon2="sc-facebook"
            iconColor="#FFF"
            iconSize={30}
            onPress={() => {}}
            style={RegisterStyle.bgfacebook}
          />
          <IconButtonLarge
            text="Se connecter avec Google"
            icon2="sc-google-plus"
            iconColor="#FFF"
            iconSize={30}
            onPress={() => {}}
            style={RegisterStyle.bggoogle}
          />
        </View>
        <Text style={RegisterStyle.ortexte}>Ou se connecter avec votre email</Text>
        <View style={RegisterStyle.inputscontainer}>
          <InputCustom label="Nom" iconName="supervised-user-circle" placeholder="Email" />
          <InputCustom label="Email" iconName="email" placeholder="Email" />
          <InputCustom
            label="Mot de passe"
            secureTextEntry={true}
            iconName="lock"
            placeholder="Mot de passe"
          />
        </View>
        <View style={RegisterStyle.buttoncontainer}>
          <IconButtonLarge
            text="Créer un compte"
            icon="create"
            iconColor="#FFF"
            iconSize={30}
            onPress={onDashboard}
            style={RegisterStyle.bgloging}
          />
        </View>

        <View style={RegisterStyle.noaccountcontainer}>
          <Text>Avez vous un compte ?</Text>
          <TouchableOpacity onPress={onLogin}>
            <Text style={RegisterStyle.noAccount}> Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
};

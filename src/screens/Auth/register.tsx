import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { RegisterStyle } from "./authStyle"
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButtonLarge from '../../components/iconButtonLarge';
import InputCustom from '../../components/inputCustom';
export default function Register() {
    return (
        <View style={RegisterStyle.container}>
      <View style={RegisterStyle.headerAndBackLog}>
        <TouchableOpacity style={RegisterStyle.iconcontainer}>
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
            onPress={() => {}}
            style={RegisterStyle.bgloging}
          />
        </View>

        <View style={RegisterStyle.noaccountcontainer}>
          <Text>Avez vous un compte ?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={RegisterStyle.noAccount}> Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
};

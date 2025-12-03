import React from 'react';
import { View, StyleSheet } from 'react-native';
import Style from '../../global/style';
import InputCustom from '../../components/inputCustom';
import IconButtonLarge from '../../components/iconButtonLarge';
import { COLOR_PALETTE } from '../../utils/utilitaires';
export default function ProfileSetting() {
  return (
    <View style={Style.container}>
      <InputCustom
        label="Email"
        iconName="mail"
        placeholder="jonDoe@gmail.com"
      />
      <InputCustom
        label="Pseudo"
        iconName="supervised-user-circle"
        placeholder="jonDoe@gmail.com"
      />
      <InputCustom
        label="Téléphones"
        iconName="phone"
        placeholder="+228 00 00 00 00"
      />
      <InputCustom
        label="Mot de passe"
        iconName="password"
        placeholder="changer le mot de passe"
      />
      <IconButtonLarge
        text="Changer de mot de passe"
        onPress={() => {}}
        style={style.margintop}
        textStyle={style.blacktext}
      />
      <IconButtonLarge
        text="Sauvegarder les modifications"
        onPress={() => {}}
        style={style.buttonsauvegarder}
      />
    </View>
  );
}

const style = StyleSheet.create({
  margintop: {
    marginTop: 20,
    backgroundColor: COLOR_PALETTE.graywhite,
    elevation: 3,
  },
  blacktext: {
    color: '#000',
  },
  buttonsauvegarder:{
    marginTop: 20,
  },
});

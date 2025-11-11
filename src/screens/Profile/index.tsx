import React from 'react';
import {
  View,
  Text,
  //   Image,
  //   TouchableOpacity,
  //   ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_PALETTE } from '../../utils/utilitaires';
import Style from '../../global/style';
import ProfileStyle from './profileStyle';
import ProfilList from '../../components/profilList';
import IconButtonLarge from '../../components/iconButtonLarge';

export default function Profile() {
  return (
    <View style={[Style.container, ProfileStyle.verticalCenter]}>
      <View>
        <View style={ProfileStyle.container}>
          <View style={ProfileStyle.headercontainer}>
            <View style={ProfileStyle.namecontainer}>
              <Text style={ProfileStyle.nametext}>Mahones SITTI</Text>
              <Icon name="edit" size={20} color={COLOR_PALETTE.validation} />
            </View>
            <Text>sittisam2@gmail.com</Text>
          </View>
          <Icon
            name="notifications"
            size={35}
            color={COLOR_PALETTE.primary}
            style={ProfileStyle.iconbg}
          />
        </View>

        <ProfilList iconName="person" title="Mon Profil" />
        <ProfilList iconName="phone" title="Numéro de téléphone" />
        <ProfilList iconName="location-history" title="Adresse de livraison" />
        <ProfilList iconName="help" title="Aide" />
        <ProfilList iconName="textsms" title="A propos" />
      </View>

      <View style={ProfileStyle.logoutcontainer}>
        <IconButtonLarge
          icon="logout"
          text="Déconnexion"
          iconSize={30}
          iconColor={COLOR_PALETTE.white}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

import React from 'react';
import {
  View,
  // Text
} from 'react-native';
import Style from '../../global/style';
import ProfilList from '../../components/profilList';
import type { RootStackParamList } from '../../navigation/routes';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Parametre() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={Style.container}>
      <ProfilList
        title="Notification"
        imageSource={require('../../public/assets/png/setting/mage_notification-bell.png')}
      />
      <ProfilList
        title="Mode sombre"
        imageSource={require('../../public/assets/png/setting/icon-park-outline_dark-mode.png')}
      />
      <ProfilList
        title="Texte Messages"
        imageSource={require('../../public/assets/png/setting/lets-icons_chat.png')}
      />
      <ProfilList
        imageSource={require('../../public/assets/png/setting/hugeicons_help-circle.png')}
        title="Centre d'aide"
        onPress={() => navigation.navigate('centreaide')}
      />
      <ProfilList
        imageSource={require('../../public/assets/png/setting/lucide_info.png')}
        title="A propos de l'application"
        onPress={() => navigation.navigate('apropos')}
      />
    </View>
  );
}

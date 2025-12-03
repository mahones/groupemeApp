import React from 'react';
import { 
    View, 
    // Text
 } from 'react-native';
import Style from '../../global/style';
import ProfilList from '../../components/profilList';
export default function Parametre() {
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
      </View>
    
  );
}

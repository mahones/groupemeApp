import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  //   ImageSourcePropType,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/routes';
// import Style from '../../global/style';
import ProfileStyle from './profileStyle';
import ProfilList from '../../components/profilList';
// import IconButtonLarge from '../../components/iconButtonLarge';

export default function Profile() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={[ProfileStyle.profilecontainer]}>
      <View>
        {/* entête de profile  */}
        <View style={ProfileStyle.container}>
          <View style={ProfileStyle.imagecontainer}>
            <Image
              source={require('../../public/assets/images/Cover-Photoroom.png')}
              style={ProfileStyle.image}
            />
          </View>
          <View style={ProfileStyle.headercontainer}>
            <View style={ProfileStyle.row}>
              <View style={ProfileStyle.profilImageContainer}>
                <Image
                  source={require('../../public/assets/png/setting/typcn_user.png')}
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('profilesetting')}
              >
                <View style={ProfileStyle.profileditContainer}>
                  <Image
                    source={require('../../public/assets/png/setting/iconamoon_edit.png')}
                  />
                  <Text style={ProfileStyle.mofifierprofil}>Modifier</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={ProfileStyle.namecontainer}>
              <Text style={ProfileStyle.nametext}>Mahones SITTI</Text>
            </View>
            <Text>sittisam2@gmail.com</Text>
          </View>
        </View>
        {/* fin de l'entête du profile  */}

        <View style={ProfileStyle.setingscontainer}>
          <ProfilList
            imageSource={require('../../public/assets/png/setting/lucide_user-round.png')}
            title="Profil"
            onPress={() => navigation.navigate('profilesetting')}
          />
          <ProfilList
            imageSource={require('../../public/assets/png/setting/flowbite_language-outline.png')}
            title="Language"
            onPress={() => navigation.navigate('language')}
          />
          <ProfilList
            imageSource={require('../../public/assets/png/setting/akar-icons_gear.png')}
            title="Paramètres"
            onPress={() => navigation.navigate('parametres')}
          />

          <ProfilList
            imageSource={require('../../public/assets/png/setting/mage_file-2.png')}
            title="Termes et conditions"
            onPress={() => navigation.navigate('termescondition')}
          />
          <ProfilList
            imageSource={require('../../public/assets/png/setting/tabler_lock.png')}
            title="Politique de confidentialité"
            onPress={() => navigation.navigate('politiqueconfidentialite')}
          />
          <ProfilList
            imageSource={require('../../public/assets/png/setting/hugeicons_logout-01.png')}
            title="Déconnexion"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
}

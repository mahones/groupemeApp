import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Style from '../../global/style';
import ParticipationsStyle from './participationsStyle';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// import Card from '../../components/card';
import SearchBar from '../../components/searchBare';
import HorizontalCard from '../../components/horizontalCard';
import type { RootStackParamList } from '../../navigation/routes';

export default function Participations() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Style.container}>
      <View>
        <Text style={ParticipationsStyle.title}>Mes participations</Text>
      </View>
      {/* barre de recherche */}
      <SearchBar />
      {/* fin barre de recherche */}

      {/* liste des groupements */}

      <HorizontalCard
        title="Groupement 1 ljio  lkjklj lkjlj lkjlj lj lkj lkjks kd lj  lkjlkj"
        price="1000 fcfa"
        quantity={1}
        etat="Collecte"
        imageSource={require('../../public/assets/images/pexels.jpg')}
        onPress={() => navigation.navigate('SingleGroupements', { id: 1 })}
      />

      <HorizontalCard
        title="Groupement 2 "
        price="1000  fcfa"
        quantity={2}
        etat="Commande en cours"
        imageSource={require('../../public/assets/images/casque.jpg')}
        onPress={() => navigation.navigate('SingleGroupements', { id: 2 })}
      />

      <HorizontalCard
        title="Groupement 3 l"
        price="1000 fcfa"
        quantity={1}
        etat="Collecte"
        imageSource={require('../../public/assets/images/med.jpg')}
        onPress={() => navigation.navigate('SingleGroupements', { id: 3 })}
      />

      <HorizontalCard
        title="Groupement 4 "
        price="1000  fcfa"
        quantity={2}
        etat="Commande en cours"
        imageSource={require('../../public/assets/images/phone.jpg')}
        onPress={() => navigation.navigate('SingleGroupements', { id: 4 })}
      />
      <HorizontalCard
        title="Groupement 1 ljio  lkjklj lkjlj lkjlj lj lkj lkjks kd lj  lkjlkj"
        price="1000 fcfa"
        quantity={1}
        etat="Collecte"
        imageSource={require('../../public/assets/images/savon.jpg')}
        onPress={() => navigation.navigate('SingleGroupements', { id: 5 })}
      />

      <HorizontalCard
        title="Groupement 2 "
        price="1000  fcfa"
        quantity={2}
        etat="Commande en cours"
        imageSource={require('../../public/assets/images/soin.jpg')}
        onPress={() => navigation.navigate('SingleGroupements', { id: 6 })}
      />

      {/* fin liste des groupements */}
    </ScrollView>
  );
}

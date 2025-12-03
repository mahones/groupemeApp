import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Style from '../../global/style';
import ParticipationsStyle from './participationsStyle';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// import Card from '../../components/card';
import SearchBar from '../../components/searchBare';
import HorizontalCard from '../../components/horizontalCard';
import type { RootStackParamList } from '../../navigation/routes';
import { participationsData } from '../../utils/participations';
// import { groupementsData } from '../../utils/groupementsData';

export default function Participations() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const participations = participationsData;
  return (
    <View style={Style.container}>
      <View>
        <Text style={ParticipationsStyle.title}>Mes participations</Text>
      </View>
      {/* barre de recherche */}
      <SearchBar />
      {/* fin barre de recherche */}

      {/* liste des groupements */}

      <FlatList
        // style={{ flex: 1 }}
        data={participations}
        keyExtractor={(item: any) => String(item.id)}
        numColumns={1}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: participation }: { item: any }) => (
          <HorizontalCard
            title={participation.groupement_id.title}
            price={participation.price}
            quantity={participation.quantity}
            etat={participation.groupement_id.etat}
            imageSource={participation.groupement_id.image}
            onPress={() => navigation.navigate('singleGroupements', { id: participation.groupement_id.id })}
          />
        )}
      />
      {/* fin liste des groupements */}
    </View>
  );
}

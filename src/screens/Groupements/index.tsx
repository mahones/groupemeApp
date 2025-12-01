import React from 'react';
import {
  FlatList,
  // TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Style from '../../global/style';
import GroupementsStyle from './groupementsStyle';
import Card from '../../components/card';
import SearchBar from '../../components/searchBare';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/routes';
import { groupementsData } from '../../utils/groupementsData';

export default function Groupements() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const groupements = groupementsData;
  return (
    <View style={[Style.container]}>
      {/* header (fixe) */}
      <View style={GroupementsStyle.fixheader}>
        <View>
          <Text style={GroupementsStyle.title}>Rechercher un groupement</Text>
        </View>
        <SearchBar />
      </View>

      {/* liste des groupements (scrollable) */}
      <FlatList
        contentContainerStyle={localStyles.listContent}
        showsVerticalScrollIndicator={false}
        data={groupements}
        keyExtractor={(item: any) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={localStyles.columnWrapper}
        renderItem={({ item: groupement }: { item: any }) => (
          <View style={[GroupementsStyle.groupementList]}>
            <Card
              title={groupement.title}
              participant={groupement.minimum_participant}
              flagUrl={groupement.flagUrl}
              imageSource={groupement.image}
              price={groupement.price}
              onPress={() =>
                navigation.navigate('singleGroupements', { id: groupement.id })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({

  listContent: { paddingBottom: 20 },
  columnWrapper: { justifyContent: 'space-between' },
  // itemFlex: { flex: 1},
});

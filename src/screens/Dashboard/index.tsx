import React from 'react';
import { ScrollView, View, Text, Image, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Style from '../../global/style';
import DashboardStyle from './dashboardStyle';
import Card from '../../components/card';
import PngButton from '../../components/pngButton';
import { groupementsData } from '../../utils/groupementsData';
import { categoriesData } from '../../utils/groupementsCategories';

import type { RootStackParamList } from '../../navigation/routes';

export default function Dashboard() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedCategory, setSelectedCategory] = React.useState('toutes');
  const groupementsCategories = categoriesData;
  const groupements = groupementsData;
  const handlCategoryPress = (nameCategory: string) => {
    setSelectedCategory(nameCategory);
  };
  const filteredGroupements = React.useMemo(() => {
    return selectedCategory === 'toutes'
      ? groupements
      : groupements.filter(g => g.categorie === selectedCategory);
  }, [selectedCategory, groupements]);

  return (
    <View style={Style.container}>
      {/* entête de dashboard */}
      <View style={DashboardStyle.container}>
        <Text style={DashboardStyle.welcomeText}>Bienvenue, Mahones</Text>
        <Text style={DashboardStyle.title}>
          Nous vous souhaitons une bonne journée
        </Text>
      </View>
      {/* fin entête de dashboard */}

      {/* barre horizontale des catégories */}
      <View style={DashboardStyle.search}>
        <Text style={DashboardStyle.categoryTitle}>Catégories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={DashboardStyle.categoryList}
        >
          {groupementsCategories.map(cat => (
            <PngButton
              key={cat.id}
              imageSource={cat.image}
              label={cat.name}
              containerStyle={
                selectedCategory === cat.name ? DashboardStyle.selected : {}
              }
              onPress={() => handlCategoryPress(cat.name)}
            />
          ))}
        </ScrollView>
      </View>
      {/* fin barre horizontale des catégories */}

      {/* liste des groupements */}
      {/* liste des groupements */}

      {filteredGroupements.length > 0 ? (
        <FlatList
          contentContainerStyle={DashboardStyle.listcontainer}
          showsVerticalScrollIndicator={false}
          data={filteredGroupements}
          keyExtractor={(item: any) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item: groupement }: { item: any }) => (
            <View key={groupement.id} style={DashboardStyle.groupementList}>
              <Card
                title={groupement.title}
                participant={groupement.minimum_participant}
                flagUrl={groupement.flagUrl}
                imageSource={groupement.image}
                price={groupement.price}
                onPress={() =>
                  navigation.navigate('singleGroupements', {
                    id: groupement.id,
                  })
                }
              />
            </View>
          )}
        />
      ) : (
        <View style={DashboardStyle.nonegroupement}>
          <Image
            source={require('../../public/assets/png/icons8-empty-100.png')}
            style={DashboardStyle.nonegroupementImage}
          />
          <Text style={DashboardStyle.nonegroupementText}>
            Aucun groupement ({selectedCategory}) disponible
          </Text>
        </View>
      )}
      {/* liste des groupements */}
      {/* fin liste des groupements */}
    </View>
  );
}

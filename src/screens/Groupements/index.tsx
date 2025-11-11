import React from 'react';
import {
  ScrollView,
  // TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Style from '../../global/style';
import GroupementsStyle from './groupementsStyle';
import Card from '../../components/card';
import SearchBar from '../../components/searchBare';

export default function Groupements() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Style.container}>
      <View >
        <Text style={GroupementsStyle.title}>Rechercher un groupement</Text>
      </View>
      {/* barre de recherche */}
      <SearchBar />
      {/* fin barre de recherche */}

      {/* liste des groupements */}
      <View style={GroupementsStyle.grid}>
        {/* liste des groupements */}
        <View style={GroupementsStyle.groupementList}>
          <Card
            title="Groupements 1"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/pexels.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={GroupementsStyle.groupementList}>
          <Card
            title="Groupements 2"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/casque.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={GroupementsStyle.groupementList}>
          <Card
            title="Groupements 3"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/med.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={GroupementsStyle.groupementList}>
          <Card
            title="Groupements 4"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/phone.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={GroupementsStyle.groupementList}>
          <Card
            title="Groupements 5"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/savon.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>
        <View style={GroupementsStyle.groupementList}>
          <Card
            title="Groupements 6"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/soin.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>
        <View style={GroupementsStyle.groupementList}>
          <Card
            title="Groupements 5"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/savon.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>
        <View style={GroupementsStyle.groupementList}>
          <Card
            title="Groupements 6"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/soin.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>
        {/* liste des groupements */}
      </View>
      {/* fin liste des groupements */}
    </ScrollView>
  );
}

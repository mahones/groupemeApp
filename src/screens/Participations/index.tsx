import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import Style from '../../global/style';
import ParticipationsStyle from './participationsStyle';
// import Card from '../../components/card';
import Card from '../../components/card';
import SearchBar from '../../components/searchBare';
import { COLOR_PALETTE } from '../../utils/utilitaires';

export default function Participations() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Style.container}>

      <View >
        <Text style={ParticipationsStyle.title}>Mes participations</Text>
      </View>
      {/* barre de recherche */}
      <SearchBar />
      {/* fin barre de recherche */}

      {/* liste des groupements */}
      <View style={ParticipationsStyle.grid}>
        {/* liste des groupements */}
        <View style={ParticipationsStyle.groupementList}>
          <Card
            title="Groupements 1"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/pexels.jpg')}
            price="1000"
            onPress={() => {}}
            iconBgColor={COLOR_PALETTE.validation}
          />
        </View>

        <View style={ParticipationsStyle.groupementList}>
          <Card
            title="Groupements 2"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/casque.jpg')}
            price="1000"
            onPress={() => {}}
            iconBgColor={COLOR_PALETTE.validation}
          />
        </View>

        <View style={ParticipationsStyle.groupementList}>
          <Card
            title="Groupements 3"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/med.jpg')}
            price="1000"
            onPress={() => {}}
            iconBgColor={COLOR_PALETTE.validation}
          />
        </View>

        <View style={ParticipationsStyle.groupementList}>
          <Card
            title="Groupements 4"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/phone.jpg')}
            price="1000"
            onPress={() => {}}
            iconBgColor={COLOR_PALETTE.validation}
          />
        </View>

        <View style={ParticipationsStyle.groupementList}>
          <Card
            title="Groupements 5"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/savon.jpg')}
            price="1000"
            onPress={() => {}}
            iconBgColor={COLOR_PALETTE.validation}
          />
        </View>
        <View style={ParticipationsStyle.groupementList}>
          <Card
            title="Groupements 6"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/soin.jpg')}
            price="1000"
            onPress={() => {}}
            iconBgColor={COLOR_PALETTE.validation}
          />
        </View>
        {/* liste des groupements */}
      </View>
      
      {/* fin liste des groupements */}
    </ScrollView>
  );
}

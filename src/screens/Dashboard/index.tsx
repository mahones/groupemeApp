import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Style from '../../global/style';
import DashboardStyle from './dashboardStyle';
import Card from '../../components/card';
export default function Dashboard() {
  return (
    <ScrollView style={Style.container} showsVerticalScrollIndicator={false}>
      {/* entête de dashboard */}
      <View style={DashboardStyle.container}>
        <Text style={DashboardStyle.title}>Bienvenue</Text>
        <Text style={DashboardStyle.title}>Mahones</Text>
      </View>
      {/* fin entête de dashboard */}

      {/* recherche avancée de dashboard */}
      <View style={DashboardStyle.search}>
        <Text>Recherche avancée</Text>
      </View>
      {/* fin recherche avancée de dashboard */}

      <View style={DashboardStyle.grid}>
        {/* liste des groupements */}
        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 1"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/pexels.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 2"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/pexels.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 3"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/pexels.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 4"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/pexels.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 5"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/pexels.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>
        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 6"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/pexels.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>
        {/* liste des groupements */}
      </View>
      
    </ScrollView>
  );
}

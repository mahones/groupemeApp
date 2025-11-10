import React from 'react';
import { 
  ScrollView, 
  View, 
  Text, 

} from 'react-native';
import Style from '../../global/style';
import DashboardStyle from './dashboardStyle';
import Card from '../../components/card';
import PngButton from '../../components/pngButton';
// import IconButton from '../../components/iconButton';
import { COLOR_PALETTE } from '../../utils/utilitaires';
export default function Dashboard() {
  return (
    <ScrollView style={Style.container} showsVerticalScrollIndicator={false}>
      {/* entête de dashboard */}
      <View style={DashboardStyle.container}>
        <Text style={DashboardStyle.welcomeText}>Bienvenue, Mahones</Text>
        <Text style={DashboardStyle.title}>Nous vous souhaitons une bonne journée</Text>
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
          <PngButton
            imageSource={require('../../public/assets/png/icons8-check-all-65.png')}
            label="Toutes"
            containerStyle={{ backgroundColor: COLOR_PALETTE.secondary }}
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-cat-65.png')}
            label="Animaux"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-automobile-65.png')}
            label="Automobile"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-babys-room-65.png')}
            label="Enfants"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-electronics-65.png')}
            label="Électronique"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-house-with-a-garden-65.png')}
            label="Maison"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-informatics-65.png')}
            label="Informatique"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-lip-gloss-65.png')}
            label="Beauté"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-media-65.png')}
            label="Média & Livres"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-phone-65.png')}
            label="Téléphone"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-polo-shirt-65.png')}
            label="Vêtements"
            onPress={() => {}}
          /> 
          <PngButton
            imageSource={require('../../public/assets/png/icons8-ring-side-view-65.png')}
            label="Bijoux"
            onPress={() => {}}
          /> 
        </ScrollView>
      </View>
      {/* fin barre horizontale des catégories */}

      {/* liste des groupements */}
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
            imageSource={require('../../public/assets/images/casque.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 3"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/med.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 4"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/phone.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>

        <View style={DashboardStyle.groupementList}>
          <Card
            title="Groupements 5"
            participant="10"
            flagUrl="https://flagcdn.com/w320/tg.png"
            imageSource={require('../../public/assets/images/savon.jpg')}
            price="1000"
            onPress={() => {}}
          />
        </View>
        <View style={DashboardStyle.groupementList}>
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

import React from 'react';
import { Text, View } from 'react-native';
import Style from '../../global/style';
import IconButtonLarge from '../../components/iconButtonLarge';
import ProposalsStyle from './ProposalsStyle';
import ImagePicker from '../../components/imagePiker';
import InputCustom from '../../components/inputCustom';

export default function Propositions() {
  return (
    <View style={[Style.container, ProposalsStyle.container]}>
      <View style={ProposalsStyle.marginBottom20}>
        <Text style={ProposalsStyle.title}>Ma proposition</Text>
      </View>

      <View>
        <ImagePicker />
      </View>

      <View>
        <InputCustom
        label= "Titre de la proposition" 
        iconName="title"
        />
        <InputCustom
        label= "Titre de la proposition" 
        iconName="title" 
        />
      </View>

      <View style={ProposalsStyle.buttonContainer}>
        <IconButtonLarge
          icon="add"
          iconSize={30}
          iconColor="white"
          text="Ajouter une proposition"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}


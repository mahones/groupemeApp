import React from 'react';
import { Text, View } from 'react-native';
import Style from '../../global/style';
import IconButtonLarge from '../../components/iconButtonLarge';
import ProposalsStyle from './ProposalsStyle';
import ImagePicker from '../../components/imagePiker';

export default function Propositions() {
  return (
    <View style={[Style.container, ProposalsStyle.container]}>
      <View>
        <Text style={ProposalsStyle.title}>Ma proposition</Text>
      </View>

      <View>
        <ImagePicker />
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

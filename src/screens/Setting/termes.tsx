import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import Style from '../../global/style';
import { LOREMIPSUM } from '../../utils/loremIpsum';
export default function Termes() {
  return (
    <View style={Style.container}>
      <Text style={styles.texte} >{ LOREMIPSUM } </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    texte:{
        textAlign: 'justify',
        lineHeight: 25,
    },
})
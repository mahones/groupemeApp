import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR_PALETTE } from '../utils/utilitaires';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TEXT_STANDARD } from '../utils/utilitaires';
type Props = {
  iconName: string;
  title: string;
};
const ProfilList = ({ iconName, title }: Props) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Icon name={iconName} size={25} color={COLOR_PALETTE.secondary} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <Icon
          name="arrow-forward-ios"
          size={20}
          color={COLOR_PALETTE.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR_PALETTE.green,
    
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  text: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: TEXT_STANDARD.medium,
  },
});

export default ProfilList;

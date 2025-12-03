import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
// import { COLOR_PALETTE } from '../utils/utilitaires';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { TEXT_STANDARD } from '../utils/utilitaires';
type Props = {
  title: string;
  children?: React.ReactNode;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
};
const ProfilList = ({  title, imageSource, children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={imageSource}/>
          <Text style={styles.text}>{title}</Text>
        </View>
        {children && <View>
          {children}
        </View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 5,
    
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
    borderRadius: 8,
    backgroundColor: '#E7EBEF',

  },
  text: {
    marginLeft: 25,
    fontWeight: '500',
    fontSize: TEXT_STANDARD.medium,
  },
});

export default ProfilList;

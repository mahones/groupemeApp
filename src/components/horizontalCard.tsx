import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import { COLOR_PALETTE } from '../utils/utilitaires';

type HorizontalCardProps = {
  title: string;
  price: string;
  quantity?: number;
  etat: string;
  imageSource: ImageSourcePropType;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  price,
  quantity,
  etat,
  imageSource,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text
          style={[styles.title, textStyle]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>

        <Text style={styles.etat}>Etat : {etat}</Text>
        <View style={styles.maParticipation}>
          <Text style={styles.text}>Ma paticipaiton ({quantity}): </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_PALETTE.white,
    padding: 5,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: COLOR_PALETTE.white,
    elevation: 3,
    // width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 3,
    fontWeight: '400',
    flexShrink: 1,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 10,
    alignContent: 'space-between',
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  etat: {
    // width: 'auto',
    marginVertical: 3,
    padding: 3,
    borderWidth: 1,
    borderRadius: 5,
    
    alignSelf: 'flex-start',
    borderColor: COLOR_PALETTE.secondary,
    color: COLOR_PALETTE.secondary,
  },
  maParticipation: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
});

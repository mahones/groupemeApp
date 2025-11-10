import React from 'react';
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  Text,
  ViewStyle,
} from 'react-native';
import { COLOR_PALETTE } from '../utils/utilitaires';

type PngButtonProps = {
  imageSource: ImageSourcePropType;
  label: string;
  containerStyle?: ViewStyle;
  onPress: () => void;
};

const PngButton: React.FC<PngButtonProps> = ({
  imageSource,
  label,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.imageBox, containerStyle]}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
  },
  imageBox: {
    marginBottom: 5,
    borderRadius: 15,
    padding: 10,
    backgroundColor: COLOR_PALETTE.primary,
  },
  image: {
    width: 45,
    height: 45,
  },
  text: {
    fontSize: 14,
  },
});

export default PngButton;

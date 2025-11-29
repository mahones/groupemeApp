import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import {
  BORDER_RADIUS_STANDARD,
  COLOR_PALETTE,
  TEXT_STANDARD,
} from '../utils/utilitaires';

interface IconButtonLargeProps {
  icon?: string;
  text: string;
  iconSize?: number;
  iconColor?: string;
  icon2?: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const IconButtonLarge: React.FC<IconButtonLargeProps> = ({
  icon,
  text,
  iconSize,
  iconColor,
  onPress,
  style,
  textStyle,
  icon2,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {icon && <Icon name={icon} size={iconSize} color={iconColor} />}
      {icon2 && <Icon2 name={icon2} size={iconSize} color={iconColor} />}
      <View style={styles.textContainer}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 16,
    borderRadius: BORDER_RADIUS_STANDARD.large,
    backgroundColor: COLOR_PALETTE.secondary,
  },
  text: {
    fontSize: TEXT_STANDARD.big,
    textAlign: 'center',
    justifyContent: 'center',
    color: COLOR_PALETTE.white,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default IconButtonLarge;

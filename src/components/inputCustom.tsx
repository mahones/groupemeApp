import React from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import { COLOR_PALETTE, TEXT_STANDARD } from '../utils/utilitaires';
import Icon from 'react-native-vector-icons/MaterialIcons';

type inputCustoProps = TextInputProps &{
  label: string;
  iconName: string;
};

const InputCustom: React.FC<inputCustoProps> = ({
  label,
  iconName,
  ...restProp
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <Icon name={iconName} size={25} color={COLOR_PALETTE.primary} />
        <TextInput  style={styles.input}
        {...restProp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: COLOR_PALETTE.primary,
    marginVertical: 8,
    paddingVertical: 7,
    paddingHorizontal: 9,
  },
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    zIndex: 1,
    fontSize: TEXT_STANDARD.medium,
    position: 'relative',
    top: 17,
    paddingHorizontal: 5,
    marginLeft: 13,
    backgroundColor: COLOR_PALETTE.white,
    alignSelf: 'flex-start',
  },
  input: {
    flex: 1,
  },
});

export default InputCustom;

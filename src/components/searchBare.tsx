import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_PALETTE, MARGIN_STANDARD } from '../utils/utilitaires';

interface SearchBarWithClearProps {
  onSearch?: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = 'Rechercher...',
}: SearchBarWithClearProps) {
  const [text, setText] = React.useState('');

  const handleChangeText = (newText: string) => {
    setText(newText);
    onSearch?.(newText);
  };

  const handleClear = () => {
    setText('');
    onSearch?.('');
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={25} color={COLOR_PALETTE.primary} style={styles.icon} />
      
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8E8E93"
        value={text}
        onChangeText={handleChangeText}
      />
      
      {text.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <Icon name="close" size={20} color={COLOR_PALETTE.primary}/>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR_PALETTE.white,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 55,
    borderWidth: 1,
    borderColor: COLOR_PALETTE.secondary,
    marginBottom: MARGIN_STANDARD.medium,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  clearButton: {
    padding: 4,
  },
});